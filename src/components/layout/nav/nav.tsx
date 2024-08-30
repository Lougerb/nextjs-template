'use client'

import React, {useState, useRef} from "react";
function Nav() {
    const [nav, setNav] = useState(false);
    const navEl = useRef();

    const trigger = () => {
        nav?setNav(false):setNav(true);
    }

    return ( 
        <nav ref={navEl} className={`nav ${!nav?'':'show-nav'}`}>
            <div className="nav-wrapper">
                <div className="nav-trigger sp-only" onClick={trigger}>
                    <div className="wrapper">
                        <div className="nav-trigger__line"></div>
                        <div className="nav-trigger__line"></div>
                        <div className="nav-trigger__line"></div>
                    </div>
                </div>
                <ul className="nav-menu d-md-flex align-items-md-center justify-content-md-center">
                    <li className="nav-menu__item">
                        <a href="/about/" className="nav-menu__item__anchor">ABOUT</a>
                    </li>
                    <li className="nav-menu__item">
                        <a href="/product/" className="nav-menu__item__anchor">PRODUCT</a>
                    </li>
                    <li className="nav-menu__item">
                        <a href="/services/" className="nav-menu__item__anchor">SERVICES</a>
                    </li>
                    <li className="nav-menu__item">
                        <a href="/contact/" className="nav-menu__item__anchor">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
     );
}

export default Nav;