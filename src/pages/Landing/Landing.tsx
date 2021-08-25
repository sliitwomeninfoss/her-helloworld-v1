import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import JudgesSection from "../../components/JudgesSection";
import Navbar from "../../components/Navbar";
import Partners from "../../components/Partners";
import SpeakersSection from "../../components/SpeakersSection";
import ScheduleSection from "../../components/ScheduleSection";
import Winners from "../../components/Winners";

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
                    <h2>her&lt;Hello World/&gt; v1.0</h2>
                    <p>
                      Are you a female that’s crushing Frontend technologies, waiting for some action and looking for a great way to test your knowledge? Welcome.
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
                      <i className="lni-check-mark-circle"></i>Teams will have one week to develop a solution to the task
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>Participants will get the task one day before competition. Please, while developing your answer to the task propose a solution to it
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

      <section id="intro">
        <div className="container section-padding">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header">
                <div className="about-text">
                    <h4>What is her&lt;Hello World/&gt; ?</h4>
                    <div className="stylish-list">
                    her&lt;Hello World/&gt; v1.0 hackathon is an exciting event, typically lasting several hours, that brings computer programmers together to participate in a time-sensitive challenge. The her&lt;Hello World/&gt; Hackathon captures this concept, inviting university girls whole over the world to code a visual story or interactive game connected to a social impact theme. By applying their learning and personal interests to the surprise theme, girls support and encourage each other, bringing their ideas and coding skills to the next level!
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row intro-wrapper">
          </div>
        </div>
      </section>

      <section id="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header">
                <div className="about-text">
                    <h4>What resources and activities are available through her&lt;Hello World/&gt; coding program?</h4>
                    <div className="stylish-list">
                    her&lt;Hello World/&gt;, offers a supportive mastering experience for learners and facilitators, supplying the tools they want to discover ways to code and discover career opportunities in technology. her&lt;Hello World/&gt; offers a variety of learning experiences, such as coding curriculum, facilitator courses, interactive webinars, multimedia lessons, and much more, for girls to discover ways to code at their own tempo!
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row intro-wrapper">
          </div>
        </div>
      </section>

      <section id="intro">
        <div className="container section-padding">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header">
                <div className="about-text">
                    <h4>Why girls only?</h4>
                    <div className="stylish-list">
                    Our mission is to change the face of computer science and pave the way for a technology industry that is diverse and inclusive of underrepresented groups across World. Exposing girls to computer science in a supportive learning environment builds their confidence and increases their drive to pursue those academic subjects in their future. her&lt;Hello World/&gt; v1.0 takes a gender-specific approach to our programming. This means that our programs focus on girls and consider the biases and influences that might impact their experience. her&lt;Hello World/&gt; v1.0 uses an inclusive definition of “girls” and “female.”
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row intro-wrapper">
          </div>
        </div>
      </section>

      <section id="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header">
                <div className="about-text">
                    <h4>Beyond coding, what other skills will the girls learn?</h4>
                    <div className="stylish-list">
                    The her&lt;Hello World/&gt; Hackathon Program provides girls with the opportunity to be creative and learn from others to reach their goals. We know that learning to code and making a difference through technology goes beyond programming knowledge and skills. That is why her&lt;Hello World/&gt; v1.0 Future Ready Competencies equip girls with the confidence to persevere. Our program is built on the belief that every learner can thrive when they are given the opportunity to tell their story and share their voice in a safe and supportive all-girls community.
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row intro-wrapper">
          </div>
        </div>
      </section>

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
                  <p>Speakers</p>
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
      <ScheduleSection />
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
      <Winners/>

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
