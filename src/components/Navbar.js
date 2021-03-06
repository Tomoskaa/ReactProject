import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className={"navbar"}>
                <div className={"navbar-container"}>
                    <Link to={"/"} className={"navbar-logo"} onClick={closeMobileMenu}>
                        CafeBar <i className={"fas fa-coffee"}></i>
                    </Link>
                    <div className={"menu-icon"} onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className={"nav-item"}>
                            <Link to={"/"} className={"nav-links"} onClick={closeMobileMenu}>
                                CafeBar
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/menu"} className={"nav-links"} onClick={closeMobileMenu}>
                                Menu
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/gallery"} className={"nav-links"} onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/contact"} className={"nav-links"} onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar