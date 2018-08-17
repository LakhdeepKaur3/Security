import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-sm bg-dark" id="navhome">
                <div>
                   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="container" id="nav">
                    <div  className=" collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto  justify-content-center">

                            <li className="nav-item ">
                                <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item scroll">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#gallery">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact-us">Contact Us </a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;