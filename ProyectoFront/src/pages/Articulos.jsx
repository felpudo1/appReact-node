import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function Articulos() {
    return (
        <div>
            <section id="productos" className="text-xs-center">
                <div className="container mt -10">
                    <img src="images/imagen.svg" alt="productos" width="181" className="mx-auto d-block" />
                    <h1 className="h1 mb-3">Articulos</h1>
                    <div className="row">
                        <div className="col-md-4" >
                            <h6>ADAPTADOR</h6><a href='images/articulos/adaptadorReboseHembra.jpg'><img alt="text " className="img-fluid m-x-auto" src="images/articulos/adaptadorReboseHembra.jpg" /></a>
                        </div>
                        <div className="col-md-4">
                            <h6>ADAPTADOR</h6><a href='images/articulos/adaptadorGrifo.jpg'><img alt="text " src='images/articulos/adaptadorGrifo.jpg' className="img-fluid m-x-auto" /></a>
                        </div>
                        <div className="col-md-4">
                            <h6>ADAPTADOR</h6><a href='images/articulos/adaptadorGrifo.jpg'><img alt="text " src="images/articulos/adaptadorReboseHembra.jpg" className="img-fluid m-x-auto" /></a>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Articulos
