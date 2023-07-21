import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return(
            <Fragment>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Locatel 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}
export default Footer;