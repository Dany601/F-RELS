import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginWithGoogle() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Regresa a la página anterior
    };

    return (
        <div className="login">
            <h9>Bienvenido a InmoClick - Sign Up</h9>
            <hr className="separator" />
            <div className="content">
                <div className="left-column">
                    <h2>Inicia sesión con tu Correo Electronico</h2>
                    <p>Introduce tu nombre de usuario y contraseña para continuar.</p>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                        <img src={require('../assets/imag/imagen1.jpg')} alt="Imagen 1" 
                        style={{ width: '300px', marginRight: '30px', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <img src={require('../assets/imag/imagen2.jpeg')} alt="Imagen 2" 
                        style={{ width: '300px', marginRight: '30px', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                         />
                    </div>
                </div>
                <div className="right-column">
                    <div className="signup-form">
                        <h3>Iniciar Sesión</h3>
                        <form>
                            <div className="input-groupp">
                                <label htmlFor="usuario">Usuario </label>
                                <input type="text" id="usuario" name="usuario" required />
                            </div>
                            <div className="input-groupp">
                                <label htmlFor="contraseña">Contraseña </label>
                                <input type="password" id="contraseña" name="contraseña" required />
                            </div>
                           {/* Aquí aplicamos el margen superior a los botones */}
                            <div style={{ marginTop: '20px' }}> {/* Ajusta el valor de '20px' según lo necesites */}
                                <button type="submit">Iniciar Sesión</button>
                                <button type="button" onClick={handleBack} style={{ marginLeft: '10px' }}>Regresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginWithGoogle;
