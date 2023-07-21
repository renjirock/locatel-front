import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

class Register extends Component {
    handleClick = (e) => { 
        e.preventDefault();
        try {
            const username = document.getElementById("inputUsername");
            const firstName = document.getElementById("inputFirstName");
            const lastName = document.getElementById("inputLastName");
            const email = document.getElementById("inputEmail");
            const password = document.getElementById("inputPassword");
            const passwordSecond = document.getElementById("inputPasswordConfirm");

            let formdata = new FormData();
            formdata.append("username", username.value);
            formdata.append("password", password.value);
            formdata.append("password2", passwordSecond.value);
            formdata.append("email", email.value);
            formdata.append("first_name", firstName.value);
            formdata.append("last_name", lastName.value);

            let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };

            fetch("http://127.0.0.1:8000/api/v1.0/register/", requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                if(!data.error) window.location.replace(window.location.origin + '/login')
            })
            .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    };
    render() {
        return (
            <Fragment>
                <div id="layoutAuthentication" className="bg-primary">
                <div id="layoutAuthentication_content">
                    <main>
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header">
                                <h3 className="text-center font-weight-light my-4">
                                Create Account
                                </h3>
                            </div>
                            <div className="card-body">
                                <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-0">
                                        <input
                                        className="form-control"
                                        id="inputFirstName"
                                        type="text"
                                        placeholder="Enter your first name"
                                        />
                                        <label htmlFor="inputFirstName">First name</label>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                        className="form-control"
                                        id="inputLastName"
                                        type="text"
                                        placeholder="Enter your last name"
                                        />
                                        <label htmlFor="inputLastName">Last name</label>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                    className="form-control"
                                    id="inputUsername"
                                    type="text"
                                    placeholder="user Example"
                                    />
                                    <label htmlFor="inputUsername">User name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                    className="form-control"
                                    id="inputEmail"
                                    type="email"
                                    placeholder="name@example.com"
                                    />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-0">
                                        <input
                                        className="form-control"
                                        id="inputPassword"
                                        type="password"
                                        placeholder="Create a password"
                                        />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-0">
                                        <input
                                        className="form-control"
                                        id="inputPasswordConfirm"
                                        type="password"
                                        placeholder="Confirm password"
                                        />
                                        <label htmlFor="inputPasswordConfirm">
                                        Confirm Password
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <div className="mt-4 mb-0">
                                    <div className="d-grid">
                                    <a
                                        className="btn btn-primary btn-block"
                                        onClick={this.handleClick}
                                    >
                                        Create Account
                                    </a>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small">
                                <Link to={'/login'}>Have an account? Go to login</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">
                            Copyright &copy; Your Website 2023
                        </div>
                        <div>
                            <Link href="#">Privacy Policy</Link>
                            &middot;
                            <Link href="#">Terms &amp; Conditions</Link>
                        </div>
                        </div>
                    </div>
                    </footer>
                </div>
                </div>
            </Fragment>
        );
    }
}
export default Register;
