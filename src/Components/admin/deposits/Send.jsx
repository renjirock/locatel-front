import React, { Fragment, Component } from "react";

class Send extends Component {
    handleClick = (e) => {
        e.preventDefault();
        try {
        const account = document.getElementById("inputAccount");
        const value = document.getElementById("inputValue");
        const bank = document.getElementById("inputBank");
        var myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            "Token " + this.props.token
        );

        var formdata = new FormData();
        formdata.append("number_account", account.value);
        formdata.append("value", value.value);
        formdata.append("bank", bank.options[bank.selectedIndex].value);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        fetch("http://127.0.0.1:8000/api/v1.0/deposits", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                if (data.save) {
                    window.location.reload();
                }
            })
            .catch((error) => console.log("error", error));
        } catch (error) {
        console.log(error);
        }
    };
    render() {
        return (
        <Fragment>
            <div
            className="modal fade"
            id="sendModal"
            tabindex="-1"
            aria-labelledby="sendModalLabel"
            aria-hidden="true"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="sendModalLabel">
                    Envia Dinero
                    </h5>
                    <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="form-floating mb-3">
                        <input
                        className="form-control"
                        id="inputAccount"
                        type="number"
                        placeholder="999999999"
                        />
                        <label htmlFor="inputAccount">Cuenta Bancaria</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                        className="form-control"
                        id="inputValue"
                        type="number"
                        placeholder="999999999"
                        />
                        <label htmlFor="inputValue">Valor a enviar</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select
                        className="form-control"
                        id="inputBank"
                        >
                        <option selected>Selecciona Uno</option>
                        <option value="Bancolombia">Bancolombia</option>
                        <option value="Nequi">Nequi</option>
                        <option value="Banco de bogota">Banco de bogota</option>
                        </select>
                        <label htmlFor="inputBank">User name</label>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    >
                    Cancelar
                    </button>
                    <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleClick}
                    >
                    Enviar dinero
                    </button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
        );
    }
}
export default Send;
