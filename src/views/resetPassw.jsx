import React from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"
import { useHistory } from "react-router-dom"

const ResetPassw = props => {
    const { store, actions } = useContext(Context)
    const history = useHistory()

    return (
        <>
            <div className="container">
                <h1 className="my-2 text-center">Cambia tu contraseña</h1>
                <div className="form-group modal-body offset-md-4">
                    <div className="row">
                        <div className="col-md-6 col-xs-6">
                            <label
                                htmlFor="LoginConsuEmail"
                                className="form-label text-muted ml-1">
                                Ingresa tu correo
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={e => actions.handleChange(e)}
                                className="form-control">
                            </input>
                        </div>
                        <div className="col-md-6 col-xs-6"></div>
                    </div>
                    <br />
                    <div className="form-check" >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="exampleRadios1"
                            value={3}
                            onChange={actions.handleChange} />
                        <label
                            className="form-check-label"
                            for="exampleRadios1">
                            Cliente
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="exampleRadios2"
                            value={2}
                            onChange={actions.handleChange} />
                        <label
                            className="form-check-label"
                            for="exampleRadios2">
                            Médico
                        </label>
                    </div>

                    <button className="btn btn-outline-info my-3" onClick={() => actions.getConfirmation()} >Confirmar</button>
                </div>
            </div>

        </>
    )
}

export default ResetPassw