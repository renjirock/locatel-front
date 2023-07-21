import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

class Login extends Component {
    handleClick = (e) => { 
        e.preventDefault();
        try {
            const username = document.getElementById("inputUsername");
            const password = document.getElementById("inputPassword");
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
            "username": username.value,
            "password": password.value
            });

            let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://127.0.0.1:8000/api/v1.0/generate_token/", requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result)
                if(data.token){
                    localStorage.setItem('token', data.token)
                    window.location.replace(window.location.origin + '/admin')
                }
                else{
                    console.log('error', 'tenemos problemas para encontrar tu informacion')
                }
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
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header">
                                <h3 className="text-center font-weight-light my-4">
                                Login
                                </h3>
                            </div>
                            <div className="card-body">
                                <form>
                                <div className="form-floating mb-3">
                                    <input
                                    className="form-control"
                                    id="inputUsername"
                                    type="text"
                                    placeholder="userExample"
                                    />
                                    <label htmlFor="inputUsername">User name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                    className="form-control"
                                    id="inputPassword"
                                    type="password"
                                    placeholder="Password"
                                    />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                                    <button className="btn btn-primary" onClick={this.handleClick}>
                                    Login
                                    </button>
                                </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small">
                                <Link to={'/register'}>Need an account? Sign up!</Link>
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
                            Copyright &copy; Locatel 2023
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
export default Login;
