import React from "react";
import WIFLogo from "../assets/images/logos/Her.png";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="/" className="">
            <img src={WIFLogo} alt="" width={"70px"} height={"50px"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="lni-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="#header-wrap">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedules">
                  schedules
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Speakers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#judges">
                  Judges
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sponsors">
                  Partners
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-map">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
