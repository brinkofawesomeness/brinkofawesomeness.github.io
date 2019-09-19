<!DOCTYPE html>
<html lang="en">
    <head>
        <title>YourCompany Mobile App | Locations currently reached</title>
        <meta charset="utf-8">
        <meta name="description" content="YourCompany keeps businesses in touch with what matters most — the customers. Download on iPhone or Android and stay connected.">
        <meta name="keywords" content="in touch,business,customer,mobile,app,productivity,iphone,android,connect,profit,sales">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Muli:300,400' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/style.css" type="text/css"><!-- MAIN CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> <!-- BOOTSTRAP CSS CDN -->
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" media="all"> <!-- FONT AWESOME -->
	    <link rel="icon" href="css/images/logos/logo.png" type="image/png">
    </head>
    <body>
        <section class="secondaryPageHeader halfWindowHeight">
            <div class="locations-bg parallax">&nbsp;</div>
            <div class="jumbotron">
                <div class="container">
                    <h1 class="hero fade-in-up text-center"><b>Locations</b></h1>
                </div>
            </div>
        </section>
        <section id="map-bg">
            <div class="container">
                <h3 class="text-center">Evolving the digital economy one <strong><i class="fa fa-map-marker" aria-hidden="true"></i></strong> at a time.</h3>
                <div id="map-canvas" class="mapHeight"></div>
            </div>
        </section>
        <section id="bottom-nav">
            <div class="container">
                <div class="col-md-3 col-sm-6 text-center">
                    <h3><b>About</b></h3>
                    <ul class="list-unstyled subtext-color">
                        <li><a href="" title="A little bit about us and who we are">Who we are</a></li>
                        <li><a href="" title="The YourCompany team">The team</a></li>
                        <li><a href="news.php" title="YourCompany news and announcements">In the news</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <h3><b>Contact</b></h3>
                    <ul class="list-unstyled subtext-color">
                        <li><a href="" title="Get in contact with us">Contact us</a></li>
                        <li><a href="" title="For small businesses">Small business accounts</a></li>
                        <li><a href="" title="For conference and other events">Conference &amp; event accounts</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <h3><b>Solutions</b></h3>
                    <ul class="list-unstyled subtext-color">
                        <li><a href="" title="Solutions for the user">User</a></li>
                        <li><a href="" title="Solutions for small businesses">Small businesses</a></li>
                        <li><a href="" title="Solutions for conferences and events">Conferences &amp; events</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <h3><b>In the wild</b></h3>
                    <ul class="list-unstyled subtext-color">
                        <li><a href="locations.php" title="Locations currently reached">Locations</a></li>
                        <li><a href="testimonials.php" title="Customer reveiws and feedback">Testimonials</a></li>
                    </ul>
                </div>
            </div>
            <div class="social-links">
                <div class="container"><hr></div>
                <ul class="list-unstyled text-center">
                    <li>
                        <a href="https://www.facebook.com" title="Follow YourCompany on Facebook"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com" title="Follow YourCompany on Twitter"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" title="Follow YourCompany on LinkedIn"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </section>
        <section id="footer">
            <div class="container">
                <p class="col-xs-7 text-left copyright">&#169; Copyright <?php echo date("Y") ?> YourCompany</p>
                <ul class="list-inline col-xs-5 footer-dwnload">
                    <li class="pull-right footer-dwnld-link">
                        <a href="https://play.google.com" title="YourCompany on Android">
                            <i class="fa fa-android"></i>
                        </a>
                    </li>
                    <li class="pull-right footer-dwnld-link">
                        <a href="https://itunes.apple.com" title="YourCompany on iPhone iOS">
                            <i class="fa fa-apple"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script> <!-- jQUERY CDN -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> <!-- BOOTSTRAP JS CDN -->
        <script src="https://maps.googleapis.com/maps/api/js"></script> <!-- GOOGLE MAPS API -->
        <script type="text/javascript" src="js/main.js"></script> <!-- MAIN JS -->
    </body>
</html>
