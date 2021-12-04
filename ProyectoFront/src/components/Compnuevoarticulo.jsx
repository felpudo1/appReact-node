import React, {useState} from 'react'
import alert from 'sweetalert';
import '../index.css';


const Compnuevoarticulo = () => {

    //usestate devuelve array variable para lleer y metodo para modif valor
    const [nombre, setnombre] = useState('');
    const [descripcion, setdescripcion] = useState('');
    const [categoria, setcategoria] = useState('');
    const [imagen, setimagen] = useState('');
    const [precio, setprecio] = useState('');
    const [stock, setstock] = useState('');
    const [estado, setestado] = useState('');
    const [proveedor, setproveedor] = useState('');
    const [categoriaf, setcategoriaf] = useState('');
    //const [error, setError] = useState('');


    const handlenombreChange = (event) =>{
        setnombre(event.target.value); }        
    // como onchange recibe evento. se usa un metodo auxiliar handler
    // onchange={handlenombreChange} es una ref a una fx y se definie arriba
    // va sin () xq sino se esta invocando.  se pasa asi para q se ejecute c/vez q se haga onchange
    // se puede hacer en la misma linea si no se quiere validar x ej
    
    const handleclickbotonagregar = () =>{
        if (nombre.length === 0){
            debugger
            alert ("falta ingresar nombre")
            return;            
        }
         
        fetch(`http://localhost:3005/art/agregarArticulo`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre:nombre,            
            descripcion: descripcion,
            categoria: categoria,
            imagen:imagen,
            precio:precio,
            stock:stock,
            estado:"true",
            id_proveedorEnArticulos:proveedor,
            id_categoriaEnArticulos:categoriaf
        }),
        
        }).then(res => {
            return res.json();
          }).then((respuesta) => {
                
            console.log(respuesta);
            if (respuesta.error) {
            //setError(respuesta.error);
            alert('datos no validos'); 
            } else {
              // Navegar a la ruta correspondiente
              alert('articulo ingresado con exito');
                      
            }
          });
                
        }
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pg">
                        <form>
                        <div>
                            <h4>Nombre</h4>
                            <input onChange={handlenombreChange} type="text" placeholder="Nombre"/>                                         
                            {/* <input onChange={(event) =>setnombre(event.target.value)} type="text" placeholder="Nombre"/> */}
                        </div> 

                        <div>
                            <h4>Descripcion</h4>
                            <input onChange={(event) =>setdescripcion(event.target.value)} type="text" placeholder="Descripción"  />
                        </div>         {/*aca declaramos la fx en linea   */}  

                        <div>
                            <h4>Categoria</h4>
                            <select onChange={(event) =>setcategoria(event.target.value)} name="categoria" id="SelCategoria">
                                <option value="ferreteria">ferreteria</option>
                                <option value="sanitaria">sanitaria</option>
                                <option value="electricidad">electricidad</option>
                            </select>
                        </div> 

                        <div>
                            <h4>imagen</h4>
                            <input onChange={(event) =>setimagen(event.target.value)}  type="text" placeholder="imagen" />
                        </div>
                        

                        <div>
                            <h4>Precio</h4>
                            <input onChange={(event) =>setprecio(event.target.value)}  type="number" placeholder="Precio" />
                        </div>

                        <div>
                            <h4>Stock</h4>
                            <input onChange={(event) =>setstock(event.target.value)}type="number"  placeholder="Stock" />
                        </div>

                        <div>
                            <h4>Estado</h4>
                            <input onChange={(event) =>setestado(event.target.value)} type="text" name="estado" placeholder="Estado" disabled />  {/*  value="true" disabled  */}
                        </div>                       

                        <h4>proveedor</h4>
                            <select onChange={(event) =>setproveedor(event.target.value)} >
                                <option value="1">1</option>
                                <option value="2">2</option>                                
                            </select>

                        <div>
                            <h4>categoriaf</h4>
                            <select onChange={(event) =>setcategoriaf(event.target.value)} >
                                <option value="1">1</option>
                                <option value="2">2</option>                                
                            </select>
                        </div>
                        </form>

                        <div>
                            <button onClick={handleclickbotonagregar} >Agregar!</button>
                            
                        </div>
                        
                        
                        </div>


                    </div>
                </div>
             

            </div>
        
    )
}

export default Compnuevoarticulo
