import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-left d-flex align-items-center"
             style={{width: '10%', height: '20vh', top: '35%', left: 0, borderRadius: 10,}}>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/users'} className="nav-link" style={{color: 'white'}}>
                                Usuario
                            </Link>
                            <Link to={'/expenses'} className="nav-link" style={{color: 'white'}}>
                                Gastos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
