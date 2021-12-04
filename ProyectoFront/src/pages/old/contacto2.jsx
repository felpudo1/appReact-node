import React from 'react'


var contacto2 = React.createClass({
    render: function() {
      return (
  
        <section id="contacto" className="contacto  text-xs-center">
          <div className="container mt -10">
            <img src="images/nosotros.svg" alt="conozcanos" width={181} className="img-fluid my-auto mb-2 " /> 
            <h2 className="h3 mb-3">CONTACTO</h2>
            <div className="row">
              <div className="col-md-4">
                <i className="fa fa-briefcase" aria-hidden="true" />
                <h3 className="h5">DIRECCION</h3>
                <p>Estamos en Ciudad de la Costa, Solymar</p>
                <p>L A V 09:00 a 18:00</p>
              </div>
              <div className="col-md-4">
                <i className="fa fa-mobile" aria-hidden="true" /> 
                <h3 className="h5">TELEFONOS</h3>
                <p>Telefono 0460-6621</p>
                <p>Telefono 094 797 659</p>
              </div>
              <div className="col-md-4">
                <i className="fa fa-envelope" aria-hidden="true" /> 
                <h3 className="h5">CORREO</h3>
                <p>telsitur@telsitur.com</p>
                <p>atcliente@telsitur.com</p>
              </div>
            </div>
            <div className="row">
              <form method="POST" action="javascript:void(0);">
                <p>ENVIENOS UN MENSAJE A NUESTRO MAIL, NOS COMUNICAREMOS EN BREVE</p> 
                <input id="nombre" type="text" name="nombre" placeholder="Ingrese su nombre" />
                <input id="mail" type="mail" name="mail" placeholder="Ingrese su mail" />
                <input id="mensaje" type="text" name="mensaje" placeholder="Ingrese su mensaje" />
                <button id="enviarMensaje">ENVIAR MENSAJE</button>
              </form>
            </div>
          </div>
        </section>
      );
    }
  });
  export default contacto2