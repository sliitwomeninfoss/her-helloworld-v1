import React from "react";

function ScheduleSection() {
  return (
    <>
      {/* remove the text-center below when uncommenting schedule */}
      <section id="schedules" className="schedule section-padding text-center">
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
                  her&lt;Hello World/&gt; is designed to be an inclusive space
                  to support female-identifying individuals who are interested
                  in technology!
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
                      <h5>8 August 2021</h5>
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
                      <h5>10 August 2021</h5>
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
                      <h5>12 August 2021</h5>
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
                      <h5>14 August 2021</h5>
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
                              <span> 7.00 - 8.00 PM</span>
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
                                  src="/assets/img/speaker/Chenuka.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Getting Started With Create React App</h4>
                              <h5 className="name">CHENUKA SUMANASEKARA</h5>
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
                              <span>7.00 - 8.00 PM</span>
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
                                  src="assets/img/speaker/Chamodi.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>The State Of Women In Tech</h4>
                              <h5 className="name">CHAMODI THENNAKOON</h5>
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
                              <span>6.00 - 7.00 PM</span>
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
                                  src="assets/img/speaker/Sewvandi.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>Introduction to Git and GitHub</h4>
                              <h5 className="name">SEWVANDI WICKRAMASINGHE</h5>
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
                              <span>6.00 - 7.00 PM</span>
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
                                  src="assets/img/speaker/Bhagya.jpg"
                                  alt=""
                                />
                              </div>
                              <h4>UX Matters</h4>
                              <h5 className="name">BHAGYA INDIMAGEDARA</h5>
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
    </>
  );
}

export default ScheduleSection;
