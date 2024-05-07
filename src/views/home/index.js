import React from 'react';
import Navbar from "../../components/Navbar";

const Home = ({}) => {
    return (
        <div className="container-fluid d-flex" style={{height: '100vh'}}>
            <Navbar/>
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <p>Hola, selecciona una opción del Navbar para empezar</p>
            </div>
        </div>
    )
}

export default Home;
