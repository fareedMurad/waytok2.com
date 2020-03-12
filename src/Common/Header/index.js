import React from 'react';
import Styles from './styles';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Styles>
            <header id="navbar">
                <div className="container-fluid m-0 p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0 ">
                        <a className="navbar-brand pl-5" href="#"><img src={require("../../assets/icons/logo.png")} height="150px"></img></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarText">
                            <ul className="navbar-nav mr-auto mx-auto">
                                <li className="nav-item pr-2 active">
                                    <Link className="nav-link font-weight-bold" to="/" style={{ textDecoration: 'none' }}>HOME <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item pr-2">
                                    <Link className="nav-link font-weight-bold" to="toursAndTravels" style={{ textDecoration: 'none' }}>
                                        Tours & Travels
                                    </Link>
                                </li>
                                <li className="nav-item pr-2">
                                    <div className="dropdown show">
                                        <a className="nav-link font-weight-bold dropdown-toggle" href="#" role="button"
                                            id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Expeditions
                                        </a>

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <Link className="dropdown-item pr-2 pt-2" to='k2' style={{ textDecoration: 'none' }}>
                                                K2 Expediton
                                            </Link>
                                            <Link className="dropdown-item pr-2 pt-2" to='nangaparbat' style={{ textDecoration: 'none' }}>
                                                Nanga Parbat
                                            </Link>
                                            <Link className="dropdown-item pr-2 pt-2" to='gasherbrum_II' style={{ textDecoration: 'none' }}>
                                                Gashaburum II
                                            </Link>
                                            <Link className="dropdown-item pr-2 pt-2" to='boardpeak' style={{ textDecoration: 'none' }}>
                                                Broadpeak
                                            </Link>
                                            <Link className="dropdown-item pr-2 pt-2" to='khunjerabtop' style={{ textDecoration: 'none' }}>
                                                Khunjerab Top
                                            </Link>
                                            <Link className="dropdown-item pr-2 pt-2" to='gasherbrum_I' style={{ textDecoration: 'none' }}>
                                                Gashaburum I
                                            </Link>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item pr-2">
                                    <Link to='tourmagzine' className="nav-link font-weight-bold" style={{ textDecoration: 'none' }}>
                                        TRAVEL MAGZINE
                                    </Link>
                                </li>
                                <li className="nav-item pr-2">
                                    <Link className="nav-link font-weight-bold" to="contactUs" style={{ textDecoration: 'none' }}>
                                        CONTACT US
                                    </Link>
                                </li>
                                <li className="nav-item pr-2">
                                    <Link to='feedback' className="nav-link font-weight-bold" style={{ textDecoration: 'none' }}>
                                        FEEDBACK
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>

            </header>


        </Styles>
    )
}

export default Header;