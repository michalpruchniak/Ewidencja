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
                    <Link to="/wszystkie-urzadzenia" className="nav-item nav-link active">Wszystkie urządzenia</Link>
                    <Link to="/wszystkie-protokoly-przekazania" className="nav-item nav-link active">Dokumenty</Link>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Nowy</a>
                        <div className="dropdown-menu">
                            <Link to="/nowe-urzadzenie" className="dropdown-item">Nowe urządzenie</Link>
                            <Link to="/nowy-producent" className="dropdown-item">Nowy producent</Link>
                            <div className="dropdown-divider"></div>
                            <Link to="/nowy-protokol-przekazania" className="dropdown-item">Nowy protokół przekazania</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;