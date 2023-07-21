import React, { Fragment, Component } from "react";

class Dashboard extends Component {

    state = {
        balance: 0,
        number_account: ""
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
            
            fetch("http://127.0.0.1:8000/api/v1.0/account/balance", requestOptions)
              .then(response => response.text())
              .then(result => {
                const data = JSON.parse(result)
                this.setState({
                    balance: data.balance,
                    number_account: data.number_account
                  });
              })
              .catch(error => console.log('error', error));
        } catch (e) {
          console.log(e);
        }
    }
    render() {
        const { balance, number_account } = this.state;
        return(
            <Fragment>
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Dashboard</h1>
                        <div className="col-xl-4 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Balance ({number_account})</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">${balance}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Informacion</h6>
                                </div>
                                <div className="card-body text-center">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}}
                                            src="img/undraw_Online_test_re_kyfx.png" alt="..."/>
                                    </div>
                                    <p>Recuerda darnos un feedback sobre nuestro proyecto cuando quieras</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }
}
export default Dashboard;