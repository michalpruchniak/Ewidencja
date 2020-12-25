import React from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link active">Home</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Nowy</a>
                        <div className="dropdown-menu">
                            <Link to="/nowe-urzadzenie" className="dropdown-item">Nowe urządzenie</Link>
                            <Link to="/nowy-producent" className="dropdown-item">Nowy producent</Link>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">Protokół przekazania</a>
                            <a href="#" className="dropdown-item">Sent</a>
                            <a href="#" className="dropdown-item">Drafts</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;