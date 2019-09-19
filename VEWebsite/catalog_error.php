<!DOCTYPE html>



<?php



if (isset($_REQUEST['submit'])) {



// variables



/*
$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$theme = $_POST['theme'];
$package = $_POST['package'];
$payment = $_POST['payment'];
$account = $_POST['accnt'];
$comment = $_POST['comment'];
*/



// check input validation 



   $errors = array();



   if (empty($_POST["name"])) {
     $errors[] = "name";
	 $errorMsg = "* required field";
     $nameErr = "*";
   } else {
     $name = $_POST["name"];
   }
   
   if (empty($_POST["company"])) {
     $errors[] = "company";
     $errorMsg = "* required field";
     $companyErr = "*";
   } else {
     $company = $_POST["company"];
   }
     
   if (empty($_POST["email"])) {
     $errors[] = "email";
     $errorMsg = "* required field";
     $emailErr = "*";
   } else {
     $email = $_POST["email"];
   }

   if (empty($_POST["theme"])) {
     $errors[] = "theme";
     $errorMsg = "* required field";
     $themeErr = "*";
   } else {
     $theme = $_POST["theme"];
   }

   if (empty($_POST["package"])) {
     $errors[] = "package";
     $errorMsg = "* required field";
     $packageErr = "*";
   } else {
     $package = $_POST["package"];
   }
   
   $payment = $_POST['payment'];
   
   if (empty($_POST["accnt"])) {
     $errors[] = "account number";
     $errorMsg = "* required field";
     $accountErr = "*";
   } else {
     $account = $_POST["accnt"];
   }
   
   $comment = $_POST['comment'];



// send email



  if (empty($errors)) { 
  
  
  
  // email content
  
  
  
  $from = "Modern Nook Design Order";
  $to = "mnd@modernnook.com";
  $subject = "Order Form";
  
  
  
  $message = "Name:  ".$name."\r\n"."Company:  ".$company."\r\n"."Email:  ".$email."\r\n"."Theme:  ".$theme."\r\n"."Package:  ".$package."\r\n"."Payment Plan:  ".$payment."\r\n"."VE Bank Account Number:  ".$account."\r\n"."Additional Requests:  ".$comment;
  
  
  
  mail($to, $subject, $message, "From:".$from);
  
  
  
  // redirect to form-sent page



  header('Location: form-sent.php');
  
  
  
  } else {
  
  
   header('Location: catalog_error.php');
  
  
  }



}



?>



<html lang="en">

	<head>
	
		<title>Modern Nook Design | Catalog</title>
		<meta charset="utf-8">
<!--	<meta http-equiv="X-UA-Compatible" content="IE=edge">  -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
		<meta name="keywords" content="Interior, Design, Virtual, Enterprise, International, Modern, Nook, Design, Sequoyah, High, School, Furniture, Business, Home, Decor">
		<meta name="description" content="Browse our online catalog for all of your interior design wishes.">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"> <!-- BOOTSTRAP CSS CDN FOR QUICKER LOADING TIME -->
		<link rel="stylesheet" href="css/style.css" type="text/css">
		<link rel="stylesheet" href="css/catalog.css" type="text/css">
		<link rel="stylesheet" href="css/validation.css" type="text/css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"> <!-- FONT-AWESOME FOR ADDED GLYPHICONS -->
		<link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Raleway' type='text/css'> <!--GOOGLE FONTS LINK -->
		<link href='http://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet' type='text/css'> <!-- ORDER FORM FONT -->
		<link rel="icon" href="css/images/iconimg.gif" type="image/gif">
	
	</head>
	
	<body>
	
	
	
	
	
<!-- NAVIGATION BAR -->		

	
		
		
		<div class="nav-wrap">
		

			<div class="navbar-left">
			
				<!-- company logo -->
					
				<img class="navbar-brand" src="css/images/White_translogo.png">
				
				<!-- navbar content -->
						
				<ul class="nav-content">
					
					<li class="navtitle"><a href="home.php" class="glyphicon glyphicon-home"></a></li>
					
					<div class="about-sym"><a href="about.php" class="fa fa-question-circle about-link"></a></div>
					
					<div class="catalog-sym"><a href="catalog.php" class="fa fa-shopping-cart catalog-link"></a></div>
					
					<div class="contact-sym"><a href="contact.php" class="fa fa-phone-square contact-link"></a></div>
									
					<hr class="navHr">
					
					<!-- sub-content -->
							
					<ul class="nav navbar-nav sub-content nav-thmes">
							
						<li class="list-height"><a href="#nook" class="nav-content nav-thme">The Nook</a></li>
						<li class="list-height"><a href="#man" class="nav-content nav-thme">Man Cave</a></li>
						<li class="list-height"><a href="#anchors" class="nav-content nav-thme">Anchors Aweigh</a></li>
						<li class="list-height"><a href="#fools" class="nav-content nav-thme">Fool's Paradise</a></li>
						<li class="list-height"><a href="#bat" class="nav-content nav-thme">Bat Cave</a></li>
						<li class="list-height"><a href="#country" class="nav-content nav-thme">Country Chic</a></li>
						<li class="list-height"><a href="#bungalow" class="nav-content nav-thme">Bohemian Bungalow</a></li>
						<li class="list-height"><a href="#west" class="nav-content nav-thme">Wild Wild West</a></li>
						<li class="list-height"><a href="#20s" class="nav-content nav-thme">Roaring 20s</a></li>
						<li class="list-height"><a href="#glam" class="nav-content nav-thme">Glitz &amp; Glamour</a></li>
					
							
					</ul>
					
					<hr class="navHr2">
							
				</ul>
						
			</div>
		
			
		</div> <!-- end NAVIGATION BAR -->
		
		
		
		<!-- CHECKBOX -->	



		<input type="checkbox" id="nav-toggler"/>
		
		
		
		<!-- WRAPPER -->
		
		
		
		<div class="wrapper">
		
		
		
		
<!--			<div class="shadow"></div>
		
		
		
		<!-- NAV-TOGGLE BUTTON -->
			
			
			
				
			<label for="nav-toggler" class="nav-toggle"><i class="fa fa-bars"></i></label> <!-- end nav-toggle button -->
		
		
		
		
		<!-- POP UP BUTTON -->
	
	
	
	
			<div class="glyphicon glyphicon-flag"></div>
			
			
			
			
		<!-- CART BUTTON -->
		
		
		
		
			<div class="cart"><i class="fa fa-shopping-cart add-to-cart"></i></div>
			
			
			
			
		<!-- INFO BUTTON --> 
		
		
		
		
			<div class="info"><i class="fa fa-info-circle"></i></div>
			
			
			
			
		<!-- PAGE-CONTENT -->
		
		
		
		
			<div class="page-content">
			
			
			
				<div class="nav-bg"></div>
			
			
			
			<!-- CAROUSEL -->
			
			
				<section id="myCarousel" class="carousel slide" data-ride="carousel">
				
				
					<ol class="carousel-indicators">
					
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
						<li data-target="#myCarousel" data-slide-to="3"></li>
					
					</ol>
					
					<div class="carousel-inner">
					
					
						<div class="item active">
							
							<img src="css/images/catalog/carousel-0.jpg" class="carousel-0">
							
							<div class="carousel-caption">
							
								<h3>Introducing our new 2014-2015 theme lineup!</h3>
								
							</div>
							
						</div>
						
						<div class="item">
							
							<img src="css/images/catalog/carousel-1.jpg" class="carousel-1">
							
							<div class="carousel-caption">
							
								<h3>We focus on design, and we believe small details matter most when creating beautiful rooms.</h3>
								
							</div>
							
						</div>
						
						<div class="item">
							
							<img src="css/images/catalog/carousel-2.jpg" class="carousel-2">
							
							<div class="carousel-caption">
							
								<h3>See something you fancy?  Fill out an order form by clicking the cart in the top right!</h3>
								
							</div>
							
						</div>
						
						<div class="item">
							
							<img src="css/images/catalog/carousel-3.jpg" class="carousel-3">
							
							<div class="carousel-caption">
							
								<h3>Trying to understand package deals can be overwhelming.  Click the info icon in the top right if you need help!</h3>
								
							</div>
							
						</div>
					
					
					</div>
					
					<a class="carousel-control left" data-target="#myCarousel" data-slide="prev">
					
						<span class="icon-prev"></span>
						
					</a>
					
					<a class="carousel-control right" data-target="#myCarousel" data-slide="next">
					
						<span class="icon-next"></span>
						
					</a>
					
				
				</section> <!-- end carousel -->
				
				
	<!-- THE NOOK -->		

	
				<section id="nook">
				
				
					<div id="thenook-img" class="parallax-still"></div> 
					
					<div id="thenook-content" class="theme-content parallax-still">
					
					
						<div class="thenook-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">The Nook</h1>
						
						<h4 class="theme-description">To quote Dr. Seuss, "We took a look.  We saw a Nook."  &#40;Who doesn't admire Dr. Seuss?&#41;  Yes, we looked into our hearts and imaginations to create our namesake.  Nook:  cozy, comfortable, secluded, secure.  &#40;Yeah, we just quoted Webster too.&#41;  Those adjectives sound pretty spectacular, right?  Then grab a book, and enjoy your Nook!</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-deluxe">&#40;Recommended&#41;</h5>
						
						</div>
					
					
					</div>
					
				
				</section> <!-- end the nook -->
				
				
	<!-- MAN CAVE -->
	
	
				<section id="man">
		
		
					<div id="mancave-img" class="parallax-still"></div>
					
					<div id="mancave-content" class="theme-content parallax-still">
					
						
						<div class="mancave-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">Man Cave</h1>
						
						<h4 class="theme-description">As if you weren't already sold from the title, this theme includes all the technology and classic game tables to your manly heart's content.  But you already knew that because... man cave, duh!  On a scale of 1 to fun, this theme is a solid Bruce Lee movie.  It just screams jealousy from all of your guy friends.  Now, we know your finger gets tired of switching channels back and forth.  Our solution?  More TVs, of course!  Channel flipping is a thing of the past, dude.  Or perhaps you're one of those classy fellows who enjoys poker tables so you can play with your buddies.  That's acceptable too.  So why are you still reading this?  We know you know what to do.</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-cardinal">&#40;Recommended&#41;</h5>
						
						</div>
					
					</div>

				
				</section> <!-- end man cave -->
				
				
	<!-- ANCHORS AWEIGH -->
	
	
				<section id="anchors">
	
	
					<div id="aa-img" class="parallax-still"></div>
					
					<div id="aa-content" class="theme-content parallax-still">
					
					
						<div class="aa-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">Anchors Aweigh</h1>
						
						<h4 class="theme-description">A step inside this room is like a step onto the deck of a ship... But without all the swearing.  &#40;Unless that's what you're into&#8212;we won't judge.&#41;  Either way, the gorgeous blues and reds of the coastline are here to stay.  This nautical-inspired theme has something to offer everyone who loves the deep blue as much as we do!  Set your coordinates to the cart on the top right, and set sail, Captain!  Also, no we didn't spell our theme wrong.  Seriously, look it up.  As the saying goes, "You learn something new everyday."</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-deluxe">&#40;Recommended&#41;</h5>
						
						</div>
					
					
					</div>
					
					
				</section> <!-- end anchors aweigh -->
				
				
	<!-- FOOL'S PARADISE -->
	
	
				<section id="fools">
	
	
					<div id="fp-img" class="parallax-still"></div>
					
					<div id="fp-content" class="theme-content parallax-still">
					
					
						<div class="fp-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">Fool's Paradise</h1>
						
						<h4 class="theme-description">Ready your luggage for Fool's Paradise.  It's sort of like walking into a resort... in your own house!  This is the pivotal moment in your life where you can finally express your colorful taste and your carefree vibe.  Brilliant colors and relaxing atmosphere&#8212;what more might you possibly want?  Don't let all those Negative Nellies at work bring you down.  You're a free spirit.  Do what you want, and we know you want this theme.  You aren't like those fools at work.  You just do you.</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-deluxe">&#40;Recommended&#41;</h5>
						
						</div>
					
					
					</div>
					
					
				</section> <!-- end fool's paradise -->
				
				
	<!-- BAT CAVE -->
	
	
				<section id="bat">
	
	
					<div id="batcave-img" class="parallax-still"></div>
					
					<div id="batcave-content" class="theme-content parallax-still">
					
					
						<div class="batcave-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">Bat Cave</h1>
						
						<h4 class="theme-description">Have you ever wanted to feel like Batman?  Don't lie.  Of course you have!  With this dark, bat-themed, extreme man cave, your space will be transformed into the Batman room you've always secretly dreamed of but have been too embarrassed to tell your wife.  Enjoy the sleek black, high-tech, and millionaire look that the Batman fanatic inside of you has come to know and love.  We're serious when we say that Bruce Wayne himself couldn't get a deal this great.  Rest assured, we do not include actual bats with this theme.  That's all we can tell you.  The rest is classified.</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-cardinal">&#40;Recommended&#41;</h5>
						
						</div>
					
					
					</div>
					
					
				</section> <!-- end bat cave -->
				
				
	<!-- COUNTRY CHIC -->
	
	
				<section id="country">
	
	
					<div id="cc-img" class="parallax-still"></div>
					
					<div id="cc-content" class="theme-content parallax-still">
					
					
						<div class="cc-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">Country Chic</h1>
						
						<h4 class="theme-description">Southern-made.  You-approved.  Perhaps you grew up on a farm, or at least maybe you wish you did.  The craftsmanship and vintage elegance that this theme offers will leave you baffled at it's beauty.  It's alright.  Take a minute.  Just pick your jaw up from the floor and proceed to checkout.  Farm-to-table is the latest catch-phrase among chefs.  You could be a chef&#8212;you post all those pictures of food on social media.  Impress all of your followers with a fancy term like "farm-to-table."  So join the trend.  You trendy person, you.</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-deluxe">&#40;Recommended&#41;</h5>
						
						</div>
					
					
					</div>
					
					
				</section> <!-- end country chic -->
				
				
	<!-- BOHEMIAN BUNGALOW -->
	
	
				<section id="bungalow">
	
	
					<div id="bb-img" class="parallax-still"></div>
					
					<div id="bb-content" class="theme-content parallax-still">
					
					
						<div class="bb-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">Bohemian Bungalow</h1>
						
						<h4 class="theme-description">Groovy patterns and glowing colors... and beads.  Lots of beads.  And tie-dye.  Maybe a blacklight here or there.  The possibilities are endless.  That's what this theme is all about.  Imagine walking into a room where you get your fortune told, and that's basically what this theme is.  How epic would it be to lounge in a room like that all day?  The gypsy inside of you sees this theme in your near future.  You wouldn't want to mess with fate, right?  We wouldn't take the chance if we were you.</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-classic">&#40;Recommended&#41;</h5>
						
						</div>
					
					
					</div>
					
					
				</section> <!-- end bohemian bungalow -->
				
				
	<!-- WILD WILD WEST -->
	
	
				<section id="west">
	
	
					<div id="www-img" class="parallax-still"></div>
					
					<div id="www-content" class="theme-content parallax-still">
					
					
						<div class="www-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">Wild Wild West</h1>
						
						<h4 class="theme-description">Since you don't own a time machine, you most likely don't live in the days or vicinity of the O.K.Corral, Oregon Trail, Chisholm Trail, or Big Sky and Grand Teton country.  Fortunately for you, this theme will take you to that time and place... theoretically, of course.  Big logs, wagon wheels, stone fireplace, cowhide, gun racks, and deer antlers&#8212;what more motivation do you need?  Now put on your big boy chaps, and buy this "wildly" fun theme...  Pun intended.  Believe all that other stuff is just outside your window.</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-deluxe">&#40;Recommended&#41;</h5>
						
						</div>
				
					
					</div>
					
					
				</section> <!-- end wild wild west -->
				
				
	<!-- ROARING 20S -->
	
	
				<section id="20s">
	
	
					<div id="r20s-img" class="parallax-still"></div>
					
					<div id="r20s-content" class="theme-content parallax-still">
					
					
						<div class="r20s-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">Roaring 20s</h1>
						
						<h4 class="theme-description">Hey, the 90s called and wants it's furniture back.  But you're okay with that, because you imagine yourself living the life of luxury and leisure anyway.  That room that you have now with the obnoxiously large flat-screen and the tacky leather recliner is not in.  You know what is?  The 20s.  The 20s were a "roaring" time for a reason.  If Gatsby could time travel, he would come to 2014 just to buy this theme.  This package is fit for him, so why not you?</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-cardinal">&#40;Recommended&#41;</h5>
						
						</div>
					
					
					</div>
					
					
				</section> <!-- end end roaring 20s -->
				
				
	<!-- GLITZ & GLAMOUR -->
	
	
				<section id="glam">
	
	
					<div id="gg-img" class="parallax-still"></div>
					
					<div id="gg-content" class="theme-content parallax-still">
					
					
						<div class="gg-bg parallax-still">&nbsp;</div>
						
						<h1 class="theme-title">Glitz &amp; Glamour</h1>
						
						<h4 class="theme-description">Remember when you used to dress up like a princess?  The memories of you experimenting with make-up and having tea parties with stuffed animals start to come back.  But that was then, and this is Glitz &amp; Glamour.  Now, you don't have to pretend.  The sparkling allure and opulence found in this theme will make you want to click your heels three times... better yet, just click the "add to cart" button.  Dorthy, Cinderella, or any other princess would be jealous.</h4>
						
						<h4 class="prices"><b>Packages starting at:</b></h3>
						
						<hr class="pricediv">
						
						<div class="packages">
						
							<h4 class="classic"><b>Classic:</b> 4,599 USD</h4>
							
							<h4 class="deluxe"><b>Deluxe:</b> 8,049 USD</h4>
							
							<h4 class="cardinal"><b>Cardinal:</b> 11,499 USD</h4>
							
							<h5 class="recom-cardinal">&#40;Recommended&#41;</h5>
						
						</div>
					
					
					</div>
					
					
				</section> <!-- end glitz & glam -->
			
			
			</div> <!-- end page-content -->
		
		
		
		</div> <!-- end wrapper -->
		
		

		
		
		
<!-- DISCLAIMER -->		


		
		

		<div class="pop-up">
				
			
			<h2 class="disclaimer">Disclaimer:</h2>
					
			<h6 class="disclaimertxt">This is an official <a href="https://veinternational.org/">Virtual Enterprises International</a> firm website and is for educational purposes only.<br>(2014-2015 – Modern Nook Design)</h6>
			
			<div align="center"><img src="css/images/VEILogo.png" class="veilogo"></div>
			
			<p>For more information visit the official Virtual Enterprises International website <a href="https://veinternational.org/">here</a>.</p>
				
				
		</div> <!-- end disclaimer -->
		
		
		
		
		
<!-- INFORMATION -->




		<div class="cataloginfo">
		
		
			<h2 class="info-header">Useful Information Before Making Your Purchase</h2>
			
			<div class="pricing-info">
			
				<h4>The difference between our three packages is the quality and density.  Ergo, fabrics, electronics, and so forth are all variables.  The prices on our themes are the starting prices.  The price only goes up if special requests are made outside of the package budget.  If so, we will email you the new price details.</h4>
			
				<img src="css/images/catalog/pricing2.jpg" height="175" width="300" class="pricing-img">
				
				<div class="package-info">
					
						<h4 class="clas"><b>Classic</b></h4>
						
						<h4 class="del"><b>Deluxe</b></h4>
						
						<h4 class="card"><b>Cardinal</b></h4>
					
				</div>
				
				<div class="des1">
				
					<h5>&#8226;Most affordable package.<br><br>&#8226;Ideal for small bedrooms, dorm rooms, small bathrooms, etc.</h5>
				
				</div>
				
				<div class="des2">
				
					<h5>&#8226;Best value for your money.<br><br>&#8226;Ideal for guest bedrooms, large dorm rooms, normal living rooms, average kitchens, etc. </h5>
				
				</div>
				
				<div class="des3">
				
					<h5>&#8226;The package to go all-out on.<br><br>&#8226;Ideal for master bedrooms, master bathrooms, large living rooms, large kitchens, etc.</h5>
				
				</div>
			
			</div>
			
			<div class="payment-info">
			
				<img src="css/images/catalog/plan.jpg" height="175" width="300" class="plan-img">
				
				<h4 class="">We offer payment plans on our Deluxe and Cardinal packages.  Here's the breakdown:<br><br></h4>
				
				<h4 class="plan-breakdwn">&#8226; First, there's a 40% down payment &#40;$3,219.60 for Deluxe, and $4,599.60 for Cardinal&#41;.<br><br>&#8226; Afterwards, there are five monthly payments of $965.88 for Deluxe, and $1380.08 for Cardinal.<br><br><br><br>If you wish to make a payment plan, please notify us in the order form.</h4>
				
				<h4 class="note"><b>*If you have any additional questions, don't hesitate to <a href="contact.html">Contact Us</a>.</b></h4>
			
			</div>
			
<!--			<h4>Everyone has their own unique style.  Let us help you find yours.</h4>-->
		
		
		</div> <!-- end catalog info -->
		
		
		
		
		
		
<!-- ORDER FORM -->





		<div class="order">
		
		
			<h1 class="o-f">Order Form</h1>
			
			<p><span class="error required-fields">* required fields</span></p>
			
			<form name="orderform" method="POST"> <!-- action="send-form.php" -->
			
				<input type="text" name="name" placeholder="First Name" id="myName"><span class="error name-empty">*</span>
				
				<input type="text" name="company" placeholder="Company Name" id="myCompany"><span class="error company-empty">*</span>
				
				<input type="text" name="email" placeholder="Virtual Enterprise Email" id="myEmail"><span class="error email-empty">*</span>
				
				<input type="text" name="theme" placeholder="Theme" id="myTheme"><span class="error theme-empty">*</span>
				
				<input type="text" name="package" placeholder="Package" id="myPackage"><span class="error package-empty">*</span>
				
				<input type="text" name="payment" placeholder="Payment Plan (Optional)" id="myPayment">
				
				<input type="text" name="accnt" placeholder="Virtual Enterprise Bank Account Number" id="myBank"><span class="error account-empty">*</span>
				
				<textarea rows="3" columns="40" name="comment" placeholder="How can we make this the best room you've ever had? (Specific requests&#8212;price may be affected)." id="myComment"></textarea>
				
				<input type="submit" name="submit" value="Submit" id="submit">
			
			</form>
		
		
		</div><!-- end order form -->
		
	
	
	
	
<!-- POP UP OVERLAY -->

	
	
		
		<div class="overlay">
		
		
			<div class="x-btn glyphicon glyphicon-remove"></div>
		
		
		</div> <!-- end pop up overlay -->
		
		
	
	
		<!--script at end of page for improved loading time-->
		<script src="js/modernizr.js"></script> <!-- MODERNIZR FOR SUPPORT FOR OLDER BROWSERS -->
		<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script> <!-- jQUERY CDN FOR QUICKER LOADING TIME -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> <!-- BOOTSTRAP JS CDN FOR QUICKER LOADING TIME -->
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script> <!-- TWEENMAX PLUGIN CDN -->
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script> <!-- SCROLLTOPLUGIN CDN -->
		<script src="js/main.js"></script>
		
		
	
	</body>
	
</html>	