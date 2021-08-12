import React from "react";
import WIFLogo from "../assets/images/logos/womeninfoss.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div
                className="subscribe-inner wow fadeInDown"
                data-wow-delay="0.3s"
              >
                <h2 className="subscribe-title">To Get Nearly Updates from SLIIT Women In FOSS Community</h2>
                <form className="text-center form-inline">
                  <input
                    className="mb-20 form-control"
                    name="email"
                    placeholder="Enter Your Email Here"
                  />
                  <button
                    type="submit"
                    className="btn btn-common sub-btn"
                    data-style="zoom-in"
                    data-spinner-size="30"
                    name="submit"
                    id="submit"
                  >
                    <span className="ladda-label" style={{ color: "white" }}>
                      <i className="lni-check-box"></i> Subscribe
                    </span>
                  </button>
                </form>
              </div>
              <div className="footer-logo">
                <img src={WIFLogo} alt="" height={100} width={100} />
              </div>
              <div className="social-icons-footer">
                <ul>
                  <li className="facebook">
                    <a target="_blank" href="https://www.facebook.com/sliitwif/">
                      <i className="lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a target="_blank" href="https://twitter.com/sliitwif">
                      <i className="lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li className="instagram">
                    <a target="_blank" href="https://www.instagram.com/sliitwif/">
                      <i className="lni-instagram"></i>
                    </a>
                  </li>
                  <li className="linkedin">
                    <a target="_blank" href="https://www.linkedin.com/company/sliit-women-in-foss-community/">
                      <i className="lni-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="site-info">
                <p>
                  Powered by{" "}
                  <a href="https://sliitfoss.org/" rel="nofollow">
                    SLIIT FOSS Community
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
