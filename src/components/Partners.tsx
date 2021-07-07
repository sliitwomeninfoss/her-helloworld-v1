import React from "react";
import SLIITFOSSLogo from "../assets/images/logos/foss-logo.png";
import CEFlag from "../assets/images/logos/ce-flag.png";
import GitHub from "../assets/images/logos/github.png";

function Partners() {
  return (
    <>
      <section id="sponsors" className="section-padding">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Partners
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  her&lt;Hello World/&gt; has partnered with an incredible network of industry professionals and is always <br />looking for more passionate tech advocates to connect with.
                </p>
              </div>
            </div>
          </div>
          <div
            className="row mb-30 text-center wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-12">
              <div className="sponsors-logo text-center">

                <a href="">
                  <img src={CEFlag} alt="" width={100} />
                </a>
                <a href="https://sliitfoss.org/">
                  <img src={SLIITFOSSLogo} alt="" width={100} />
                </a>
                <a href="">
                  <img src={GitHub} alt="" width={100} />
                </a>
                {/*<a href="">*/}
                {/*  <img src="assets/img/sponsors/logo-4.png" alt="" />*/}
                {/*</a>*/}
                {/*<a href="">*/}
                {/*  <img src="assets/img/sponsors/logo-5.png" alt="" />*/}
                {/*</a>*/}
                {/*<a href="">*/}
                {/*  <img src="assets/img/sponsors/logo-6.png" alt="" />*/}
                {/*</a>*/}
                {/*<a href="">*/}
                {/*  <img src="assets/img/sponsors/logo-7.png" alt="" />*/}
                {/*</a>*/}
                {/*<a href="">*/}
                {/*  <img src="assets/img/sponsors/logo-8.png" alt="" />*/}
                {/*</a>*/}
                {/*<a href="">*/}
                {/*  <img src="assets/img/sponsors/logo-9.png" alt="" />*/}
                {/*</a>*/}
              </div>
              {/* <!-- sponsors logo end--> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
