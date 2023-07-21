import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    handleClick = (e) => {
        e.preventDefault();
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Token a4f4cc2f7587ae39e6924b71c2ff66a0cbd54405");

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch("http://127.0.0.1:8000/api/v1.0/logout/", requestOptions)
                .then(response => response.text())
                .then(result => {
                    localStorage.removeItem('token')
                    window.location.replace(window.location.origin)
                })
                .catch(error => console.log('error', error));
        } catch (error) {
        console.log(error);
        }
    };
    render() {      
        return(
            <Fragment>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <Link className="navbar-brand ps-3" to={'/'}>Locatel</Link>
                    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="input-group d-none">
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                        </div>
                    </form>
                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to={'/admin/settings'}>Settings</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" onClick={this.handleClick}>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}
export default Navbar;