import React from 'react'
import { Link } from 'react-router-dom'

const Cover = () => {
  return (
    <div>
        {/* Topbar starts */}
        <div class="container-fluid bg-light pt-3 d-none d-lg-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center">
                        <p><i class="fa fa-envelope mr-2"></i>naturenest@gmail.com</p>
                        <p class="text-body px-3">|</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>9746172313</p>
                    </div>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-primary px-3" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-primary px-3" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-primary px-3" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="text-primary px-3" href="https://www.instagram.com/alanvarghese__?igsh=MW56MXFsMnUwd2l6cw==">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="text-primary pl-3" href="https://www.instagram.com/alanvarghese__?igsh=MW56MXFsMnUwd2l6cw==">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Topbar End */}


    {/* Navbar Start */}
    <div class="container-fluid position-relative nav-bar p-0">
    <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
    <nav class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
    <a href="" class="navbar-brand">
        <h1 class="m-0 text-primary"><span class="text-dark">NATURE</span>NEST</h1>
    </a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
        <div class="navbar-nav ml-auto py-0">
            <Link class="nav-item nav-link" to={'/'}>
                Home
            </Link>
            <Link class="nav-item nav-link" to={'/about'}>
                About
            </Link>
            <Link class="nav-item nav-link" to={'/service'}>
                Services
            </Link>
            
            
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Major Attractions</a>
                <div class="dropdown-menu border-0 rounded-0 m-0">
                <Link  class="dropdown-item" to={'/houseboat'}>
                        House Boat
                    </Link>
                <Link  class="dropdown-item" to={'/PeriyarPark'}>
                        Periyar National Park
                    </Link>
                    <Link  class="dropdown-item" to={'/kottavanchi'}>
                        Kottavanchi Safari
                    </Link>
                    <Link  class="dropdown-item" to={'/igloo'}>
                       Igloo Camping 
                    </Link>
                    <Link  class="dropdown-item" to={'/elephant'}>
                         Elephant Safari
                    </Link>
                    <Link  class="dropdown-item" to={'/kalaripayattu'}>
                        Kalaripayattu
                    </Link>
                    <Link  class="dropdown-item" to={'/kathakali'}>
                         Kathakali
                    </Link>
                    <Link  class="dropdown-item" to={'/ayurveda'}>
                        Ayurveda
                    </Link>
                    <Link  class="dropdown-item" to={'/offroad'}>
                        Off-Road Adventures
                    </Link>
                </div>
            </div>
            <Link class="nav-item nav-link" to={'/attractions'}>
                Destination
            </Link>
            <Link class="nav-item nav-link" to={'/contact'}>
                Contact
            </Link>
        </div>
    </div>
</nav>

        </div>
    </div>
    {/* Navbar End */}


    {/* Carousel Start */}
    <div class="container-fluid p-0">
        <div id="header-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="assets/img/carousel-1.jpg" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{maxWidth: '900px'}}>
                            <h4 class="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                            <h1 class="display-3 text-white mb-md-4">Unveil the Unseen Beauty of Kerala's Gem</h1>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/carousel-2.jpg" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{maxwidth: '900px'}}>
                            <h4 class="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                            <h1 class="display-3 text-white mb-md-4">Unveil the Unseen Beauty of Kerala's Gem</h1>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div class="btn btn-dark" style={{width: '45px',height: '45px'}}>
                    <span class="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                <div class="btn btn-dark" style={{width: '45px', height: '45px'}}>
                    <span class="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    {/* Carousel End */}


    {/* Booking Start */}
    {/* <div class="container-fluid booking mt-5 pb-5">
        <div class="container pb-5">
            <div class="bg-light shadow" style={{padding: '30px'}}>
                <div class="row align-items-center" style={{minHeight: '60px'}}>
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <select class="custom-select px-4" style={{height: '47px'}}>
                                        <option selected>Destination</option>
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 1</option>
                                        <option value="3">Destination 1</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <div class="date" id="date1" data-target-input="nearest">
                                        <input type="text" class="form-control p-4 datetimepicker-input" placeholder="Depart Date" data-target="#date1" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <div class="date" id="date2" data-target-input="nearest">
                                        <input type="text" class="form-control p-4 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <select class="custom-select px-4" style={{height: '47px'}}>
                                        <option selected>Duration</option>
                                        <option value="1">Duration 1</option>
                                        <option value="2">Duration 1</option>
                                        <option value="3">Duration 1</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-primary btn-block" type="submit" style={{height: '47px', marginTop: '-2px'}}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* Booking End */}


    {/* About Start */}
    <div class="container-fluid py-5">
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-6" style={{minHeight: '500px'}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100" src="assets/img/about.jpg" style={{objectFit:Cover}}/>
                    </div>
                </div>
                <div class="col-lg-6 pt-5 pb-lg-5">
                    <div class="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>About Us</h6>
                        <h1 class="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                        <p>
                        Discover Kerala's Unseen Wonders At EnchantedKerala Explorations, we're your companions in revealing the heart of Kerala. Our team of passionate local experts is dedicated to curating authentic experiences that encompass Ayurveda, cultural delights like Kathakali and Kalaripayattu, magical performances, elephant rides, 12D attractions, and the unspoiled beauty of Thekkady. Immerse yourself in Kerala's rich
                        </p>
                        <div class="row mb-4">
                            <div class="col-6">
                                <img class="img-fluid" src="assets/img/cover1.jpg" alt=""/>
                            </div>
                            <div class="col-6">
                                <img class="img-fluid" src="assets/img/cover2.jpg" alt="" style={{height:'150px',width:'250px'}}/>
                            </div>
                        </div>
                        <a href="" class="btn btn-primary mt-1">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Feature Start --> */}
    <div class="container-fluid pb-5">
        <div class="container pb-5">
            <div class="row">
                <div class="col-md-4">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: '100px', width: '100px'}}>
                            <i class="fa fa-2x fa-money-check-alt text-white"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="">Our Vision</h5>
                            <p class="m-0">To Ignite Unforgettable Journeys: At EnchantedKerala Explorations, our aim is to ignite journeys that transcend the ordinary, revealing Kerala's hidden treasures while fostering deep appreciation for its culture, nature, and authenticity.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: '100px', width: '100px'}}>
                            <i class="fa fa-2x fa-award text-white"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="">Our Mission</h5>
                            <p class="m-0">Crafting Unique Adventures: Our goal is to craft adventures that resonate with each traveler's desires, curating immersive experiences encompassing Ayurveda's healing touch, cultural riches like Kathakali and Kalaripayattu, magical performances, elephant encounters, 12D attractions, and exploration of Thekkady's wild enigma.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: '100px', width: '100px'}}>
                            <i class="fa fa-2x fa-globe text-white"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="">Our Services</h5>
                            <p class="m-0">Explore Bespoke Packages: Choose from meticulously designed packages highlighting Ernakulam, Idukki, Varkala, Munnar, Alapuzha, Kumarakom, and Thekkady. Personalize your adventure based on preferences, and let us guide you through a journey like no other.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Feature End --> */}


    {/* <!-- Destination Start --> */}
    <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Destination</h6>
                <h1>Explore Top Destination</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/Kochi.jpg" alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" >
                            <h5 class="text-white">Kochi</h5>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/Idukki Dam.jpg" alt=""/>
                        <a class="destination-overlay text-white text-decoration-none">
                            <h5 class="text-white">Idukki</h5>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/destination-3.jpg" alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" >
                            <h5 class="text-white">Varkkala</h5>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/Munnar.jpg" alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" >
                            <h5 class="text-white">Munnar</h5>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/Alappuzha.jpg" alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" >
                            <h5 class="text-white">Alappuzha</h5>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/Neelakurinji.jpg" alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" >
                            <h5 class="text-white">Thekkady</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Destination Start --> */}


    {/* <!-- Service Start --> */}
    <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Services</h6>
                <h1>Tours & Travel Services</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="service-item bg-white text-center mb-2 py-5 px-4">
                        <i class="fa fa-2x fa-route mx-auto mb-4"></i>
                        <h5 class="mb-2">Travel Guide</h5>
                        <p class="m-0">we offer more than just trips; we create unforgettable experiences. Our team specializes in crafting custom itineraries that cater to every traveler’s desires, whether it’s an adrenaline-fueled adventure, a serene getaway, or an immersive cultural journey. </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="service-item bg-white text-center mb-2 py-5 px-4">
                        <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
                        <h5 class="mb-2">Activities and Experiences</h5>
                        <p class="m-0">In Ernakulam, immerse in Ayurveda. Trek Idukki's lush terrains, witness Kathakali and Kalaripayattu, enjoy elephant rides, and explore Munnar's tea gardens. Cruise Alapuzha's backwaters, unwind in Kumarakom, and venture into Thekkady's wilderness. Adventure awaits in Kerala.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="service-item bg-white text-center mb-2 py-5 px-4">
                        <i class="fa fa-2x fa-hotel mx-auto mb-4"></i>
                        <h5 class="mb-2">Accomodations</h5>
                        <p class="m-0">Indulge in comfort and authenticity with our carefully selected accommodations. From cozy homestays to luxurious resorts, we offer havens perfectly tailored to enhance your journey at each destination, ensuring a memorable and enriching travel experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}


    {/* <!-- Attractions Start --> */}
    <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Attractions</h6>
                <h1>Our Major Attractions</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/Houseboat.jpg" alt=""/>
                        <div class="p-4">
                            {/* <div class="d-flex justify-content-between mb-3">
                                <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div> */}
                            <Link  class="h5 text-decoration-none" to={'/houseboat'}>
                            Backwater Bliss: Houseboat Exploration
                    </Link>
                            
                            {/* <div class="border-top mt-4 pt-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 class="m-0">$350</h5>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/periyar wildlife santuary.jpg" alt=""/>
                        <div class="p-4">
                        <Link  class="h5 text-decoration-none" to={'/periyarpark'}>
                        Wilderness Wonderland: Discovering Periyar National Park
                    </Link>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/kottavanchi.jpg" alt=""/>
                        <div class="p-4">
                        <Link  class="h5 text-decoration-none" to={'/kottavanchi'}>
                        Into the Wild: Amazing Kottavanchi Safari
                    </Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/igloo camping.jpg" alt=""/>
                        <div class="p-4">
                        <Link  class="h5 text-decoration-none" to={'/igloo'}>
                        Stargaze from Bed: Igloo Dome Camping Adventure
                    </Link>
                        
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/elephant ride.jpg" alt=""/>
                        <div class="p-4">
                            <Link  class="h5 text-decoration-none" to={'/elephant'}>
                        Jungle Majesty: Unforgettable Elephant Safari
                    </Link>
                           
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/kalaripayattu.jpg" alt=""/>
                        <div class="p-4">
                        <Link  class="h5 text-decoration-none" to={'/kalaripayattu'}>
                        Legends Unleashed: The Ancient Art of Kalaripayattu
                    </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Packages End --> */}


    {/* <!-- Registration Start --> */}
    {/* <div class="container-fluid bg-registration py-5" style={{margin: '90px 0'}}>
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-7 mb-5 mb-lg-0">
                    <div class="mb-4">
                        <h6 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Mega Offer</h6>
                        <h1 class="text-white"><span class="text-primary">30% OFF</span> For Honeymoon</h1>
                    </div>
                    <p class="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul class="list-inline text-white m-0">
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <div class="card border-0">
                        <div class="card-header bg-primary text-center p-4">
                            <h1 class="text-white m-0">Sign Up Now</h1>
                        </div>
                        <div class="card-body rounded-bottom bg-white p-5">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control p-4" placeholder="Your name" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control p-4" placeholder="Your email" required="required" />
                                </div>
                                <div class="form-group">
                                    <select class="custom-select px-4" style={{height: '47px'}}>
                                        <option selected>Select a destination</option>
                                        <option value="1">destination 1</option>
                                        <option value="2">destination 1</option>
                                        <option value="3">destination 1</option>
                                    </select>
                                </div>
                                <div>
                                    <button class="btn btn-primary btn-block py-3" type="submit">Sign Up Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Registration End --> */}



    {/* <!-- Testimonial Start --> */}
    {/* <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Testimonial</h6>
                <h1>What Say Our Clients</h1>
            </div>
            <div class="owl-carousel testimonial-carousel">
                <div class="text-center pb-4">
                    <img class="img-fluid mx-auto" src="assets/img/testimonial-1.jpg" style={{width: '100px', height: '100px' }}/>
                    <div class="testimonial-text bg-white p-4 mt-n5">
                        <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <h5 class="text-truncate">Client Name</h5>
                        <span>Profession</span>
                    </div>
                </div>
                <div class="text-center">
                    <img class="img-fluid mx-auto" src="assets/img/testimonial-2.jpg" style={{width: '100px', height: '100px'}} />
                    <div class="testimonial-text bg-white p-4 mt-n5">
                        <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <h5 class="text-truncate">Client Name</h5>
                        <span>Profession</span>
                    </div>
                </div>
                <div class="text-center">
                    <img class="img-fluid mx-auto" src="assets/img/testimonial-3.jpg" style={{width: '100px', height: '100px'}} />
                    <div class="testimonial-text bg-white p-4 mt-n5">
                        <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <h5 class="text-truncate">Client Name</h5>
                        <span>Profession</span>
                    </div>
                </div>
                <div class="text-center">
                    <img class="img-fluid mx-auto" src="assets/img/testimonial-4.jpg" style={{width: '100px', height: '100px'}} />
                    <div class="testimonial-text bg-white p-4 mt-n5">
                        <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <h5 class="text-truncate">Client Name</h5>
                        <span>Profession</span>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Testimonial End --> */}




    {/* <!-- Footer Start --> */}
    <div class="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{margintop: '90px'}}>
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="" class="navbar-brand">
                    <h1 class="text-primary"><span class="text-white">NATURE</span>NEST</h1>
                </a>
                <p>Your passport to uncovering the hidden treasures of Kerala's most captivating destinations. Our customizable tour packages are thoughtfully curated to match your interests, ensuring an extraordinary journey tailored just</p>
                <h6 class="text-white text-uppercase mt-4 mb-3" style={{letterspacing: '5px'}}>Follow Us</h6>
                <div class="d-flex justify-content-start">
                    <a class="btn btn-outline-primary btn-square mr-2" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-primary btn-square mr-2" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-primary btn-square mr-2" href="https://www.instagram.com/alanvarghese__?igsh=MW56MXFsMnUwd2l6cw=="><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-primary btn-square" href="https://www.instagram.com/alanvarghese__?igsh=MW56MXFsMnUwd2l6cw=="><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            {/* <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style={{letterspacing: '5px'}}>Our Services</h5>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Destination</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Services</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Attractions</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Testimonial</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style={{letterspacing: '5px'}}>Usefull Links</h5>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Destination</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Services</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Attractions</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Testimonial</a>
                </div>
            </div> */}
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style={{letterspacing: '5px'}}>Contact Us</h5>
                <p><i class="fa fa-map-marker-alt mr-2"></i>Kerala</p>
                <p><i class="fa fa-phone-alt mr-2"></i>9746172313</p>
                <p><i class="fa fa-envelope mr-2"></i>naturenest@gmail.com</p>
                <h6 class="text-white text-uppercase mt-4 mb-3" style={{letterspacing: '5px'}}>Newsletter</h6>
                <div class="w-100">
                    <div class="input-group">
                        <input type="text" class="form-control border-light" style={{padding: '25px'}} placeholder="Your Email"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: 'rgba(255, 255, 255, 0.1)'}} >
        <div class="row">
            <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white-50">Copyright &copy; <a href="#">Domain</a>. All Rights Reserved.
                </p>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fa fa-angle-double-up"></i></a>


    
    </div>
  )
}

export default Cover