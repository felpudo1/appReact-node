import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function Header() {
    return (
            <section className="bienvenidos">
            <header className="encabezado">
                <nav className="navbar navbar-light navbar-fixed-top">
                    <div className="container">
                        <button className="navbar-toggler hidden-md-up float-xs-right" type="button" data-toggle="collapse" data-target="#menuprincipal">
</button>
                        <a className="navbar-brand" href="#">IMPORTADORA TELSITUR</a>
                        <div className="collapse navbar-toggleable-sm float-md-right" id="menuprincipal">
                            <ul className="nav navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link " href="index.html">HOME</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link disabled esconder" href="#">Conózcanos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled esconder" href="#">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled esconder" href="#">Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Log out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </section>
    )
}

export default Header
