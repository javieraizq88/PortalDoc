import React from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"

const Login = props => {
    const { store, actions } = useContext(Context)
    const handleSubmit = e => {
        actions.login(e, props.history, store.role, store.role == 4 ? "profile" : "profile/medico")
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-10 offset-md-4 my-3 font2">
                        {
                            store.error &&
                            <>
                                <div className="alert alert-danger" role="alert">
                                    Usuario o contraseña incorrectos
                                </div>
                            </>
                        }
                        <h1>Iniciar Sesión</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail">Correo Electrónico</label>
                                <input
                                    autoFocus
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Escriba su email"
                                    name="email"
                                    onChange={actions.handleChange} />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    name='password'
                                    onChange={actions.handleChange} />
                            </div>

                            <div className="form-check" >
                                <input className="form-check-input"
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
                                type="submit"
                                className="btn btn-info btn-block my-3">
                                Ingresar
                            </button>

                        </form>

                        <Link to="/reset_password">
                            <small>Olvidaste tu contraseña?</small>
                        </Link >

                    </div>
                </div>
            </div>

        </>
    )
}

export default Login