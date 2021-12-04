import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Conozcanos from '../pages/Conozcanos'
import Articulos from '../pages/Articulos'
import Contacto from '../pages/Contacto'
import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFoundPage from '../pages/NotFoundPage'
import Dashboard from '../pages/Dashboard'
import AddArticulo from '../pages/AddArticulo'




export default function AppRouter() {
    return (
        <div>
            <div>
            <Router>
                <Navbar />
                <Switch>   {/* ir desde el mas especifico al menos especifico */}
                    {/* el switch chequea uno x uno y entra  */}

                    <Route exact path="/conozcanos" component={Conozcanos} />
                    <Route exact path="/articulos" component={Articulos} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/AddArticulo" component={AddArticulo} />
                    <Route exact path="/" component={Home} />


                    <Route path="*">    {/* no incluir exact*/}
                        <NotFoundPage />   {/* incluir * al final*/}
                    </Route>            {/* escribirlo asi es = alos 3 arriba*/}

                </Switch>
                <Footer />  
                {/* el footer ya aparece en todas las paginas q salgan desde approuter */}



            </Router>
            </div>
        </div>
    )
}

