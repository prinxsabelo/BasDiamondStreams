import React, { useState, useEffect } from 'react'
import PageLinks from '../constants/PageLinks';
import logo from '../assets/bas.png';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
const Navbar = ({ toggleSidebar, isOpen }) => {
    const url = typeof window !== 'undefined' ? window.location.pathname : '';
    const [transparentNav, setTransparentNav] = useState(true);
    useEffect(() => {
        if (url === "/") {
            setTransparentNav(true);
        } else {
            setTransparentNav(false);
        }
    }, [url])
    const changeNavbarColor = () => {
        if (url === "/") {
            if (window.scrollY >= 80) {
                setTransparentNav(false);
            } else {
                setTransparentNav(true);
            }
        }

    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', changeNavbarColor);
    }

    return (
        <nav className={`${transparentNav ? "navbar  navbar-transparent" : "navbar shadow"}`}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className='nav-logo' />


                    <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                        {isOpen ?
                            <FaTimes></FaTimes> :
                            <FaAlignRight ></FaAlignRight>

                        }

                    </button>
                </div>
                <PageLinks styleClass="nav-links"  ></PageLinks>
            </div>
        </nav>
    )
}

export default Navbar
