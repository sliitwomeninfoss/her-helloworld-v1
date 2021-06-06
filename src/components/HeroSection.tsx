import React from "react";

function HeroSection() {
  return (
    <>
      <div id="hero-area" className="hero-area-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-sm-12">
              <div className="contents text-center">
                <div className="icon">
                  <i className="lni-mic" />
                </div>
                <p className="banner-info">
                  15, Oct 2020 - Maria Hall, NY, United states
                </p>
                <h2 className="head-title">her &lt;Hello World&gt; v1.0</h2>
                <p className="banner-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente, nobis nesciunt atque perferendis, ipsa doloremque
                  deserunt cum qui.
                </p>
                <div className="banner-btn">
                  <a
                    href="!#"
                    className="btn btn-common"
                    style={{ color: "white" }}
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
