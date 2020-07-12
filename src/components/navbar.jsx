import React from "react"
import { Link } from "react-router-dom"


const Navbar = props => {
    return ( 
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark fixed-top">
        <img className="ml-5" src="img/logo.jpg" id="logo" alt="Logo" />

        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
            className="collapse navbar-collapse mr-5"
            id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cv">CV</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/services">Servicios</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projectos</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contacto</Link>
                </li> */}
            </ul>
        </div>
    </nav>
    )
}

export default Navbar