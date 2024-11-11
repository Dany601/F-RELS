import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Login.css'; // Asegúrate de crear este archivo CSS
import imagen1 from "../assets/imag/imagen1.jpg"
import imagen2 from "../assets/imag/imagen2.jpeg"
import axiosClient from '../config/axios';


function Login() {
    const navigate = useNavigate(); // Inicializa useNavigate
        // Estados para los campos del formulario
        

        const [dataform, setdataform]=useState({
            name:"",
            lastname:"",
            email:"",
            password:"",
            identification:"",
            cellphonenumber:"",
            typedocument:"",
            usertypeid:"",
        })
    

        // Función para manejar la selección del rol
        const handleChange = (event) => {
            setdataform({...dataform, [event.target.name] : event.target.value});
            console.log(dataform);
            
        };
    
      
        // Maneja el envío del formulario
        const handleSubmit = async (event) => {
            event.preventDefault();

                try {
                
                    const respuesta = await axiosClient.post("/User", dataform);
                    console.log(respuesta);
                    
                    
                } catch (error) {
                    console.log(error);
                }


                // Redirige según el rol seleccionado
                if (dataform.usertypeid === '1') {
                    navigate('/lessor'); // Redirige a la página de arrendador
                } else if (dataform.usertypeid === '4') {
                    navigate('/arrendatarios'); // Redirige a la página de arrendatario
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
                        <img src={imagen1} alt="Imagen 1" 
                        style={{ width: '300px', marginRight: '30px', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                         />
                        <img src={imagen2} alt="Imagen 2" 
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
                                    <input type="text" id="nombre" name="name" value={dataform.name} onChange={handleChange} required />
                                </div>
                                <div style={{ width: '45%' }}>
                                    <label htmlFor="apellido">Apellido </label>
                                    <input type="text" id="apellido" name="lastname" value={dataform.lastname} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="input-groupp">
                                <label htmlFor="correo">Correo </label>
                                <input type="email" id="correo" name="email" value={dataform.email} onChange={handleChange} required />
                            </div>
                            <div className="input-groupp">
                                <label htmlFor="contraseña">Contraseña </label>
                                <input type="password" id="contraseña" name="password" value={dataform.password} onChange={handleChange} required />
                            </div>
                            <div className="input-groupp">
                                <label htmlFor="Identificacion">Identificacion </label>
                                <input type="number" id="Identificacion" name="identification" value={dataform.identification} onChange={handleChange} required />
                            </div>
                            <div className="input-groupp">
                                <label htmlFor="Telefono">Telefono </label>
                                <input type="number" id="Telefono" name="cellphonenumber" value={dataform.cellphonenumber} onChange={handleChange} required />
                            </div>
                            <div className="input-groupp">
                                <label htmlFor="TipoIdentificacion">TipoIdentificacion </label>
                                <input type="number" id="TipoIdentificacion" name="typedocument" value={dataform.typedocument} onChange={handleChange} required />
                            </div>
                            <p style={{ fontSize: '12px', color: '#666', textAlign: 'left', margin: '10px 0' }}>
                                Elige tu Rol
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <div style={{ width: '45%', border: '1px solid black', backgroundColor: '#f0f0f0', padding: '10px' }}>
                                    <label>
                                        <input type="radio" name="usertypeid" value="1" onChange={handleChange} required />
                                        Arrendador
                                    </label>
                                </div>
                                <div style={{ width: '45%', border: '1px solid black', backgroundColor: '#f0f0f0', padding: '10px' }}>
                                    <label>
                                        <input type="radio" name="usertypeid" value="4" onChange={handleChange}required />
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