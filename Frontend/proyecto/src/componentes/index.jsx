import react, {useState, useEffect} from 'react'
import Navegacion from './Navbar/Navbar'
import Footer from './Footer/Footer';
import Main from './Main/Main';

import '../App.css'


const Index = () => {

    

  return (
    <>
        <Navegacion />
        <Main/>
        <Footer />
    </>
  )
}

export default Index 