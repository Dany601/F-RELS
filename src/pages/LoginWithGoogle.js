import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import axiosClient from '../config/axios';

function LoginWithGoogle() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [dataform, setdataform]=useState({
        email:"",
        password:"",
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

            try {
                const urlData = new URLSearchParams(dataform).toString();
                const respuesta = await axiosClient.post(`/User/Login?${urlData}`);
                console.log(respuesta);

                setMessage("Bienvenido!");

                setTimeout(() => {
                    navigate("/lessor");
                }, 2000);
                
            } catch (error) {
                console.log(error);
                setMessage("Contraseña o usuario incorrectos")
            }


            // // Redirige según el rol seleccionado
            // if (dataform.usertypeid === '1') {
            //     navigate('/lessor'); // Redirige a la página de arrendador
            // } else if (dataform.usertypeid === '4') {
            //     navigate('/arrendatarios'); // Redirige a la página de arrendatario
            // }
       
    };

    const handleChange = (event) => {
        setdataform({...dataform, [event.target.name] : event.target.value});
        console.log(dataform);
        
    };

    const handleBack = () => {
        navigate("/"); // Regresa a la página anterior
    };
    const handleRegister = () => {
        navigate("/register"); // Regresa a la página anterior
    };

    return (
        <>
            <div className="login lessor-img">
                <div className="content">
                    <div className="left-column">
                        <h1>Inicia sesión con tu Correo Electronico</h1>
                        <h2>Introduce tu nombre de usuario y contraseña para continuar.</h2>
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
                            <form onSubmit={handleSubmit}>
                                <div className="input-groupp">
                                    <label htmlFor="usuario">Email </label>
                                    <input onChange={handleChange} type="email" id="usuario" name="email" required value={dataform.email} />
                                </div>
                                <div className="input-groupp">
                                    <label htmlFor="contraseña">Contraseña </label>
                                    <input onChange={handleChange} type="password" id="contraseña" name="password" value={dataform.password} required />
                                </div>
                            {/* Aquí aplicamos el margen superior a los botones */}
                                <div style={{ marginTop: '20px' }}> {/* Ajusta el valor de '20px' según lo necesites */}
                                    {message ? <p className='message'>{message}</p> : ""}
                                    <button type="submit">Iniciar Sesión</button>
                                    <button type="button" onClick={handleBack} style={{ marginLeft: '10px' }}>Regresar</button>
                                    <button type="link" onClick={handleRegister} style={{ marginLeft: '10px' }}>Registrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginWithGoogle;
