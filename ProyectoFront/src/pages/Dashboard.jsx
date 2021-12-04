import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (

    <div>
      <div className="container -fluid ">
      <div className="row align-items -center">
      <p>
        This is the Dashboard page
        <br />
        Click on the button below.
      </p>
      <Link to="/addArticulo"><button className="btn btn-primary  btn-lg">
        agregar Articulos
      </button>
      </Link>
      <Link to="/addProveedor"><button className="btn btn-primary btn-lg">
        agregar Proveedor (no imp)
      </button>
      </Link>
      </div>
    </div>
    </div>
    
  )
}

export default Dashboard


