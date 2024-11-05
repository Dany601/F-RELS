
import React, { useState, useEffect } from "react";
import "./CitasProgramadas.css";

const CitasProgramadas = () => {
  const [citas, setCitas] = useState([]);

  
  useEffect(() => {
    const obtenerCitas = async () => {
      try {
        const response = await fetch("https://tu-api.com/citas"); 
        const data = await response.json();
        setCitas(data);
      } catch (error) {
        console.error("Error al obtener las citas:", error);
      }
    };

    obtenerCitas();
  }, []);

  const cancelarCita = (id) => {
    
    alert(`Cita con ID ${id} cancelada`);
 
  };

  return (
    <div className="container">
    <h2>CITAS PROGRAMADAS</h2>

    {citas.length > 0 ? (
      citas.map((cita) => (
        <div className="cita-programada" key={cita.id}>
          {/* Aquí reemplazamos la imagen por un ícono simple */}
          <div className="icono-arrendatario">
            <div className="arrendatario-icono">👤</div> {/* Icono de usuario */}
          </div>
          <div className="detalles-cita">
            <div className="datos-fecha-hora">
              <label>Año:</label> <input type="text" value={cita.año} readOnly />
              <label>Mes:</label> <input type="text" value={cita.mes} readOnly />
              <label>Día:</label> <input type="text" value={cita.dia} readOnly />
              <label>Hora:</label> <input type="text" value={cita.hora} readOnly />
            </div>
            <div className="informacion-arrendatario">
              <button className="info-btn">INFORMACIÓN ARRENDATARIO</button>
              <button className="cancel-btn" onClick={() => cancelarCita(cita.id)}>
                CANCELAR CITA
              </button>
            </div>
            <div className="informacion-inmueble">
              <button className="info-btn">INFORMACIÓN DEL INMUEBLE AGENDADO</button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No hay citas programadas</p>
    )}
  </div>
);
};


export default CitasProgramadas;
