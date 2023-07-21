import React, { Fragment, Component } from "react";

class Settings extends Component {

    state = {
        username: "",
        email: "",
        first_name: "",
        last_name: ""
    };
    componentDidMount() {
        try {
            let myHeaders = new Headers();
            myHeaders.append("Authorization", "token " + this.props.token);
            
            let requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            fetch("http://127.0.0.1:8000/api/v1.0/account", requestOptions)
              .then(response => response.text())
              .then(result => {
                const data = JSON.parse(result)
                this.setState({
                    username: data.user.username,
                    email: data.user.email,
                    first_name: data.user.first_name,
                    last_name: data.user.last_name
                  });
              })
              .catch(error => console.log('error', error));
        } catch (e) {
          console.log(e);
        }
    }
    handleClick = (e) => { 
        e.preventDefault();
        try {
            const firstName = document.getElementById("inputFirstName");
            const lastName = document.getElementById("inputLastName");
            const email = document.getElementById("inputEmail");
            
            let myHeaders = new Headers();
            myHeaders.append("Authorization", "token " + this.props.token);

            let formdata = new FormData();;
            formdata.append("email", email.value);
            formdata.append("first_name", firstName.value);
            formdata.append("last_name", lastName.value);

            let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
            };

            fetch("http://127.0.0.1:8000/api/v1.0/account", requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                if (data.save) {
                    window.location.reload();
                }
            })
            .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    };
    render() {
        const { username, email, first_name, last_name } = this.state;
        return(
            <Fragment>
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Settings</h1>
                        <div className="col-lg-12 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Informacion</h6>
                                </div>
                                <div className="card-body">
                                <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-0">
                                        <input
                                        className="form-control"
                                        id="inputFirstName"
                                        defaultValue={first_name}
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
                                        defaultValue={last_name}
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
                                    defaultValue={username}
                                    disabled
                                    type="text"
                                    placeholder="user Example"
                                    />
                                    <label htmlFor="inputUsername">User name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                    className="form-control"
                                    id="inputEmail"
                                    defaultValue={email}
                                    type="email"
                                    placeholder="name@example.com"
                                    />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                                <div className="mt-4 mb-0">
                                    <div className="d-grid">
                                    <a
                                        className="btn btn-primary btn-block"
                                        onClick={this.handleClick}
                                    >
                                        Guardar
                                    </a>
                                    </div>
                                </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }
}
export default Settings;