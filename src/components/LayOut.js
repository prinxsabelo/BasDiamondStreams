import React, { useState } from 'react'
import Navbar from './Navbar'

import '../assets/css/main.scss';
import '../assets/css/raw.css';
import '../assets/css/utility.css';
import "normalize.css";
import Sidebar from './Sidebar';
import { Helmet } from "react-helmet"

const LayOut = ({ children, }) => {
    const url = typeof window !== 'undefined' ? window.location.pathname : '';
    const confirmIndex = url === "/" ? true : false;

    const [isOPen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOPen);
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>BAS Diamond Streams</title>
                <link rel="canonical" href="http://basdiamondstreams.com" />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            </Helmet>
            <Navbar toggleSidebar={toggleSidebar} isOpen={isOPen} />
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isOPen} />
            <div className={`${confirmIndex ? '' : 'main'}`}>
                {children}
            </div>


        </>
    )
}

export default LayOut
