import React from 'react'
import HeroSection from "../../components/HeroSection";
import Navbar from '../../components/Navbar'
import SpeakersSection from "../../components/SpeakersSection";

function Landing() {
    return (
        <>
            <header id="header-wrap">
                <Navbar />
                <HeroSection/>
            </header>

            {/* <!-- Count Bar Start --> */}
            <section id="count">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="count-wrapper text-center">
                                <div className="time-countdown wow fadeInUp" data-wow-delay="0.2s">
                                    <div id="clock" className="time-count"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Count Bar End --> */}

            {/* <!-- About Section Start --> */}
            <section id="about" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <div className="img-thumb">
                                <img className="img-fluid" src="assets/img/about/img1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <div className="about-content">
                                <div>
                                    <div className="about-text">
                                        <h2>About The Conference</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ncididunt ametfh consectetur dolore magna aliqua. Ut enim ad minim veniam dolor sitame magnaelit ate consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod.</p>
                                    </div>
                                    <ul className="stylish-list mb-3">
                                        <li><i className="lni-check-mark-circle"></i>Networking Sessions</li>
                                        <li><i className="lni-check-mark-circle"></i>Meet New Professional Faces</li>
                                        <li><i className="lni-check-mark-circle"></i>Get Inspired by Amazing Speakers</li>
                                        <li><i className="lni-check-mark-circle"></i>Lorem ipsum dolor sit ameterib</li>
                                        <li><i className="lni-check-mark-circle"></i>Lorem ipsum dolor sit ameterib quodsi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About Section End --> */}

            {/* <!-- Information Bar Start --> */}
            <section id="information-bar">
                <div className="container">
                    <div className="row inforation-wrapper">
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul>
                                <li>
                                    <i className="lni-map-marker"></i>
                                </li>
                                <li><span><b>Location</b> Maria Hall, NY, USA</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul>
                                <li>
                                    <i className="lni-calendar"></i>
                                </li>
                                <li><span><b>Date & Time</b> 10am - 7pm, 15th Oct</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul>
                                <li>
                                    <i className="lni-mic"></i>
                                </li>
                                <li><span><b>Speakers</b> 25 Professionals</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul>
                                <li>
                                    <i className="lni-user"></i>
                                </li>
                                <li><span><b>Seats</b> 100 People</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Information Bar End --> */}

            {/* <!-- intro Section Start --> */}
            <section id="intro" className="intro section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Why You Should Join?</h2>
                                <p className="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an <br /> cule dicta iriure at phaedrum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row intro-wrapper">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="single-intro-text mb-70">
                                <i className="lni-microphone"></i>
                                <h3>Great Speakers</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia, excepturi.
               </p>
                                <span className="count-number">01</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="single-intro-text">
                                <i className="lni-users"></i>
                                <h3 className="ts-title">New People</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia, excepturi.
               </p>
                                <span className="count-number">02</span>
                            </div>
                            <div className="border-shap left"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="single-intro-text mb-70">
                                <i className="lni-bullhorn"></i>
                                <h3>Global Event</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia, excepturi.
               </p>
                                <span className="count-number">03</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="single-intro-text mb-70">
                                <i className="lni-heart"></i>
                                <h3>Get Inspired</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia, excepturi.
               </p>
                                <span className="count-number">04</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="single-intro-text mb-70">
                                <i className="lni-cup"></i>
                                <h3>Networking Session</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia, excepturi.
               </p>
                                <span className="count-number">05</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="single-intro-text mb-70">
                                <i className="lni-gallery"></i>
                                <h3>Meet New Faces</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia, excepturi.
               </p>
                                <span className="count-number">06</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- intro Section End --> */}

            {/* <!-- Counter Area Start--> */}
            <section className="counter-section section-padding">
                <div className="container">
                    <div className="row">
                        {/* <!-- Counter Item --> */}
                        <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
                            <div className="counter">
                                <div className="icon">
                                    <i className="lni-mic"></i>
                                </div>
                                <div className="counter-content">
                                    <div className="counterUp">42</div>
                                    <p>Spekers</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Counter Item --> */}
                        <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
                            <div className="counter">
                                <div className="icon">
                                    <i className="lni-bulb"></i>
                                </div>
                                <div className="counter-content">
                                    <div className="counterUp">800</div>
                                    <p>Seats</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Counter Item --> */}
                        <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
                            <div className="counter">
                                <div className="icon">
                                    <i className="lni-briefcase"></i>
                                </div>
                                <div className="counter-content">
                                    <div className="counterUp">24</div>
                                    <p>Sponsors</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Counter Item --> */}
                        <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
                            <div className="counter">
                                <div className="icon">
                                    <i className="lni-coffee-cup"></i>
                                </div>
                                <div className="counter-content">
                                    <div className="counterUp">56</div>
                                    <p>Sessions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Counter Area End--> */}

            {/* <!-- Schedule Section Start --> */}
            <section id="schedules" className="schedule section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Event Schedules</h2>
                                <p className="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an <br /> cule dicta iriure at phaedrum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="monday-tab" data-toggle="tab" href="#monday" role="tab" aria-controls="monday" aria-expanded="true">
                                        <div className="item-text">
                                            <h4>Day 01</h4>
                                            <h5>14 February 2020</h5>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="tuesday-tab" data-toggle="tab" href="#tuesday" role="tab" aria-controls="tuesday">
                                        <div className="item-text">
                                            <h4>Day 02</h4>
                                            <h5>15 February 2020</h5>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="wednesday-tab" data-toggle="tab" href="#wednesday" role="tab" aria-controls="wednesday">
                                        <div className="item-text">
                                            <h4>Day 03</h4>
                                            <h5>16 February 2020</h5>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="thursday-tab" data-toggle="tab" href="#thursday" role="tab" aria-controls="thursday">
                                        <div className="item-text">
                                            <h4>Day 04</h4>
                                            <h5>17 February 2020</h5>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
                                <div className="schedule-tab-content col-12 clearfix">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                                            <div id="accordion">
                                                <div className="card">
                                                    <div id="headingOne">
                                                        <div className="schedule-slot-time">
                                                            <span> 9.30 - 10.30 AM</span>
                                                                 Workshop
                                                            </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div id="headingTwo">
                                                        <div className="schedule-slot-time">
                                                            <span> 10.30 - 11.30 AM</span>
                                                            Workshop
                                                         </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                                                            </div>
                                                            <h4>15 Free Productive Design Tools</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div id="headingThree">
                                                        <div className="schedule-slot-time">
                                                            <span> 11.30 - 12.30 AM</span>
                                                             Workshop
                                                            </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                                                            </div>
                                                            <h4>Getting Started With SketchApp</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                                            <div id="accordion2">
                                                <div className="card">
                                                    <div id="headingOne1">
                                                        <div className="schedule-slot-time">
                                                            <span> 1.30 - 2.30 AM</span>
                                                            Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne1" className="collapse show" aria-labelledby="headingOne1" data-parent="#accordion2">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div id="headingTwo2">
                                                        <div className="schedule-slot-time">
                                                            <span> 9.30 - 10.30 AM</span>
                                                            Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2" data-parent="#accordion2">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                                            <div id="accordion3">
                                                <div className="card">
                                                    <div id="headingOne3">
                                                        <div className="schedule-slot-time">
                                                            <span> 10.30 - 11.30 AM</span>
                                                             Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne3" aria-expanded="false" aria-controls="collapseOne3">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne3" className="collapse show" aria-labelledby="headingOne3" data-parent="#accordion3">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div id="headingTwo3">
                                                        <div className="schedule-slot-time">
                                                            <span> 11.30 - 12.30 AM</span>
                                                            Workshop
                                                            </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseTwo3" className="collapse" aria-labelledby="headingTwo3" data-parent="#accordion3">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div id="headingThree3">
                                                        <div className="schedule-slot-time">
                                                            <span> 1.30 - 2.30 AM</span>
                                                            Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseThree3" className="collapse" aria-labelledby="headingThree3" data-parent="#accordion3">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                                            <div id="accordion4">
                                                <div className="card">
                                                    <div id="headingOne">
                                                        <div className="schedule-slot-time">
                                                            <span> 9.30 - 10.30 AM</span>
                                                            Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne4" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion4">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div id="headingTwo">
                                                        <div className="schedule-slot-time">
                                                            <span> 10.30 - 11.30 AM</span>
                                                            Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo4" aria-expanded="false" aria-controls="collapseTwo4">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseTwo4" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion4">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div id="headingThree4">
                                                        <div className="schedule-slot-time">
                                                            <span> 11.30 - 12.30 AM</span>
                                                            Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree4" aria-expanded="false" aria-controls="collapseThree4">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseThree4" className="collapse" aria-labelledby="headingThree" data-parent="#accordion4">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="friday" role="tabpanel" aria-labelledby="friday-tab">
                                            <div id="accordion">
                                                <div className="card">
                                                    <div id="headingOne">
                                                        <div className="schedule-slot-time">
                                                            <span> 9.30 - 10.30 AM</span>
                                                            Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div id="headingTwo">
                                                        <div className="schedule-slot-time">
                                                            <span> 10.30 - 11.30 AM</span>
                                                            Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div id="headingThree">
                                                        <div className="schedule-slot-time">
                                                            <span> 11.30 - 12.30 AM</span>
                                                            Workshop
                                                        </div>
                                                        <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <div className="images-box">
                                                                <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                                                            </div>
                                                            <h4>Web Design Principles and Best Practices</h4>
                                                            <h5 className="name">David Warner</h5>
                                                        </div>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                                                            <div className="location">
                                                                <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Schedule Section End --> */}

            {/* <!-- Team Section Start --> */}
            <SpeakersSection/>
            {/* <!-- Team Section End --> */}

            {/* <!-- Event Slides Section Start --> */}
            <section id="event-up" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Gallery</h2>
                                <p className="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an <br /> cule dicta iriure at phaedrum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="event-item">
                                <img className="img-fluid" src="assets/img/event/img1.jpg" alt="" />
                                <div className="overlay-text">
                                    <div className="content">
                                        <h3>Business Confrence</h3>
                                        <a href="#">View details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="event-item">
                                <img className="img-fluid" src="assets/img/event/img2.jpg" alt="" />
                                <div className="overlay-text">
                                    <div className="content">
                                        <h3>Designer Confrence</h3>
                                        <a href="#">View details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="event-item">
                                <img className="img-fluid" src="assets/img/event/img3.jpg" alt="" />
                                <div className="overlay-text">
                                    <div className="content">
                                        <h3>Marketer Confrence</h3>
                                        <a href="#">View details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="event-item">
                                <img className="img-fluid" src="assets/img/event/img4.jpg" alt="" />
                                <div className="overlay-text">
                                    <div className="content">
                                        <h3>JS Confrence</h3>
                                        <a href="#">View details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <a href="#" className="btn btn-common">More Event</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Event Slides Section End --> */}

            {/* <!-- Blog Section Start --> */}
            <section id="blog" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Latest News</h2>
                                <p className="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an <br /> cule dicta iriure at phaedrum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <a href="#">
                                        <img className="img-fluid" src="assets/img/blog/img-1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="descr">
                                    <div className="icon">
                                        <i className="lni-image"></i>
                                    </div>
                                    <h3 className="title">
                                        <a href="#">
                                            Learn Something New
                  </a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipsing elit, sed do eiusmodincididunt ut labore et dolore</p>
                                </div>
                                <div className="meta-tags">
                                    <span className="date"><i className="lni-calendar"></i> Jan 20, 2020</span>
                                    <span className="comments"><i className="lni-comment-alt"></i> <a href="#"> 0 Comment</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <a href="#">
                                        <img className="img-fluid" src="assets/img/blog/img-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="descr">
                                    <div className="icon">
                                        <i className="lni-arrow-right"></i>
                                    </div>
                                    <h3 className="title">
                                        <a href="#">
                                            Call for sponsors
                  </a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipsing elit, sed do eiusmodincididunt ut labore et dolore</p>
                                </div>
                                <div className="meta-tags">
                                    <span className="date"><i className="lni-calendar"></i> Jan 20, 2020</span>
                                    <span className="comments"><i className="lni-comment-alt"></i> <a href="#"> 0 Comment</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <a href="#">
                                        <img className="img-fluid" src="assets/img/blog/img-3.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="descr">
                                    <div className="icon">
                                        <i className="lni-camera"></i>
                                    </div>
                                    <h3 className="title">
                                        <a href="#">
                                            Elon Musk joining the event
                  </a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipsing elit, sed do eiusmodincididunt ut labore et dolore</p>
                                </div>
                                <div className="meta-tags">
                                    <span className="date"><i className="lni-calendar"></i> Jan 20, 2020</span>
                                    <span className="comments"><i className="lni-comment-alt"></i> <a href="#"> 0 Comment</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <a href="#" className="btn btn-common">View all Blog</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Blog Section End --> */}

            {/* <!-- Sponsors Section Start --> */}
            <section id="sponsors" className="section-padding">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Sponsors</h2>
                                <p className="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an <br /> cule dicta iriure at phaedrum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
                        <div className="col-lg-12">
                            <div className="sponsors-logo text-center">
                                <a href=""><img src="assets/img/sponsors/logo-1.png" alt="" /></a>
                                <a href=""><img src="assets/img/sponsors/logo-2.png" alt="" /></a>
                                <a href=""><img src="assets/img/sponsors/logo-3.png" alt="" /></a>
                                <a href=""><img src="assets/img/sponsors/logo-4.png" alt="" /></a>
                                <a href=""><img src="assets/img/sponsors/logo-5.png" alt="" /></a>
                                <a href=""><img src="assets/img/sponsors/logo-6.png" alt="" /></a>
                                <a href=""><img src="assets/img/sponsors/logo-7.png" alt="" /></a>
                                <a href=""><img src="assets/img/sponsors/logo-8.png" alt="" /></a>
                                <a href=""><img src="assets/img/sponsors/logo-9.png" alt="" /></a>
                            </div>{/* <!-- sponsors logo end--> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Sponsors Section End --> */}

            {/* <!-- Contact Us Section --> */}
            <section id="contact-map" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Contact Us</h2>
                                <p className="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an <br /> cule dicta iriure at phaedrum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 col-xs-12">
                            <div className="container-form wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="form-wrapper">
                                    <form role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                                        <div className="row">
                                            <div className="col-md-6 form-line">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name" name="email" placeholder="First Name" required data-error="Please enter your name" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-line">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" required data-error="Please enter your Email" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-line">
                                                <div className="form-group">
                                                    <input type="tel" className="form-control" id="msg_subject" name="subject" placeholder="Subject" required data-error="Please enter your message subject" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" rows={4} id="message" name="message" required data-error="Write your message"></textarea>
                                                </div>
                                                <div className="form-submit">
                                                    <button type="submit" className="btn btn-common" id="form-submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
                                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Us Section End --> */}

            {/* <!-- Contact text Start --> */}
            <section id="contact-text">
                <div className="container">
                    <div className="row contact-wrapper">
                        <div className="col-lg-4 col-md-5 col-xs-12">
                            <ul>
                                <li>
                                    <i className="lni-home"></i>
                                </li>
                                <li><span />Cesare Rosaroll, 118 80139 Eventine</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-3 col-xs-12">
                            <ul>
                                <li>
                                    <i className="lni-phone"></i>
                                </li>
                                <li><span>+789 123 456 79</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-3 col-xs-12">
                            <ul>
                                <li>
                                    <i className="lni-envelope"></i>
                                </li>
                                <li><span>Support@example.com</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact text End --> */}

            <footer>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 col-xs-12">
                            <div className="subscribe-inner wow fadeInDown" data-wow-delay="0.3s">
                                <h2 className="subscribe-title">To Get Nearly Updates</h2>
                                <form className="text-center form-inline">
                                    <input className="mb-20 form-control" name="email" placeholder="Enter Your Email Here" />
                                    <button type="submit" className="btn btn-common sub-btn" data-style="zoom-in" data-spinner-size="30" name="submit" id="submit">
                                        <span className="ladda-label"><i className="lni-check-box"></i> Subscribe</span>
                                    </button>
                                </form>
                            </div>
                            <div className="footer-logo">
                                <img src="assets/img/logo.png" alt="" />
                            </div>
                            <div className="social-icons-footer">
                                <ul>
                                    <li className="facebook"><a target="_blank" href="3"><i className="lni-facebook-filled"></i></a></li>
                                    <li className="twitter"><a target="_blank" href="3"><i className="lni-twitter-filled"></i></a></li>
                                    <li className="pinterest"><a target="_blank" href="3"><i className="lni-pinterest"></i></a></li>
                                </ul>
                            </div>
                            <div className="site-info">
                                <p>Powered by <a href="#" rel="nofollow">SLIIT FOSS Community</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!-- Go to Top Link --> */}
            <a href="#" className="back-to-top">
                <i className="lni-chevron-up"></i>
            </a>

            <div id="preloader">
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
            </div>

        </>
    )
}

export default Landing
