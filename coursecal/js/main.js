// CHECK TO MAKE SURE THE BROWSER CAN SUPPORT COURSECAL
function isSupported() {
    if (window.File && window.FileList && window.FileReader && window.Blob) {
        //window.alert('File APIs supported!');
    } else {
        window.alert('File APIs not supported :(');
    }
}

// EXECUTE WHEN A FILE IS DROPPED
function handlePDF(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    
    var files = evt.dataTransfer.files;
    var output = [];

    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a', ')</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul';
}


// EXECUTE WHEN A FILE IS DRAGGED OVER
function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
}


// SETUP DND LISTENERS
var dropZone = document.getElementById('dropZone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handlePDF, false);