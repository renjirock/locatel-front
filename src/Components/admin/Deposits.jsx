import React, { Fragment, Component } from "react";
import Send from "./deposits/Send";

class Deposits extends Component {

    state = {
        deposits: []
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
            
            fetch("http://127.0.0.1:8000/api/v1.0/deposits", requestOptions)
                .then(response => response.text())
                .then(result => {
                    const data = JSON.parse(result)
                    this.setState({
                        deposits: data.deposit
                      });
                  })
                .catch(error => console.log('error', error));
            
        } catch (e) {
          console.log(e);
        }
    }
    render() {
        const { deposits } = this.state;
        return(
            <Fragment>
                <main>
                    <div className="container-fluid px-4 pt-3">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Depositos</h1>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sendModal">Enviar dinero</button>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                Deopitos de dinero
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Banco</th>
                                            <th scope="col">Cuenta bancaria</th>
                                            <th scope="col">valor</th>
                                            <th scope="col">Referencia</th>
                                            <th scope="col">created_at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            deposits.map( deposit => {
                                                return(
                                                    <tr>
                                                        <td>{deposit.bank}</td>
                                                        <td>{deposit.number_account}</td>
                                                        <td>{deposit.value}</td>
                                                        <td>{deposit.reference}</td>
                                                        <td>{deposit.created_at}</td>
                                                    </tr>
                                                    )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Send token={this.props.token}/>
                </main>
            </Fragment>
        )
    }
}
export default Deposits;