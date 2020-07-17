import React from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"

const ResetPassw = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div id="resetPassw" className="container">
                <div className="row">
                    <div className="col-md-5 col-xs-10 offset-md-4 my-3 font2">
                      
                        <h1>Cambia tu contraseña</h1>

                        <div className="form-group ">
                            <label
                                htmlFor="LoginConsuEmail"
                                className="form-label text-muted ml-1">
                                Ingresa tu correo
                            </label>
                            <input
                                autoFocus
                                type="email"
                                name="email"
                                onChange={e => actions.handleChange(e)}
                                className="form-control">
                            </input>
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

                    <button
                        className="btn btn-danger btn-block my-3"
                        onClick={() => actions.getConfirmation()}>
                        Confirmar
                     </button>
                </div>
            </div>
            </div>

        </>
    )
}

export default ResetPassw