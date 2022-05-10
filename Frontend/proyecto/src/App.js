import './App.css';
import react from 'react';

function App() {

  fetch('http://localhost:8080/')
    .then(e => e.json())
    .then(e => console.log(e))
  function consultaApi (e){
    e.preventDefault()

    let persona = {
      nombre: document.getElementById("nombrePersona").value,
      apellido: document.getElementById("apellidoPersona").value,
      dni: document.getElementById("dniPersona").value
    }

    fetch('http://localhost:8080/api/agregarUsuario',{
      method: "post",
      body: JSON.stringify(persona)
    })
    .then(e => e.json())
    .then(e => console.log(e))
  }

  return (
    <div className="App">
      <h1>BIENVENIDO A REACT</h1>

      <form action="post" onSubmit={consultaApi}>
        <label>
          Nombre
        </label>
        <input type="text" placeholder="ingrese su nombre" id="nombrePersona"></input>
        <label>
          Apellido
        </label>
        <input type="text" placeholder="ingrese su apellido" id="apellidoPersona"></input>
        <label>
          DNI
        </label>
        <input type="text" placeholder="ingrese su dni" id="dniPersona"></input>
        <button type="submit" id="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
