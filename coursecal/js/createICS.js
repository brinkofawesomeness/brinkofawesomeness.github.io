// NODE MODULES
const fs = require('fs');
//const { writeFileSync } = require('fs')
const ics = require('ics');
var pdfreader = require("pdfreader");


// GLOBALS
var received = {receivedpdf: false};
var week = {weekdays: {}}
var semester = {term: '', year: '', 
                Fall: {fstart: '', fstartday: '', fend: '', fendday: ''}, 
                Spring: {sstart: '', sstartday: '', send: '', sendday: ''}, 
                Summer: {sumstart: '', sumstartday: '', sumend: '', sumendday: ''}}
var events = {weekevents: {Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sundau: []}}
var numevents = {termnumber: 0, eventsnumber: 0}


// PARSES STRING DATA FROM A GIVEN ARRAY
function stringParse(weekday, day) {
    var temp = [];
    var counter = 0;
    var i = 0
    //goes through weekday array
    for(var k = 0; k < weekday.length; k++) {
        temp = weekday[k].split(" ", 3); //splits up data of first part of each string
        temp[0] = temp[0].slice(0, temp[0].length-1); //removes -
        //console.log(temp);
        //finds where classname begins (3 spaces into string)    
        for(i = 0; i < weekday[k].length; i++) {
            if(weekday[k][i] === ' ') {
                counter++;
            }
            if(counter === 3) {
                counter = 0;
                break;
            }

        }
        //separates classname into separate string
        var classname = weekday[k].slice(i + 1);
        //console.log(classname);
        event = new dateEvent(classname,"n/a",day,"n/a",temp[0],temp[1], "Central", temp[2]);
        weekday[k] = event;
        //console.log(event);
    }
}


// PARSE THE PDF
function parseSchedule (pdfBuffer) {

    // Array with each index containing info about a different class that day
    var Monday = [], Tuesday = [], Wednesday = [], Thursday = [], Friday = [];

    // x position for each day of the week
    var mXpos = 0.0, tXpos = 0.0, wXpos = 0.0, rXpos = 0.0, fXpos = 0.0;
    var prev = 0.0;

    new pdfreader.PdfReader().parseBuffer(pdfBuffer, function(err, item) {
        if (err) console.log("Error in parseFileItems().");
        else if (!item) console.log("Done!");
        // else if (item.file) console.log("file =", item.file.path);
        // else if (item.page) console.log("page =", item.page);
        else if (item.x) {
          
          // sets the semester and year the student has provided for the term provided
          if(item.text.includes("Fall") || item.text.includes("Spring") || item.text.includes("Summer")){
              semester.term = item.text.slice(0, item.text.search(" "))
              semester.year = item.text.slice(item.text.search(" ")+1, item.text.length)
          }
          // Set the X position of each date
          mXpos = item.text === "MONDAY" ? item.x : mXpos,
          tXpos = item.text === "TUESDAY" ? item.x : tXpos,
          wXpos = item.text === "WEDNESDAY" ? item.x : wXpos,
          rXpos = item.text === "THURSDAY" ? item.x : rXpos,
          fXpos = item.text === "FRIDAY" ? item.x : fXpos;

            // Find which day of the week the X position correlates with
            if (item.x < mXpos && item.x > mXpos - 2.0) {

                // If the x val is the same as before, we're reading the same class info, so append it to the string
                if (item.x === prev) Monday[Monday.length - 1] = Monday[Monday.length - 1] + item.text;

                // Else it's a new class and we need to add a new element to the array
                else {
                    Monday.push(item.text);
                    prev = item.x
                }
            }

            // Same as above
            else if (item.x < tXpos && item.x > tXpos - 2.0) {
                if (item.x === prev) Tuesday[Tuesday.length - 1] = Tuesday[Tuesday.length - 1] + item.text;
                else { Tuesday.push(item.text); prev = item.x }
            }
            else if (item.x < wXpos && item.x > wXpos - 2.0) {
                if (item.x === prev) Wednesday[Wednesday.length - 1] = Wednesday[Wednesday.length - 1] + item.text;
                else { Wednesday.push(item.text); prev = item.x }
            }
            else if (item.x < rXpos && item.x > rXpos - 2.0) {
                if (item.x === prev) Thursday[Thursday.length - 1] = Thursday[Thursday.length - 1] + item.text;
                else { Thursday.push(item.text); prev = item.x }
            }
            else if (item.x < fXpos && item.x > fXpos - 2.0) {
                if (item.x === prev) Friday[Friday.length - 1] = Friday[Friday.length - 1] + item.text;
                else { Friday.push(item.text); prev = item.x }
            }
        }
    });

    setTimeout(function() {
        console.log("Monday: ", Monday);
        stringParse(Monday, "Monday");
        console.log("Monday2: ", Monday);
        console.log("Tuesday: ", Tuesday);
        stringParse(Tuesday, "Tuesday");
        console.log("Wednesday: ", Wednesday);
        stringParse(Wednesday, "Wednesday");
        console.log("Thursday: ", Thursday);
        stringParse(Thursday, "Thursday");
        console.log("Friday: ", Friday);
        stringParse(Friday, "Friday");

        var Weekdays = {Monday: Monday, Tuesday: Tuesday, Wednesday: Wednesday, Thursday: Thursday, Friday: Friday}
        week.weekdays = Object.assign({}, Weekdays);
    }, 200);

    // Do the thing
    createICSfromPDF();
}


// CREATES THE ICS FILE
const monthEnum = {"January":0, "February":1, "March":2,
                   "April":3, "May":4, "June":5, "July":6,  
                   "August":7, "September":8, "October":9,
                   "November":10, "Dec":11}

const dayEnum = {"Monday":1, "Tuesday":2, "Wednesday":3, "Thursday":4,
                 "Friday":5, "Saturday":6, "Sunday":7}

function createICSfromPDF() {

  var beginmsg = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Team Deadpool\n"
  var endmsg = "END:VCALENDAR"
  var totalevents = ""
  var monthstring = ""
  var daystring = ""
  var i
  var j
  var count = 0

  let weekstats = week.weekdays;
  console.log(weekstats)

  // loop through each day of the week
  for(i = 0; i < 5; i++){

    if(i == 0){
        var curday = weekstats.Monday
    }
    else if(i == 1){
        var curday = weekstats.Tuesday
    }
    else if(i == 2){
        var curday = weekstats.Wednesday
    }
    else if(i == 3){
        var curday = weekstats.Thursday
    }
    else if(i == 4){
        var curday = weekstats.Friday
    }
    var aDate = new Date();
    var pre = 
    aDate.getFullYear().toString() +
    ((aDate.getMonth() + 1)<10? "0" + (aDate.getMonth() + 1).toString():(aDate.getMonth() + 1).toString()) + 
    ((aDate.getDate() + 1)<10? "0" + aDate.getDate().toString():aDate.getDate().toString());
    var post = (aDate.getHours()%24).toString() + aDate.getMinutes().toString() + "00";

    datetimestamp = pre + "T" + post + "Z";

    if(daystring != ""){
        var temp = parseInt(daystring, 10)
        temp += 1
        daystring = temp.toString()
    }

    for(j = 0; j < curday.length; j++){
        var starttime = curday[j].stime;
        var endtime = curday[j].etime;
        var shour, smin, ehour, emin;
        if(starttime.search("P") != -1){
            var found = starttime.search(":")
            shour = starttime.slice(0, found)
            shour = parseInt(shour, 10)
            shour = (shour%12)+12;
            smin = starttime.slice(found+1, starttime.search("P"))
            smin = parseInt(smin, 10)
        }
        else if(starttime.search("A") != -1){
            var found = starttime.search(":")
            shour = starttime.slice(0, found)
            shour = parseInt(shour, 10)
            smin = starttime.slice(found+1, starttime.search("A"))
            smin = parseInt(smin, 10)
        }
        if(endtime.search("P") != -1){
            var found = endtime.search(":")
            ehour = endtime.slice(0, found)
            ehour = parseInt(ehour, 10)
            ehour = (ehour%12)+12;
            emin = endtime.slice(found+1, endtime.search("P"))
            emin = parseInt(emin, 10)
        }
        else if(endtime.search("A") != -1){
            var found = endtime.search(":")
            ehour = endtime.slice(0, found)
            ehour = parseInt(ehour, 10)
            emin = endtime.slice(found+1, endtime.search("A"))
            emin = parseInt(emin, 10)
        }
  
        var year = remote.getGlobal('semester').year;

        // Creates the bounds for each event
        if(semester.term === "Fall"){
            var startMonth = semester.Fall.fstart.slice(0, semester.Fall.fstart.search(' '));
            var monthnum1 = monthEnum[startMonth]+1 // + 1 due to formatting issues in the ics file
            var startDay = semester.Fall.fstart.slice(semester.Fall.fstart.search(' ')+1, semester.Fall.fstart.length);
            var endMonth = semester.Fall.fend.slice(0, semester.Fall.fend.search(' '));
            var monthnum2 = monthEnum[endMonth]+1 // + 1 due to formatting issues in the ics file
            var endDay = semester.Fall.fend.slice(semester.Fall.fend.search(' ')+1, semester.Fall.fend.length);
        }
        else if(semester.term === "Spring"){
            var startMonth = semester.Spring.sstart.slice(0, semester.Spring.sstart.search(' '));
            var monthnum1 = monthEnum[startMonth]+1 // + 1 due to formatting issues in the ics file
            var startDay = semester.Spring.sstart.slice(semester.Spring.sstart.search(' ')+1, semester.Spring.sstart.length);
            var endMonth = semester.Spring.send.slice(0, semester.Spring.send.search(' '));
            var monthnum2 = monthEnum[endMonth]+1 // + 1 due to formatting issues in the ics file
            var endDay = semester.Spring.send.slice(semester.Spring.send.search(' ')+1, semester.Spring.send.length);
        }
 
        // it is 8 - the day classes start due to the fact we want a full rotation to Monday
        var beginday = parseInt(startDay) + (8 - dayEnum[semester.Fall.fstartday]);
        var finalday = semester.Fall.endDay;

        monthstring = monthnum1.toString()
        monthstring = monthnum1 < 10 ? "0" + monthstring : monthstring
        if(daystring == ""){
            daystring = beginday.toString()
            daystring = beginday < 10 ? "0" + daystring : daystring
        }

        msgData1 = year + monthstring + daystring + "T" + ('0' + shour).slice(-2) + ('0' + smin).slice(-2) + "00"
        msgData2 = year + monthstring + daystring + "T" + ('0' + ehour).slice(-2) + ('0' + emin).slice(-2) + "00"
        msgData3 = curday[j].location
        msgData4 = curday[j].description
        var a = new Date(year, monthnum1, startDay, 0, 0, 0, 0);
        var b = new Date(year, monthnum2, endDay, 0, 0, 0, 0);
        weeks = weeksBetween(a, b);

        var event = "BEGIN:VEVENT\nUID:" + pre + "_SUMMARY" + count +"@Deadpool\nDTSTAMP:" + datetimestamp + "\nDTSTART:" + msgData1 +"\nDTEND:" + msgData2 + "\nRRULE:FREQ=WEEKLY;COUNT=" + weeks + "\nLOCATION:" + msgData3 + "\nSUMMARY:" + msgData4 + "\nEND:VEVENT\n"
        totalevents = totalevents + event
        count += 1
    }
  }

  var icsMSG = beginmsg + totalevents + endmsg;

  // Creates the event
  var uri = "data:text/calendar;charset=utf8," + escape(icsMSG);
  var link = document.createElement("a");
  link.href = uri;
  link.style = "display:none";
  link.download = "icsfile.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  table = document.getElementById("scheduleTable");
  while(table.rows.length > 1) {
    table.deleteRow(0);
  }
  table.style.display = "none"
  document.getElementById("scheduleMessage").style.display = "block"

  weekstats.Monday = []
  weekstats.Tuesday = []
  weekstats.Wednesday = []
  weekstats.Thursday = []
  weekstats.Friday = []
}

// Sets the weeks between each event
function weeksBetween(date1, date2) {
    var WEEK = 1000 * 60 * 60 * 24 * 7;

    var date1ms = date1.getTime();
    var date2ms = date2.getTime();

    var diff = Math.abs(date2ms - date1ms);

    return Math.floor(diff / WEEK)
}