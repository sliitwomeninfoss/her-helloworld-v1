import React from "react";
import Sewvandi from "../assets/images/speakers/Sewvandi.jpg";
import Chenuka from "../assets/images/speakers/Chenuka.jpg";
import Chamodi from "../assets/images/speakers/Chamodi.jpg";
import Bagya from "../assets/images/speakers/Bhagya.jpeg";

function SpeakersSection() {
  return (
    <>
      <section id="team" className="section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Our Speakers
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  The her&lt;Hello World/&gt; Groom Up Programs connect young
                  women who want to expand their knowledge and gain footing in
                  the tech world with upper-years <br />
                  who have that experience and knowledge as part of a year-long
                  project development program
                </p>
              </div>
            </div>
          </div>
          //commented
          {/* <div className="row justify-content-bt">
          <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-img">
                  <img className="img-fluid" src={Sewvandi} alt="" />
                </div>
                <div className="info-text">
                <h3>
                    <h6>Sewvandi Wickramasinghe</h6>
                  </h3>
                  <p>Community Lead at SLIIT Women In FOSS Community</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-img">
                  <img className="img-fluid" src={Chenuka} alt="" />
                </div>
                <div className="info-text">
                  <h3>
                    <h6>Chenuka Sumanasekara</h6>
                  </h3>
                  <p>Project Coordinator at SLIIT FOSS Community</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-img">
                  <img className="img-fluid" src={Bagya} alt="" />
                </div>
                <div className="info-text">
                  <h3>
                    <h6>Bhagya Indimagedara</h6>
                  </h3>
                  <p>2nd Year Undergraduate</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-img">
                  <img className="img-fluid" src={Chamodi} alt="" />
                </div>
                <div className="info-text">
                  <h3>
                    <h6>Chamodi Thennakoon</h6>
                  </h3>
                  <p>4th Year Undergraduate</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default SpeakersSection;
