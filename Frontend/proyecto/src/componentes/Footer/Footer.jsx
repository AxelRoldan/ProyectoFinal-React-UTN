import React from 'react';
import "./Footer.css"

function Footer() { //Footer templeate descargado de internet
  return (
    <>
    <footer className="page-footer font-small blue">
    <div className="container-fluid text-center text-md-left" id="footer" style={{backgroundColor:"#54BAB9", padding:"25px"}}>
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Proyecto Final React</h5>
                <p>Proyecto creado para la certificacion por parte de la UTN.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Tecnologias Utilizadas</h5>
                <ul className="list-unstyled">
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                    <li>NodeJS</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">API </h5>
                <ul className="list-unstyled">
                    <li><a href="https://developers.mercadolibre.com.ar/buscador-de-productos" target={"_blank"} style={{textDecoration:"none"}}>MercadoLibre</a></li>
                    <li><a href="https://auth0.com/es" target={"_blank"} style={{textDecoration:"none"}}>Auth0</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    </>
  );
}

export default Footer