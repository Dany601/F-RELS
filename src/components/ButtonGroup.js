import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para hacer la navegación
import './ButtonGroup.css'; // Importar el archivo de estilos

function ButtonGroup() {
    return (
        <>
            <div className="button-group-homepage">
            {/* Enlace para navegar a la página "Conócenos" */}
            <Link to="/conocenos" className="btn">Conócenos</Link>
            <Link to="/login" className="btn">Iniciar sesión</Link> {/* Cambiado a un enlace */}
            
            {/* Enlace para navegar a la página "Buscar Hogar" */}
            <Link to="/buscar-hogar" className="btn">
                    Vivienda <i className="fa fa-search" aria-hidden="true"></i>
                </Link>
            </div>

            <div className="content">
            <h1 className="titulo">InmoClick</h1>
            <p className="subtituloMG">
                <strong>Tu aliado para gestionar tus propiedades</strong><br />
                <strong>en Chía de forma sencilla y eficiente.</strong>
            </p>
            </div>

        
        </>
    );
}

export default ButtonGroup;
