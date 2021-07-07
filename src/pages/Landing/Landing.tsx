import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import JudgesSection from "../../components/JudgesSection";
import Navbar from "../../components/Navbar";
import Partners from "../../components/Partners";
import SpeakersSection from "../../components/SpeakersSection";

function Landing() {
  return (
    <>
      <header id="header-wrap">
        <Navbar />
        <HeroSection />
      </header>

      {/* <!-- Count Bar Start --> */}
      <section id="count">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="count-wrapper text-center">
                <div
                  className="time-countdown wow fadeInUp"
                  data-wow-delay="0.2s"
                >
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
                <img
                  className="img-fluid"
                  src="assets/img/about/Her.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="about-content">
                <div>
                  <div className="about-text">
                    <h2>About her&lt;Hello World/&gt;</h2>
                    <p>
                    You are a female that’s crushing Frontend technologies, waiting for some action and looking for a great way to test your knowledge? Welcome. 
                    Apply for this year’s online her&lt;Hello World/&gt; v1.0 competition and let the world see your true potential.
                    </p>
                  </div>
                  <ul className="stylish-list mb-5 mt-3">
                    <li>
                      <i className="lni-check-mark-circle"></i>You can apply as a team of two or three (max) or as an individual
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>Chosen individuals will be divided into teams of three members
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>Teams will have 10 days to develop a solution to the task
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>Participants will get the task one day before competition. Please, while developing your answer to the task, define one problem and propose a solution to it
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>Teams can use any programming language they want
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>No previous experience is required. You should only possess a laptop
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>We provide groom up sessions
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>The event is free, but registration is required
                    </li>
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
                <li>
                  <span>
                    <b>Where</b>Through an online platform
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni-calendar"></i>
                </li>
                <li>
                  <span>
                    <b>Date & Time</b> Aug 15 - Aug 25
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni-mic"></i>
                </li>
                <li>
                  <span>
                    <b>Speakers</b> 4 Speakers
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni-user"></i>
                </li>
                <li>
                  <span>
                    <b>Participants</b> Open to everyone
                  </span>
                </li>
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
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Why You Should Join?
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                At SLIIT Women In FOSS Community, we’re here to support you in your journey through the tech world!
                </p>
              </div>
            </div>
          </div>
          <div className="row intro-wrapper">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-50">
                <i className="lni-microphone"></i>
                <h3>Great Speakers</h3>
                <span className="count-number">01</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text">
                <i className="lni-cup"></i>
                <h3 className="ts-title">Win Swags</h3>
                <span className="count-number">02</span>
              </div>
              <div className="border-shap left"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-50">
                <i className="lni-bullhorn"></i>
                <h3>Global Event</h3>
                <span className="count-number">03</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-50">
                <i className="lni-heart"></i>
                <h3>Get Inspired With Tech</h3>
                <span className="count-number">04</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-50">
                <i className="lni-book"></i>
                <h3>Groom up Sessions</h3>
                <span className="count-number">05</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-50">
                <i className="lni-users"></i>
                <h3>Meet New Faces</h3>
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
                  <i className="lni-microphone"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">4</div>
                  <p>Spekers</p>
                </div>
              </div>
            </div>
            {/* <!-- Counter Item --> */}
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni-users"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">100</div>
                  <p>Participants</p>
                </div>
              </div>
            </div>
            {/* <!-- Counter Item --> */}
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">3</div>
                  <p>Partners</p>
                </div>
              </div>
            </div>
            {/* <!-- Counter Item --> */}
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni-book"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">4</div>
                  <p>Groom Up Sessions</p>
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
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Groom Up Sessions
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                her&lt;Hello World/&gt; is designed to be an inclusive space to support female-identifying individuals who are interested in technology!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="monday-tab"
                    data-toggle="tab"
                    href="#monday"
                    role="tab"
                    aria-controls="monday"
                    aria-expanded="true"
                  >
                    <div className="item-text">
                      <h4>Day 01</h4>
                      <h5>14 February 2020</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="tuesday-tab"
                    data-toggle="tab"
                    href="#tuesday"
                    role="tab"
                    aria-controls="tuesday"
                  >
                    <div className="item-text">
                      <h4>Day 02</h4>
                      <h5>15 February 2020</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="wednesday-tab"
                    data-toggle="tab"
                    href="#wednesday"
                    role="tab"
                    aria-controls="wednesday"
                  >
                    <div className="item-text">
                      <h4>Day 03</h4>
                      <h5>16 February 2020</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="thursday-tab"
                    data-toggle="tab"
                    href="#thursday"
                    role="tab"
                    aria-controls="thursday"
                  >
                    <div className="item-text">
                      <h4>Day 04</h4>
                      <h5>17 February 2020</h5>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <div
                className="schedule-area row wow fadeInDown"
                data-wow-delay="0.3s"
              >
                <div className="schedule-tab-content col-12 clearfix">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="monday"
                      role="tabpanel"
                      aria-labelledby="monday-tab"
                    >
                      <div id="accordion">
                        <div className="card">
                          <div id="headingOne">
                            <div className="schedule-slot-time">
                              <span> 9.30 - 10.30 AM</span>
                              Workshop
                            </div>
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-1.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-2.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>15 Free Productive Design Tools</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-3.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Getting Started With SketchApp</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tuesday"
                      role="tabpanel"
                      aria-labelledby="tuesday-tab"
                    >
                      <div id="accordion2">
                        <div className="card">
                          <div id="headingOne1">
                            <div className="schedule-slot-time">
                              <span> 1.30 - 2.30 AM</span>
                              Workshop
                            </div>
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseTwo2"
                              aria-expanded="false"
                              aria-controls="collapseTwo2"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-2.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseOne1"
                            className="collapse show"
                            aria-labelledby="headingOne1"
                            data-parent="#accordion2"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseOne1"
                              aria-expanded="false"
                              aria-controls="collapseOne1"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-1.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseTwo2"
                            className="collapse"
                            aria-labelledby="headingTwo2"
                            data-parent="#accordion2"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="wednesday"
                      role="tabpanel"
                      aria-labelledby="wednesday-tab"
                    >
                      <div id="accordion3">
                        <div className="card">
                          <div id="headingOne3">
                            <div className="schedule-slot-time">
                              <span> 10.30 - 11.30 AM</span>
                              Workshop
                            </div>
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseOne3"
                              aria-expanded="false"
                              aria-controls="collapseOne3"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-1.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseOne3"
                            className="collapse show"
                            aria-labelledby="headingOne3"
                            data-parent="#accordion3"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseTwo3"
                              aria-expanded="false"
                              aria-controls="collapseTwo3"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-2.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseTwo3"
                            className="collapse"
                            aria-labelledby="headingTwo3"
                            data-parent="#accordion3"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseThree3"
                              aria-expanded="false"
                              aria-controls="collapseThree3"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-3.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseThree3"
                            className="collapse"
                            aria-labelledby="headingThree3"
                            data-parent="#accordion3"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="thursday"
                      role="tabpanel"
                      aria-labelledby="thursday-tab"
                    >
                      <div id="accordion4">
                        <div className="card">
                          <div id="headingOne">
                            <div className="schedule-slot-time">
                              <span> 9.30 - 10.30 AM</span>
                              Workshop
                            </div>
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseOne4"
                              aria-expanded="false"
                              aria-controls="collapseOne4"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-2.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseOne4"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion4"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseTwo4"
                              aria-expanded="false"
                              aria-controls="collapseTwo4"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-1.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseTwo4"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion4"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseThree4"
                              aria-expanded="false"
                              aria-controls="collapseThree4"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-3.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseThree4"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion4"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="friday"
                      role="tabpanel"
                      aria-labelledby="friday-tab"
                    >
                      <div id="accordion">
                        <div className="card">
                          <div id="headingOne">
                            <div className="schedule-slot-time">
                              <span> 9.30 - 10.30 AM</span>
                              Workshop
                            </div>
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-2.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-1.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <div className="images-box">
                                <img
                                  className="img-fluid"
                                  src="assets/img/speaker/speakers-3.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Web Design Principles and Best Practices</h4>
                              <h5 className="name">David Warner</h5>
                            </div>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet minima dolores rerum
                                maiores qui at commodi quas, reprehenderit eius
                                consectetur quae magni molestias veniam,
                                provident illum facere iure libero asperiores!
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veniam earum nihil ex ipsa
                                magni eligendi fugiat assumenda suscipit,
                                accusantium, necessitatibus reiciendis odit sed,
                                vero amet blanditiis?
                              </p>
                              <div className="location">
                                <span>Location:</span> Hall 1 , Building A,
                                Golden Street, Southafrica
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
      <SpeakersSection />
      {/* <!-- Team Section End --> */}

      {/* <!-- Team Section Start --> */}
       <JudgesSection />
      {/* <!-- Team Section End --> */}

      {/* <!-- Sponsors Section Start --> */}
      <Partners />
      {/* <!-- Sponsors Section End --> */}

      {/* <!-- Contact Us Section --> */}
      <section id="contact-map" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Contact Us
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Still have questions?
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div
                className="container-form wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="form-wrapper">
                  <form
                    role="form"
                    method="post"
                    id="contactForm"
                    name="contact-form"
                    data-toggle="validator"
                  >
                    <div className="row">
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="email"
                            placeholder="First Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            data-error="Please enter your Email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 form-line">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control"
                            id="msg_subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            data-error="Please enter your message subject"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows={4}
                            id="message"
                            name="message"
                            required
                            data-error="Write your message"
                          ></textarea>
                        </div>
                        <div className="form-submit">
                          <button
                            type="submit"
                            className="btn btn-common"
                            id="form-submit"
                          >
                            <i
                              className="fa fa-paper-plane"
                              aria-hidden="true"
                            ></i>{" "}
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
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
            <div className="col-lg-12">
              <ul>
                <li>
                  <i className="lni-envelope"></i>
                </li>
                <li>
                  <span>infowifsliit@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact text End --> */}

      <Footer />
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
  );
}

export default Landing;
