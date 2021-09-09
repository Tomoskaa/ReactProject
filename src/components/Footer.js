import React, {useState} from "react";
import "./Footer.css";
import '../App.css';

function Footer() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <footer id={"footer"}>
                <div className={"footer-top"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-lg-4 col-md-6 footer-contact"}>
                                <h3>CafeBar<span>.</span></h3>
                                <p>WELCOME!<br />
                                    Your Day Starts with Our Coffee</p>
                            </div>
                            <div className={"col-lg-4 col-md-6 footer-work"}>
                                <h3>Opening Hours<span>.</span></h3>
                                <ul className={"days"}>
                                    <li>Monday 9:00 AM - 10:00 PM</li>
                                    <li>Tuesday 9:00 AM - 10:00 PM</li>
                                    <li>Wednesday 9:00 AM - 10:00 PM</li>
                                    <li>Thursday 9:00 AM - 10:00 PM</li>
                                    <li>Friday 9:00 AM - 10:00 PM</li>
                                    <li>Saturday  11:00 AM - 5:00 PM</li>
                                    <li>Sunday  11:00 AM - 5:00 PM</li>
                                </ul>
                            </div>

                            <div className={"col-lg-4 col-md-6 footer-info"}>
                                <h3>Contact Info<span>.</span></h3>
                                <p><i className="fas fa-map-marker-alt text-primary"></i> &nbsp;&nbsp;&nbsp; Proleterski Brigadi No.62, Struga North
                                Macedonia </p>
                            <p><i className="fas fa-phone text-primary"></i> &nbsp;&nbsp;&nbsp; +389/ 77-000-123</p>
                            <p><i className="fas fa-envelope text-primary"></i> &nbsp;&nbsp;&nbsp; caffee@gmail.com</p>

                                <div className={"social-links"}>
                                    <a href={""} className={"twitter"}><i className={"fab fa-twitter"}/></a>
                                    <a href="#" className={"facebook"}><i className={"fab fa-facebook-f"}/></a>
                                    <a href="#" className={"instagram"}><i className={"fab fa-instagram"}/></a>
                                    <a href="#" className={"google-plus"}><i className={"fab fa-skype"}/></a>
                                    <a href="#" className={"linkedin"}><i className={"fab fa-linkedin"}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"end text-center"}>
                    <div>
                        <div className={"copyright"}>
                            &copy; Copyright <strong><span>CafeBar.</span></strong> All Rights Reserved
                        </div>
                        <div className={"credits"}>
                            Designed by <span>Ana Tomoska</span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;