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
                  <i className="lni-code" />
                </div>
                <p className="banner-info">
                  15, Aug 2021 - SLIIT Women In FOSS Community - Sri Lanka
                </p>
                <h2>her&lt;Hello World/&gt; v1.0</h2>
                <p className="banner-desc">
                A diversity of thought, perspective and culture is important in any field, not just engineering. Surround yourself with people who support you and get involved in [coding] programs.
                </p>
                <div className="banner-btn">
                  <a
                    href="!#"
                    className="btn btn-common"
                    style={{ color: "white" }}
                  >
                    REGISTERATION WILL BE OPEN
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
