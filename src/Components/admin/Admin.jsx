import React, { Fragment, Component } from "react";
import { Link, redirect } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Sidenav from "./layouts/Sidenav";
import Footer from "./layouts/Footer";
import Dashboard from "./Dashboard";
import Deposits from "./Deposits";
import Withdraw from "./Withdraw";
import Settings from "./Settings";
import "../../styles.css";

class Admin extends Component {
    
    render() {
        const LoggedIn = localStorage.getItem('token') ? localStorage.getItem('token') : false
        if (!LoggedIn) {
            window.location.replace(window.location.origin)
        }
        return(
            <Fragment>
                <Navbar/>
                <div id="layoutSidenav">
                    <Sidenav/>
                    <div id="layoutSidenav_content">
                        {this.props.path === 1 ? <Dashboard token={LoggedIn}/> : ''}
                        {this.props.path === 2 ? <Deposits token={LoggedIn}/> : ''}
                        {this.props.path === 3 ? <Withdraw token={LoggedIn}/> : ''}
                        {this.props.path === 4 ? <Settings token={LoggedIn}/> : ''}
                        <Footer/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Admin;