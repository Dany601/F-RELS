
import React, { useState, useEffect } from "react";
import "./AgendarCitas.css";

const AgendarCitas = () => {
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [arrendador, setArrendador] = useState(null);
  
    useEffect(() => {
      const obtenerDatosArrendador = async () => {
        try {
          const response = await fetch("https://tu-api.com/arrendador/1");
          const data = await response.json();
          setArrendador(data); 
        } catch (error) {
          console.error("Error al obtener datos del arrendador:", error);
        }
      };
  
      obtenerDatosArrendador(); 
    }, []);
  
    const agendarCita = (e) => {
      e.preventDefault();
      alert(`Cita agendada para el ${fecha} a las ${hora}`);
    };
  
    const cancelarCita = () => {
      setFecha("");
      setHora("");
    };
  
    return (
      <div className="container">
        <div className="cita-container">
          <h2>Agendar Cita</h2>
  
          {/* Datos del Arrendador obtenidos de la API */}
          <div className="inmueble-info">
            <p>INFORMACIÓN DEL INMUEBLE Y ARRENDADOR</p>
            {arrendador ? (
              <div className="arrendador">
                <p>Nombre del Arrendador: {arrendador.nombre}</p>
                <p>Teléfono: {arrendador.telefono}</p>
                <p>Dirección: {arrendador.direccion}</p>
              </div>
            ) : (
              <p>Cargando información del arrendador...</p>
            )}
            <img src={require("./casa3.png")} alt="Casa" className="casa-img" />
          </div>
  
          <h2>Disponible</h2>
          <form onSubmit={agendarCita} className="form-container">
            <label>
              Año:
              <select onChange={(e) => setFecha(e.target.value)} required>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </label>
  
            <label>
              Mes:
              <select onChange={(e) => setFecha(e.target.value)} required>
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
              </select>
            </label>
  
            <label>
              Día:
              <input
                type="number"
                placeholder="Día"
                min="1"
                max="31"
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </label>
  
            <label>
              Hora:
              <input
                type="time"
                onChange={(e) => setHora(e.target.value)}
                required
              />
            </label>
  
            <button type="submit" className="btn agendar">Agendar Cita</button>
            <button type="button" className="btn cancelar" onClick={cancelarCita}>
              Cancelar
            </button>
          </form>
        </div>
      </div>
    );
  };

export default AgendarCitas;
