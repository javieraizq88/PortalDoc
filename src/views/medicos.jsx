import React from "react"

const Medicos = props => {
    return (
        <div>
            <h1>Médicos opcion 1</h1>

            <div className="card-group">
                <div class="dropdown"
                    id="dropdown-prevision">
                    <button class="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Elija Previsión
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">FONASA</a>
                        <a class="dropdown-item" href="#">ISAPRE</a>
                    </div>
                </div>

                <div class="dropdown"
                    id="dropdown-especialidad">
                    <button class="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Elija Especialidad
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Cardiología</a>
                        <a class="dropdown-item" href="#">Gastroenterología</a>
                        <a class="dropdown-item" href="#">Medicina General</a>
                        <a class="dropdown-item" href="#">Pediatría</a>
                    </div>
                </div>
            </div>


            <div className="container">
                {/* <div className="card-group"> */}

                <div className="col-md-1"></div>
                <div className=" col-md-10 card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2-d9Vk6MgGHCgVJSUpqfUujoo3URE1y-xQ&usqp=CAU"
                                className="card-img"
                                alt="..."
                                height="150px" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title"><strong>Nombre:</strong>  Dr. Juan Perez</h4>
                                <h5 className="card-text"><strong>Especialidades:</strong> Medicina General, Gastroenterología  </h5>
                                <p className="card-text"><strong>Valoración:</strong></p>
                                <a href="/login" class="btn btn-primary">Agendar hora</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-1"></div>
                <div className=" col-md-10 card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2-d9Vk6MgGHCgVJSUpqfUujoo3URE1y-xQ&usqp=CAU"
                                className="card-img"
                                alt="..."
                                height="150px" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title"><strong>Nombre:</strong>  Dr. Juan Perez</h4>
                                <h5 className="card-text"><strong>Especialidades:</strong> Medicina General, Gastroenterología  </h5>
                                <p className="card-text"><strong>Valoración:</strong></p>
                                <a href="/login" class="btn btn-primary">Agendar hora</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-1"></div>
                <div className=" col-md-10 card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2-d9Vk6MgGHCgVJSUpqfUujoo3URE1y-xQ&usqp=CAU"
                                className="card-img"
                                alt="..."
                                height="150px" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title"><strong>Nombre:</strong>  Dr. Juan Perez</h4>
                                <h5 className="card-text"><strong>Especialidades:</strong> Medicina General, Gastroenterología  </h5>
                                <p className="card-text"><strong>Valoración:</strong></p>
                                <a href="/login" class="btn btn-primary">Agendar hora</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* </div> */}
            </div>


            <h1>Médicos opcion 2</h1>
            <div id="lista-docs">
                <div class="row row-cols-1 row-cols-md-4">

                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2-d9Vk6MgGHCgVJSUpqfUujoo3URE1y-xQ&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="card-title"><strong>Nombre:</strong>  Dr. Juan Perez</h4>
                                <h5 className="card-text"><strong>Especialidades:</strong> Medicina General, Gastroenterología  </h5>
                                <p className="card-text"><strong>Valoración:</strong></p>
                                <a href="/login" class="btn btn-primary">Agendar hora</a>
                            </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2-d9Vk6MgGHCgVJSUpqfUujoo3URE1y-xQ&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="card-title"><strong>Nombre:</strong>  Dr. Juan Perez</h4>
                                <h5 className="card-text"><strong>Especialidades:</strong> Medicina General, Gastroenterología  </h5>
                                <p className="card-text"><strong>Valoración:</strong></p>
                                <a href="/login" class="btn btn-primary">Agendar hora</a>
                            </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2-d9Vk6MgGHCgVJSUpqfUujoo3URE1y-xQ&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="card-title"><strong>Nombre:</strong>  Dr. Juan Perez</h4>
                                <h5 className="card-text"><strong>Especialidades:</strong> Medicina General, Gastroenterología  </h5>
                                <p className="card-text"><strong>Valoración:</strong></p>
                                <a href="/login" class="btn btn-primary">Agendar hora</a>
                            </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2-d9Vk6MgGHCgVJSUpqfUujoo3URE1y-xQ&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="card-title"><strong>Nombre:</strong>  Dr. Juan Perez</h4>
                                <h5 className="card-text"><strong>Especialidades:</strong> Medicina General, Gastroenterología  </h5>
                                <p className="card-text"><strong>Valoración:</strong></p>
                                <a href="/login" class="btn btn-primary">Agendar hora</a>
                            </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2-d9Vk6MgGHCgVJSUpqfUujoo3URE1y-xQ&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="card-title"><strong>Nombre:</strong>  Dr. Juan Perez</h4>
                                <h5 className="card-text"><strong>Especialidades:</strong> Medicina General, Gastroenterología  </h5>
                                <p className="card-text"><strong>Valoración:</strong></p>
                                <a href="/login" class="btn btn-primary">Agendar hora</a>
                            </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2-d9Vk6MgGHCgVJSUpqfUujoo3URE1y-xQ&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="card-title"><strong>Nombre:</strong>  Dr. Juan Perez</h4>
                                <h5 className="card-text"><strong>Especialidades:</strong> Medicina General, Gastroenterología  </h5>
                                <p className="card-text"><strong>Valoración:</strong></p>
                                <a href="/login" class="btn btn-primary">Agendar hora</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Medicos