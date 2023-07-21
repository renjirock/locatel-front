import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

class Sidenav extends Component {
    render() {
        return(
            <Fragment>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to={'/admin'}>
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <div className="sb-sidenav-menu-heading">Opciones</div>
                            <Link className="nav-link" to={'/admin/deposits'}>
                                <div className="sb-nav-link-icon"><i className="fa-solid fa-paper-plane"></i></div>
                                Envia dinero
                            </Link>
                            <Link className="nav-link" to={'/admin/withdraw'}>
                                <div className="sb-nav-link-icon"><i class="fa-solid fa-circle-arrow-down"></i></div>
                                Retira Dinero
                            </Link>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        User
                    </div>
                </nav>
            </div>
            </Fragment>
        )
    }
}
export default Sidenav;