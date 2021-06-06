import React from "react";

export interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (<>
        <nav className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
            <div className="container">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <a href="/" className="navbar-brand"><img src="assets/img/logo.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="lni-menu"/>
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
                            <a className="nav-link" href="#event-up">
                                Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sponsors">
                                Sponsors
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
    </>);
}

export default Navbar;
