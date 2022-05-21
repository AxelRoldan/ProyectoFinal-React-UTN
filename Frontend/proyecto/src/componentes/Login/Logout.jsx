import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {Button} from 'react-bootstrap'
import "./Login.css"

function Logout() {

    const { logout } = useAuth0() // Boton que deslogea al usuario
  return (
    <Button id="botonLogin" onClick={ () => logout()}>Logout</Button>
  )
}

export default Logout