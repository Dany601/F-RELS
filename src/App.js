import React from 'react';
import './App.css'; // Importamos los estilos globales
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Módulo para manejar las rutas
import ButtonGroup from './components/ButtonGroup'; // Importamos el componente de los botones
import Conocenos from './pages/Conocenos'; // Importamos la nueva página vacía
import Login from './pages/Login'; // Importamos la página de Login
import LoginWithGoogle from './pages/LoginWithGoogle'; // Importamos la nueva página para LoginWithGoogle
import Lessor from './pages/Lessor';
import Arrendatarios from './pages/Arrendatarios/Arrendatarios';
import BuscarHogar from './pages/BuscarHogar/BuscarHogar';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Grupo de botones que se muestra siempre */}

                {/* Definimos las rutas para cambiar de página */}
                <Routes>
                    {/* Página principal */}
                    <Route 
                        path="/" 
                        element={
                        <ButtonGroup /> 
                        } 
                    />

                    {/* Página de "Conócenos" */}
                    <Route 
                        path="/conocenos" 
                        element={
                            <div className="content">
                                <Conocenos />
                            </div>
                        } 
                    />

                    {/* Página de "Iniciar Sesión" */}
                    <Route 
                        path="/login" 
                        element={
                            <div className="content">
                                <Login />
                            </div>
                        } 
                    />

                    {/* Página de "Login with Google" */}
                    <Route 
                        path="/login-with-google" 
                        element={
                            <div className="content">
                                <LoginWithGoogle />
                            </div>
                        } 
                    />
                    {/* Otras rutas */}
                    <Route path="/lessor" element={<Lessor />} />
                    <Route path="/arrendatarios" element={<Arrendatarios />} />
                    <Route path="/buscar-hogar" element={<BuscarHogar />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;