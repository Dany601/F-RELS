import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Login.css'; // Asegúrate de crear este archivo CSS


function Login() {
    const navigate = useNavigate(); // Inicializa useNavigate
        // Estados para los campos del formulario
        const [nombre, setNombre] = useState('');
        const [apellido, setApellido] = useState('');
        const [correo, setCorreo] = useState('');
        const [contraseña, setContraseña] = useState('');
        const [rol, setRol] = useState('');
    
        // Función para manejar la selección del rol
        const handleRoleChange = (event) => {
            setRol(event.target.value);
        };
    
        // Función de validación
        const isFormValid = () => {
            return nombre && apellido && correo && contraseña && rol;
        };
    
        // Maneja el envío del formulario
        const handleSubmit = (event) => {
            event.preventDefault();
            
            if (isFormValid()) {
                // Redirige según el rol seleccionado
                if (rol === 'arrendador') {
                    navigate('/lessor'); // Redirige a la página de arrendador
                } else if (rol === 'arrendatario') {
                    navigate('/arrendatarios'); // Redirige a la página de arrendatario
                }
            } else {
                alert('Por favor, completa todos los campos y elige un rol.');
            }
        };
    

    const handleBack = () => {
        navigate(-1); // Regresa a la página anterior
    };
    // Aquí defines la nueva función
    const handleGoogleSignup = () => {
        navigate('/login-with-google'); // Redirige a la nueva página
    };
    return (
    
        <div className="login">
            <h1>Bienvenido a InmoClick</h1>
            <hr className="separator-login" />
            <div className="content">
                <div className="left-column">
                    <h2>Encuentra el hogar de tus sueños</h2>
                    <h5>
                        Descubre tu nuevo hogar con InmoClick. Explora una amplia variedad de propiedades en Chía con imágenes de alta calidad y descripciones detalladas. 
                        ¡Visualiza cada espacio como si ya estuvieras viviendo allí! Nuestra plataforma te permite filtrar tu búsqueda por precio, tamaño, ubicación.
                    </h5>
                    <h3 style={{ textAlign: 'left', textDecoration: 'underline', color: '#ffffff' }}>
                    <span style={{
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        marginRight: '10px',
                        position: 'relative'
                    }}>
                        <span style={{
                            display: 'block',
                            width: '0',
                            height: '0',
                            borderLeft: '8px solid #585656',
                            borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}></span>
                    </span>
                    ELIGE TU HOGAR
                </h3>

                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                        <img src={require('../assets/imag/imagen1.jpg')} alt="Imagen 1" 
                        style={{ width: '300px', marginRight: '30px', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                         />
                        <img src={require('../assets/imag/imagen2.jpeg')} alt="Imagen 2" 
                        style={{ width: '300px', marginRight: '30px', transition: 'transform 0.3s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                         />
                </div>
                </div>
                <div className="right-column">
                    <div className="signup-form">
                        <h3>Sign Up & Start Your Trial</h3>
                        <div className="quick-signup-line">
                            <span>Quick Sign Up</span>
                        </div>
                        <button className="google-signup-button" onClick={handleGoogleSignup}>Sign in with your Email</button>
                        
                        <form onSubmit={handleSubmit}>
                            <p style={{ fontSize: '12px', color: '#666', textAlign: 'center', margin: '10px 0' }}>
                                Or use your email address
                            </p>
                            <div className="input-group" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <div style={{ width: '45%' }}>                                
                                
                                    <label htmlFor="nombre">Nombre </label>
                                    <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                                </div>
                                <div style={{ width: '45%' }}>
                                    <label htmlFor="apellido">Apellido </label>
                                    <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                                </div>
                            </div>
                            <div className="input-groupp">
                                <label htmlFor="correo">Correo </label>
                                <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                            </div>
                            <div className="input-groupp">
                                <label htmlFor="contraseña">Contraseña </label>
                                <input type="password" id="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
                            </div>
                            <p style={{ fontSize: '12px', color: '#666', textAlign: 'left', margin: '10px 0' }}>
                                Elige tu Rol
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <div style={{ width: '45%', border: '1px solid black', backgroundColor: '#f0f0f0', padding: '10px' }}>
                                    <label>
                                        <input type="radio" name="rol" value="arrendador" onChange={handleRoleChange} required />
                                        Arrendador
                                    </label>
                                </div>
                                <div style={{ width: '45%', border: '1px solid black', backgroundColor: '#f0f0f0', padding: '10px' }}>
                                    <label>
                                        <input type="radio" name="rol" value="arrendatario" onChange={handleRoleChange}required />
                                        Arrendatario
                                    </label>
                                </div>
                            </div>
                            <button type="submit">Crear Cuenta</button>
                            <button type="button" onClick={handleBack} style={{ marginLeft: '10px' }}>Regresar</button> {/* Botón "Anterior" */}
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Login;