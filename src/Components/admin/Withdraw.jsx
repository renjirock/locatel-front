import React, { Fragment, Component } from "react";
import Code from "./withdraws/Code";

class Withdraw extends Component {

    state = {
        withdraws: []
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
            
            fetch("http://127.0.0.1:8000/api/v1.0/withdraw", requestOptions)
                .then(response => response.text())
                .then(result => {
                    const data = JSON.parse(result)
                    this.setState({
                        withdraws: data.withdraws
                      });
                  })
                .catch(error => console.log('error', error));
            
        } catch (e) {
          console.log(e);
        }
    }
    render() {
        const { withdraws } = this.state;
        return(
            <Fragment>
                <main>
                    <div className="container-fluid px-4 pt-3">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Retira Dinero</h1>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#codeModal">Codigo de Retiro</button>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                Retiros
                            </div>
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Value</th>
                                            <th scope="col">created_at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            withdraws.map( withdraw => {
                                                return(
                                                    <tr>
                                                        <td>{withdraw.value}</td>
                                                        <td>{withdraw.created_at}</td>
                                                    </tr>
                                                    )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Code token={this.props.token}/>
                </main>
            </Fragment>
        )
    }
}
export default Withdraw;