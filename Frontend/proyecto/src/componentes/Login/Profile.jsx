import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Image } from 'react-bootstrap'
import "./Login.css"

function Profile() {

    const { isAuthenticated, user, isLoading } = useAuth0()
  //Perfil sin uso
  return (
    isAuthenticated && (
        <div>
            <img id="imagenUsuario" src={user.picture}></img>
        </div>
    )
  )
}

export default Profile