import React, { useState } from 'react';
import alert from 'sweetalert';

const Login = (props) => {

  const [mail, setMail] = useState('');
  const [pasword, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleMailChange = (event) => {
    setMail(event.target.value);
  }

  const handleLoginClick = () => {

    if (mail.length === 0) {
      alert('Debe completar el mail')
      return;
    }

    if (pasword.length === 0) {
      alert('Debe completar la contraseña')
      return;
    }

    fetch('http://localhost:3005/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mail: mail, password: pasword }),
    }).then(res => {
      return res.json();
    }).then((respuesta) => {    
      console.log(respuesta);
      if (respuesta.error) {
        setError(respuesta.error);
        alert('usuer no encontrado');
        return; 
      } else {
        // Navegar a la ruta correspondiente
        alert('Login exitoso');
        //props.onLogin(respuesta.token);
        debugger
      }
    });
  }

  return (
    <div>        

      <div className="container">
      <div class="row align-items-center">
      <p>Login:</p>

      <input placeholder="Ingrese su mail" onChange={handleMailChange} />
      <input placeholder="Ingrese su contraseña" onChange={(event) => setPassword(event.target.value)} type="password" />

      <button onClick={handleLoginClick}> Ingresar! </button>
      </div>
    </div>
    </div>
  )
}

export default Login;