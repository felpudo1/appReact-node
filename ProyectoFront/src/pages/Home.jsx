import Button from '../components/Button'
// import { Button } from 'bootstrap'
import React from 'react'

export default function Home() {
    return (
        <div>
             
             <div className="container text-center pb-5">	   
             <img src="images/telsitur.png" alt="conozcanos" width="80%"  height="60vh" className="mx-auto d-block" />
		              <img className="img-fluid src=./images/fondo.jpg " /> 
                     <img src="images/fondo.jpg"  width="70%" height="80%" className="mx-auto d-block"/>  
		     
             </div>
            <Button /> 
            
        </div>

        
    )
}
