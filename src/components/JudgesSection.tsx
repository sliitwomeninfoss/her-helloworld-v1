import React from "react";
import Nadun from "../assets/images/speakers/Nadun.jpg";
import Nuwini from "../assets/images/speakers/Nuwini.jpg";
import Nadee from "../assets/images/speakers/Nadee.jpg";
import Nimesh from "../assets/images/speakers/Nimesh.jpg";

function JudgesSection() {
  return (
    <>
      <section id="judges" className="section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Our Judges
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  her&lt;Hello World/&gt; delivers a series of judges designed
                  to inspire and equip.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-bt">
            <div className="revealing-soon-text">
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-img">
                  <img className="img-fluid" src={Nadun} alt="" />
                </div>
                <div className="info-text">
                <h3>
                    <h6>Nandun Thilina Bandara</h6>
                  </h3>
                  <p>Senior Software Engineer at CareHires</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-img">
                  <img className="img-fluid" src={Nuwini} alt="" />
                </div>
                <div className="info-text">
                  <h3>
                    <h6>Nuwini Chamindi</h6>
                  </h3>
                  <p>WTM Sri Lanka Ambassador at Women Techmakers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-img">
                  <img className="img-fluid" src={Nimesh} alt="" />
                </div>
                <div className="info-text">
                  <h3>
                    <h6>Nimesh Indimagedara</h6>
                  </h3>
                  <p>Founder and CEO of Codebrix (Pvt) Ltd</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-img">
                  <img className="img-fluid" src={Nadee} alt="" />
                </div>
                <div className="info-text">
                  <h3>
                    <h6>Nadee Pragnarathne</h6>
                  </h3>
                  <p>Manager, Industry Liaison Center, The Open University of Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JudgesSection;
