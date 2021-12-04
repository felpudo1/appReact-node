import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import alert from 'sweetalert';
function Conozcanos() {
    return (
        <div>
                <section id="conozcanos" className="conozcanos  text-xs-center"> 
               
                         <div className="container mt -10">
                        <img src="images/imagen.svg" alt="conozcanos" width="181" className="mx-auto d-block" />
                        <h1 className="h1">CONOZCANOS</h1>
                        <p>Somos una empresa familiar fundada en el año 2002 dedicada desde el inicio a la importación de materiales de construcción para el envasado de alimentos e instalada en el Departamento de Canelones, Uruguay.
                        Telsitur fue el nombre elegido para nuestra empresa asociado a la alegría, la felicidad, a la creación y a la vida todos sentimientos que tuvimos cuando iniciamos este camino empresarial y que nunca hemos perdido. Nuestra meta fue desde siempre establecer relaciones comerciales a largo plazo, basadas en la confianza y ofreciendo soluciones integrales a nuestros clientes y proveedores.
                        Paso a paso, apostamos a la mejora continua de nuestros procesos, comprometidos con la transparencia en nuestros negocios, el cuidado del medioambiente y con el desarrollo de los talentos y el proyecto de vida de nuestros colaboradores.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#"> <img src="images/mision.jpg" alt="mision" width="290" className="img-fluid m-x-auto" /></a>
                        </div>
                        <div className="col-md-4">
                            <a href="#"> <img src="images/vision.jpg" alt="vision" width="290" className="img-fluid m-x-auto" /> </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#"> <img src="images/valores.jpg" alt="valores" width="290" className="img-fluid m-x-auto" /> </a>
                        </div>
                    </div>
            </div>
        </section>
    </div>
        
    )
}

export default Conozcanos
