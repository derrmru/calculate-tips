import React from "react"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            ©{new Date().getFullYear()}, Built by <a href="https://thepetersweeney.com"><strong>thepetersweeney.com</strong></a>
        </div>
    )
}

export default Footer