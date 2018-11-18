import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <nav className="col-12 navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <a className="navbar-brand" href="#">ProDeportes</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav row">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Eventos <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
            <span class="navbar-text">
                Usuario
            </span>
        </nav>


    );
  }
}

export default Header;
