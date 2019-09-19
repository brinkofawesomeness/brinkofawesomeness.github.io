//---------- HEIGHT FUNCTION ----------
// get window height
var windowHeight = $(window).height();
var navHeight = $('nav').height();
// defining height for sections
$('.windowHeight').css({'height':(windowHeight)+'px'});
$('.windowHeightNav').css({'height':(windowHeight - navHeight)+'px'});
$('.halfWindowHeight').css({'height':(windowHeight * .5)+'px'});
$('.quarterWindowHeight').css({'height':(windowHeight * .25)+'px'});
$('.mapHeight').css({'height':(windowHeight * .9)+'px'});


//---------- PARALLAX from optikalefx ----------
(function($) {
	var $container = $('body');
    var $divs = $container.find('.parallax');
    var $pageScroll = $(window);
    var secHeight = $divs.eq(0).closest('section').height();
    var difHeight = $divs.eq(0).height() - secHeight;
    var len = $divs.length;
    var i,div,li,offset,scroll,top,transform;
    // cache initial offsets
    var offsets = $divs.get().map(function(div,d) {
        return $(div).offset();
    });
	var render = function() {
		top = $pageScroll.scrollTop();
		for(i=0; i<len; i++) {
			// get DOM object
			div = $divs[i]
			// offset
			offset = top - offsets[i].top;
			// transform scroll variable
			scroll = ~~(offset / secHeight * difHeight);
			// transform string
			transform = 'translate3d(0px, ' + scroll + 'px, 0px)';
			// apply
			div.style.webkitTransform = transform;
            div.style.MozTransform = transform;
            div.style.msTransform = transform;
            div.style.OTransform = transform;
            div.style.transform = transform;
		}
	};
	(function loop(){
		requestAnimationFrame(loop);
        render();
    })();
	// cross-browser support from http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	(function() {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame =
                window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
				lastTime = currTime + timeToCall;
				return id;
            };
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
            };
    }());
})(jQuery);


//---------- ANCHOR LINK SCROLL ANIMATION ----------
var nav_height = $('nav').height();
$('#header-arrow-down,.btn, nav ul li a[href^="#"]').on('click', function(event) { // event = e
   // prevent default anchor click behavior
   event.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   $('html, body').animate({
       scrollTop:$(hash).offset().top - nav_height
   },400,function(){
       // when done, add hash to url
       // window.location.hash = hash;
   });
});


//---------- NAVBAR COLOR CHANGE ON SCROLL ----------
if($(window).width() > 768) {
    $(window).scroll(function() {
       if($(this).scrollTop() > 0) {
            $('nav').addClass('navbar-white');
            $('.fill-primary-1').css({'fill':'#1f3f54'});
            $('.fill-primary-2').css({'fill':'#00adef'});
        } else {
            $('nav').removeClass('navbar-white');
            $('.fill-primary-1').css({'fill':'#f4f4f1'});
            $('.fill-primary-2').css({'fill':'#f4f4f1'});
        }
   }); 
} else {
    $('nav').css({'background-color':'#f4f4f1'});
}


//---------- DESKTOP BROWSERS ----------
if($(window).width() > 768) {
    /*=======DYNAMIC ACTIVE NAVBAR=======*/
    $('#myScrollspy').on('activate.bs.scrollspy', function () {
        $('.nav-a').addClass('navigation-active');
    });
};


//---------- GOOGLE MAP ----------
function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var myLatLng = new google.maps.LatLng(41.498715,-81.693766);
    var mapOptions = {
        center: myLatLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        scrollwheel: false
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
		position: myLatLng,
        map: map,
        title: 'HQ'
	});
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);