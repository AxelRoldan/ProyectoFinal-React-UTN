import React from 'react'
import {  useAuth0 } from '@auth0/auth0-react'
import { Button } from 'react-bootstrap'
import "./Login.css"

const Login = () => {

    const { loginWithRedirect } = useAuth0()

    //Boton que redirige para cargar el usuario

  return (
      <>
    <Button id="botonLogin" onClick={() => loginWithRedirect()}> 
        Login
    </Button>
    </>
  )
}

export default Login