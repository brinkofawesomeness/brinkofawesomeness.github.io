


//	JAVASCRIPT/jQuery INCLUDES:



//	dynamic active navbar
//	search bar toggler
//	disclaimer toggler
//	commercial toggler
//  catalog info toggler
//	order form toggler
//	other info toggler
//	stop info animation
//	sponsor page parallax bg
//	parallax
//	smooth anchor link scrolling
//	smooth mousewheel scrolling
//	navbar hover effect for home page
//	navbar hover effect for contact page
//	google map







//============================================================================================================







// dynamic active navbar


	var sections = $('section'),
	nav = $('.navbar-left');
	 
	
	$(window).on('scroll', function () {
	
	
		var cur_pos = $(this).scrollTop();
		
	 
		sections.each(function() {
		
			var top = $(this).offset().top - 400,
				bottom = top + $(this).outerHeight();
	 
			if (cur_pos >= top && cur_pos <= bottom) {
			
				nav.find('.nav-content').removeClass('nav-active');
	 
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('nav-active');
			
			}
			
		});
		
	});






//===========================================================================================================









// toggle search bar 
		
		
	$('a.search').click(function() {
			
	// push wrapper over
			
		$('.wrapper').toggleClass('wrap-search-toggled');
				
		// push icons over
				
		$('a.search').toggleClass('search-push');
				
		$('div.glyphicon-flag').toggleClass('flag-push');
				
		$('a.glyphicon-home').toggleClass('home-push');
			
	});







//=========================================================================================================







// disclaimer toggle button


	$('div.glyphicon-flag').click(function() {
	
	
		$('.pop-up').fadeIn();
		
		$('.overlay').fadeIn();
		
		$('.navigation-overlay').fadeIn();
	
	
	});
	
	
// close disclaimer button

	
	$('i.x-disclaimer, .overlay').click(function() {
	
	
		$('.pop-up').fadeOut();
		
		$('.overlay').fadeOut();
		
		$('.navigation-overlay').fadeOut();
	
	
	});
	
	
	

	
	
	
	
//=============================================================================================================






// commercial toggler


	function load() {
	
	
		var vid = document.getElementById("video");
	
		vid.load();
		
		vid.muted = false;
		
		vid.loop = false;
		
		vid.controls = true;
		
		vid.onended = function(e) {
		
			$('.vid-overlay').fadeIn();
			
			vid.load();
		
			vid.muted = true;
		
			vid.loop = true;
		
			vid.controls = false;
			
		}
	
	
	}


// fade in

	$('.vid-overlay').click(function() {
	
	
		$('.vid-overlay').delay(500).fadeOut(250);
		
		$('i.play-btn').animate({
		
			'width':'10%',
			'left':'90%',
			'background-color':'black'
		
		});
		
		$('i.play-btn').delay(1000).animate({
		
			'width':'100%',
			'left':'0%',
			'background-color':'white'
		
		});
		
		$('.click-vid').fadeOut(200);
		
		$('.click-vid').delay(1000).fadeIn();
	
	
	});







//=============================================================================================================







// catalog info toggler


	$('i.fa-info-circle').click(function() {
	
		$('.cataloginfo').fadeIn();
		
		$('.overlay').fadeIn();
	
	});
	
//close button

	$('i.x-disclaimer, .overlay').click(function() {
	
		$('.cataloginfo').fadeOut();
		
		$('.overlay').fadeOut();
	
	});
	
	
	
	
	
	
	
//============================================================================================================






//order form open

	$('i.fa-shopping-cart').click(function() {
	
		$('.order').fadeIn();
		
		$('.overlay').fadeIn();
	
	});


//order form close
	
	$('i.x-disclaimer, .overlay').click(function() {
	
		$('.order').fadeOut();
		
		$('.overlay').fadeOut();
	
	});
	
	
	
	
	
//=============================================================================================================







//	other info toggler


	

	$('.email, .nav-email').click(function() {
		
		
		$('.contact-h2, .twitter, .facebook, .instagram, .email').animate({opacity:0},200);
		
		$('.bg-layer').fadeIn(200);
	
		$('#email-popup').delay(700).fadeIn();
		
		
		
		
		
		
		
		//	twitter

		$('a.nav-twitter, .twitter').mouseenter(function() {
		
		
			$('.twitter').css({"opacity":"0","filter":"alpha(opacity=0)"});
			
			$('a.nav-twitter').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.twitter').css({"opacity":"0","filter":"alpha(opacity=0)"});
			
			$('a.nav-twitter').css({'color':'#757575'});
		
		
		});
		
		
		
		
		
		
		
		//	facebook

		$('a.nav-facebook, .facebook').mouseenter(function() {
		
		
			$('.facebook').css({"opacity":"0","filter":"alpha(opacity=0)"});
			
			$('a.nav-facebook').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.facebook').css({"opacity":"0","filter":"alpha(opacity=0)"});
			
			$('a.nav-facebook').css({'color':'#757575'});
		
		
		});
		
		
		
		
		
		
		//	insta

		$('a.nav-insta, .instagram').mouseenter(function() {
		
		
			$('.instagram').css({"opacity":"0","filter":"alpha(opacity=0)"});
			
			$('a.nav-insta').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.instagram').css({"opacity":"0","filter":"alpha(opacity=0)"});
			
			$('a.nav-insta').css({'color':'#757575'});
		
		
		});
		
		
		
		
		
		//	email

		$('a.nav-email, .email').mouseenter(function() {
		
		
			$('.email').css({"opacity":"0","filter":"alpha(opacity=0)"});
			
			$('a.nav-email').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.email').css({"opacity":"0","filter":"alpha(opacity=0)"});
			
			$('a.nav-email').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
	
	
	});
	
	
//	close other info	
	
	
	$('i.x-contact').click(function() {
		
		
		$('.twitter, .facebook, .instagram, .email').delay(800).animate({opacity:.3},350);
		
		$('.contact-h2').delay(650).animate({opacity:1},400);
		
		$('.bg-layer').fadeOut(1300);
	
		$('#email-popup').fadeOut();
		
		$('a.nav-email').css({'background-color':'none','padding-left':'15px','text-decoration':'none',"transition":"200ms",'-webkit-transition':'200ms',"-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		
		// twitter

		$('a.nav-twitter, .twitter').mouseenter(function() {
		
		
			$('.twitter').css({"background-color":"#00aced","opacity":"1","filter":"alpha(opacity=100)","transition":"400ms","-webkit-transition":"400ms","-moz-transition":"400ms","-ms-transition":"400ms"});
			
			$('a.nav-twitter').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.twitter').css({"background-color":"black","opacity":".3","filter":"alpha(opacity=30)"});
			
			$('a.nav-twitter').css({'background-color':'none','text-decoration':'none',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});

		
		
		
	// facebook

		$('a.nav-facebook, .facebook').mouseenter(function() {
		
		
			$('.facebook').css({"background-color":"#3b5998","opacity":"1","filter":"alpha(opacity=100)","transition":"400ms","-webkit-transition":"400ms","-moz-transition":"400ms","-ms-transition":"400ms"});
			
			$('a.nav-facebook').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.facebook').css({"background-color":"black","opacity":".3","filter":"alpha(opacity=30)"});
			
			$('a.nav-facebook').css({'background-color':'none','text-decoration':'none',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
		
		
		
		
	// instagram

		$('a.nav-insta, .instagram').mouseenter(function() {
		
		
			$('.instagram').css({"background-color":"black","opacity":"1","filter":"alpha(opacity=100)","transition":"400ms","-webkit-transition":"400ms","-moz-transition":"400ms","-ms-transition":"400ms"});
			
			
			$('a.nav-insta').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			
			$('.ig-bg').css({'opacity':'1','filter':'alpha(opacity=100)'});
			
			
			$('i.fa-instagram').css({'color':'black'});
		
		
		}).mouseleave(function() {
		
		
			$('.instagram').css({"background-color":"black","opacity":".3","filter":"alpha(opacity=30)"});
			
			
			$('.ig-bg').css({'opacity':'0','filter':'alpha(opacity=0)'});
			
			
			$('i.fa-instagram').css({'color':'white'});
			
			
			$('a.nav-insta').css({'background-color':'none','text-decoration':'none',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
		
		
		
		
	//	email

		$('a.nav-email, .email').mouseenter(function() {
		
		
			$('.email').css({"background-color":"#ac1919","opacity":"1","filter":"alpha(opacity=100)","transition":"400ms","-webkit-transition":"400ms","-moz-transition":"400ms","-ms-transition":"400ms"});
			
			$('a.nav-email').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.email').css({"background-color":"black","opacity":".3","filter":"alpha(opacity=30)"});
			
			$('a.nav-email').css({'background-color':'none','text-decoration':'none',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
	
	
	});
	
	
	
	
	
	
	
//==========================================================================================================







	// stop info animation
	
	$('i.fa-info-circle').click(function() {
	
		$('i.fa-info-circle').css("-webkit-animation", "none");
		$('i.fa-info-circle').css("-moz-animation", "none");
		$('i.fa-info-circle').css("-ms-animation", "none");
		$('i.fa-info-circle').css("animation", "none");
	
	});







//=============================================================================================================






// sponsors page parallax bg 




	function sponsor_parallax() {
	
	
		var spnsr_bg = document.getElementById('spnsr-bg');
		
		spnsr_bg.style.top = -(window.pageYOffset / 4) + 'px';
	
	
	}
	
	window.addEventListener("scroll", sponsor_parallax, false);






//=============================================================================================================







// PARALLAX demo from YouTuber "optikalefx"
			
			
			
			
	(function($) {
				
				
		var $container = $('.page-content');
		var $divs = $container.find('div.parallax-bg');
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
				
				
		// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
				
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
	
	
	
	
	
	
	
//======================================================================================================







// Smooth anchor link scrolling


		
//http://css-tricks.com/snippets/jquery/smooth-scrolling/



		
	$(function() {
	
		$('a[href*=#]:not([href=#])').click(function() {
		
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			
					var target = $(this.hash);
				
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				
					if (target.length) {
					
						$('html,body').animate({
						
						scrollTop: target.offset().top
						
						}, 1000);
					
					return false;	
					
				}
				
			}
			
		});
		
	});	
	
	
	
	
	
	
//=========================================================================================================	







// Smooth mousewheel scrolling for nice parallax effect

		
		
//http://bassta.bg/2013/05/smooth-page-scrolling-with-tweenmax/


			
			
			
	$(function(){	

		var $window = $(window);
		var scrollTime = 0.65;		// change for increase/decrease speed //0.85
		var scrollDistance = 110;	// change for increase/decrease distance

		$window.on("mousewheel DOMMouseScroll", function(event){

			event.preventDefault();	

			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);

			TweenMax.to($window, scrollTime, {
			
				scrollTo : { y: finalScroll, autoKill:true },
				
					ease: Power1.easeOut,
					
					overwrite: 5		
					
				});

		});
		
	});
	
	
	
	
	
	
	
//=================================================================================================================






//	navbar hover effect for home page


	$(function() {
	
	
		$('.about-link, a.nav-about').mouseenter(function() {
		
		
			$('.about-link').css({'color':'white',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
			$('a.nav-about').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.about-link').css({'color':'#ac1919',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
			$('a.nav-about').css({'background-color':'none','text-decoration':'none','border-radius':'0px','padding-left':'15px','padding-bottom':'0px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
		
		
		$('.catalog-link, a.nav-catalog').mouseenter(function() {
		
		
			$('.catalog-link').css({'color':'white',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
			$('a.nav-catalog').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.catalog-link').css({'color':'#ac1919',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
			$('a.nav-catalog').css({'background-color':'none','text-decoration':'none','border-radius':'0px','padding-left':'15px','padding-bottom':'0px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
		
		
		$('.contact-link, a.nav-contact').mouseenter(function() {
		
		
			$('.contact-link').css({'color':'white',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
			$('a.nav-contact').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.contact-link').css({'color':'#ac1919',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
			$('a.nav-contact').css({'background-color':'none','text-decoration':'none','border-radius':'0px','padding-left':'15px','padding-bottom':'0px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
		
		
		$('.about-link, .abouttxt').mouseenter(function() {
		
		
			$('.about-link').css({'color':'white',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			$('.abouttxt').css({'background-color':'black',"transition":"250ms","-webkit-transition":"250ms","-moz-transition":"250ms","-ms-transition":"250ms",'text-decoration':'none','width':'500px','opacity':'.7','filter':'alpha(opacity=70)'});
		
		
		}).mouseleave(function() {
		
		
			$('.about-link').css({'color':'#ac1919',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			$('.abouttxt').css({'background-color':'none',"transition":"250ms","-webkit-transition":"250ms","-moz-transition":"250ms","-ms-transition":"250ms",'text-decoration':'none','width':'300px','opacity':'1','filter':'alpha(opacity=100)'});
		
		
		});
		
		
		$('.catalog-link, .catalogtxt').mouseenter(function() {
		
		
			$('.catalog-link').css({'color':'white',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			$('.catalogtxt').css({'background-color':'black',"transition":"250ms","-webkit-transition":"250ms","-moz-transition":"250ms","-ms-transition":"250ms",'text-decoration':'none','width':'500px','opacity':'.7','filter':'alpha(opacity=70)'});
		
		
		}).mouseleave(function() {
		
		
			$('.catalog-link').css({'color':'#ac1919',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			$('.catalogtxt').css({'background-color':'none',"transition":"250ms","-webkit-transition":"250ms","-moz-transition":"250ms","-ms-transition":"250ms",'text-decoration':'none','width':'300px','opacity':'1','filter':'alpha(opacity=100)'});
		
		
		});
		
		
		$('.contact-link, .contacttxt').mouseenter(function() {
		
		
			$('.contact-link').css({'color':'white',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			$('.contacttxt').css({'background-color':'black',"transition":"250ms","-webkit-transition":"250ms","-moz-transition":"250ms","-ms-transition":"250ms",'text-decoration':'none','width':'500px','opacity':'.7','filter':'alpha(opacity=70)'});
		
		
		}).mouseleave(function() {
		
		
			$('.contact-link').css({'color':'#ac1919',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			$('.contacttxt').css({'background-color':'none',"transition":"250ms","-webkit-transition":"250ms","-moz-transition":"250ms","-ms-transition":"250ms",'text-decoration':'none','width':'300px','opacity':'1','filter':'alpha(opacity=100)'});
		
		
		});
	
	
	});






//=================================================================================================================







//	navbar hover effect for contact page


	$(function() {
	
	

	// twitter

		$('a.nav-twitter, .twitter').mouseenter(function() {
		
		
			$('.twitter').css({"background-color":"#00aced","opacity":"1","filter":"alpha(opacity=100)","transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			$('a.nav-twitter').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.twitter').css({"background-color":"black","opacity":".3","filter":"alpha(opacity=30)"});
			
			$('a.nav-twitter').css({'background-color':'none','text-decoration':'none','border-radius':'0px','padding-left':'15px','padding-bottom':'0px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});

		
		
		
	// facebook

		$('a.nav-facebook, .facebook').mouseenter(function() {
		
		
			$('.facebook').css({'background-color':'#3b5998','opacity':'1','filter':'alpha(opacity=100)',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			$('a.nav-facebook').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.facebook').css({"background-color":"black","opacity":".3","filter":"alpha(opacity=30)"});
			
			$('a.nav-facebook').css({'background-color':'none','text-decoration':'none','border-radius':'0px','padding-left':'15px','padding-bottom':'0px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
		
		
		
		
	// instagram

		$('a.nav-insta, .instagram').mouseenter(function() {
		
		
			$('.instagram').css({"background-color":"black","opacity":"1","filter":"alpha(opacity=100)","transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			
			$('a.nav-insta').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			
			$('.ig-bg').css({'opacity':'1','filter':'alpha(opacity=100)'});
			
			
			$('i.fa-instagram').css({'color':'black',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.instagram').css({"background-color":"black","opacity":".3","filter":"alpha(opacity=30)"});
			
			
			$('.ig-bg').css({'opacity':'0','filter':'alpha(opacity=0)'});
			
			
			$('i.fa-instagram').css({'color':'white',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			
			$('a.nav-insta').css({'background-color':'none','text-decoration':'none','border-radius':'0px','padding-left':'15px','padding-bottom':'0px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
		
		
		
		
	//	email

		$('a.nav-email, .email').mouseenter(function() {
		
		
			$('.email').css({"background-color":"#ac1919","opacity":"1","filter":"alpha(opacity=100)","transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
			
			$('a.nav-email').css({'background-color':'white','text-decoration':'none','border-radius':'50px','padding-left':'20px','width':'189px','padding-bottom':'30px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		}).mouseleave(function() {
		
		
			$('.email').css({"background-color":"black","opacity":".3","filter":"alpha(opacity=30)"});
			
			$('a.nav-email').css({'background-color':'none','text-decoration':'none','border-radius':'0px','padding-left':'15px','padding-bottom':'0px',"transition":"200ms","-webkit-transition":"200ms","-moz-transition":"200ms","-ms-transition":"200ms"});
		
		
		});
		
	});	
	
	
	

	
	
//=========================================================================================================================================







// google map
	
	
	function initialize() {
	
	
		var mapCanvas = document.getElementById('map_canvas');
		var myLatLng = new google.maps.LatLng(35.547668, -84.320353)
		var mapOptions = {
		
			center: myLatLng,
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			panControl: false
		
		};
		var map = new google.maps.Map(mapCanvas, mapOptions);
		
		var contentString = '<div class="infowindow"><p>Modern Nook Design Headquarters</p></div>';


/* NOT WORKING
		
		var infowindow = new google.maps.InfoWindow({
		
			content: contentString,
		
		});
*/		
		
		var marker = new google.maps.Marker({
		
			position: myLatLng,
			map: map,
			title: 'Modern Nook Design Headquarters'
		
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	
	}
	
	$(function() {
	
		google.maps.event.addDomListener(window, 'load', initialize);
		
		$('#email-popup').fadeOut(500).removeClass('contact_hide');
	
	});