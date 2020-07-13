import React from "react"

const Home = props => {
    return (
        <div>
            {/* carrusel */}
            <div id="carrusel">
                <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel" >
                    {/* <ol className="carousel-indicators" >
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol> */}
                    <div className="carousel-inner" id="carrusel-1" role="listbox">
                        <div className="carousel-item active" id="carrusel-3">
                            <img src={"/img/carrusel1.jpg"}
                                className="d-block w-100"
                                height="500px"
                                alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Busca a tu médico</h1>
                            </div>
                        </div>
                        <div className="carousel-item" id="carrusel-3">
                            <img src={"/img/carrusel2.jpg"}
                                className="d-block w-100"
                                height="500px"
                                alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Agenda una hora</h1>
                            </div>
                        </div>

                        <div className="carousel-item " id="carrusel-2">
                            <img
                                src={"/img/carrusel3.jpg"}
                                className="d-block w-100"
                                height="500px"
                                alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Valora la atención </h1>
                            </div>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div> {/* fin carrusel */}

            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>



        </div>
    )
}

export default Home