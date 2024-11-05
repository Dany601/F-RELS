import React from 'react';
import './Conocenos.css';

function Conocenos() {
    // Función para manejar el regreso
    const handleRegresar = () => {
        window.history.back(); // Regresa a la página anterior
    };

    return (
        <div className="conocenos-container">
            <h1 className="titulo-conocenos">CONOCENOS</h1>
            <h2 className="titulo-inmoclick">INMOCLICK</h2>
            <div className="contenido">
                <div className="columna izquierda">
                    <div className="cuadro-texto">
                        <h2 className="subtitulo cuadro-centrado">¿QUÉ ES INMOCLICK?</h2>
                    </div>
                    <div className="cuadro-texto descripcion">
                        <p className="texto">
                            InmoClick Chía es la plataforma digital diseñada para facilitar la gestión de tus propiedades en el municipio de Chía. ¿Quieres alquilar tu apartamento o casa? Con InmoClick, podrás crear anuncios detallados, subir fotos de alta calidad y recibir solicitudes de arrendamiento de manera rápida y segura.
                        </p>
                    </div>
                </div>
                <div className="columna derecha">
                    <div className="cuadro-texto">
                        <h2 className="subtitulo cuadro-centrado">MISIÓN / VISIÓN</h2>
                    </div>
                    <div className="cuadro-textomv">
                        <p className="textomv">
                            Misión: Conectar a propietarios e inquilinos en Chía de manera rápida y segura, simplificando el proceso de alquiler de propiedades.
                        </p>
                    </div>
                    <div className="cuadro-textomv">
                        <p className="textomv">
                            Visión: Ser la plataforma de referencia para la gestión inmobiliaria en Chía, ofreciendo una experiencia digital intuitiva y confiable.
                        </p>
                    </div>
                </div>
            </div>
            {/* Nuevo cuadro de texto centrado */}
            <div className="cuadro-textou centradou">
                <p className="texto centrado">¿CÓMO SE UTILIZA INMOCLICK?</p>
            </div>
            {/* Botón REGRESAR */}
            <button className="boton-regresar" onClick={handleRegresar}>
                REGRESAR
            </button>
            
        </div>
        
    );
}

export default Conocenos;
