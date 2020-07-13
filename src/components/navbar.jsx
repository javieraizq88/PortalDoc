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
            <ul className="navbar-nav ml-auto border-right">
                <li className="nav-item">
                    <Link className="nav-link " to="/">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/registrar">Registrarme</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Ingresar</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/perfil">Mi Perfíl</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/medicos">Médicos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link border " to="#">Cerrar sesión</Link>
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