import React, { Fragment, Component } from "react";

class Code extends Component {
    state = {
        token: ""
    };
    handleClick = (e) => {
        e.preventDefault();
        try {
        const value = document.getElementById("inputValue");
        var myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            "Token " + this.props.token
        );

        var formdata = new FormData();
        formdata.append("value", value.value);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        fetch("http://127.0.0.1:8000/api/v1.0/withdraw", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                if (!data.error) {
                    this.setState({
                        token: data.token
                      });
                    let form = document.getElementById("Wm");
                    form.classList.add("d-none");
                    let button = document.getElementById("getMoney");
                    button.classList.add("d-none");
                    let token = document.getElementById("token");
                    token.classList.remove("d-none");
                }
            })
            .catch((error) => console.log("error", error));
        } catch (error) {
        console.log(error);
        }
    };
    render() {
        const { token } = this.state;
        return (
        <Fragment>
            <div
            class="modal fade"
            id="codeModal"
            tabindex="-1"
            aria-labelledby="codeModalLabel"
            aria-hidden="true"
            >
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="codeModalLabel">
                    Retirar Dinero
                    </h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form id="Wm">
                    <div className="form-floating mb-3">
                        <input
                        className="form-control"
                        id="inputValue"
                        type="number"
                        placeholder="999999999"
                        />
                        <label htmlFor="inputValue">Valor a retirar</label>
                    </div>
                    </form>
                    <div id="token" className="text-center d-none">
                        <h1>{token}</h1>
                        <h4>Recuerda que tienes 30 min para retirarlo o se eliminara el token</h4>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    >
                    Cancelar
                    </button>
                    <button
                    type="button"
                    id="getMoney"
                    class="btn btn-primary"
                    onClick={this.handleClick}
                    >
                    Retirar dinero
                    </button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
        );
    }
}
export default Code;
