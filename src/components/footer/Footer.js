import React from 'react'

import Logo from "../logo/Logo"

import "./Footer.css";
export default function Footer() {
    return (
        <div className = "footer">
            <p>&copy; 2020</p>

            <Logo fill = {`var(--darkest)`}/>

            <p>You can check out the code for this page <a href="">here</a></p>
        </div>
    )
}
