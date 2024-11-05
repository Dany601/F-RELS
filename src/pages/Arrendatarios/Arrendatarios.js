import React, { useState } from 'react'; 
import './Arrendatarios.css';
import image from './image.png'; // Adjust the path if necessary
import hubble from './hubble.png'; // Adjust the path if necessary

function Arrendatarios() {
  const [employmentType, setEmploymentType] = useState('');

  const handleFileUpload = (e) => {
    console.log('Archivo subido:', e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registro Finalizado');
  };

  return (
    <div className="arrendatarios-container">
      {/* Left Image Section */}
      <div className="images-section">
        <img src={image} alt="Image 1" className="arrendatario-image" />
        <img src={hubble} alt="Image 2" className="arrendatario-image" />
      </div>

      {/* Right Form Section */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Arrendatario</h2>
          <div className="form-group">
            <label>Documento del arrendatario*</label>
            <input type="file" onChange={handleFileUpload} required />
          </div>
          <div className="form-group">
            <label>Antecedentes Judiciales</label>
            <input type="file" onChange={handleFileUpload} />
          </div>
          <div className="form-group">
            <label>Antecedentes Penales*</label>
            <input type="file" onChange={handleFileUpload} required />
          </div>
          <div className="form-group">
            <label>Recomendaciones</label>
            <input type="file" onChange={handleFileUpload} />
          </div>
          <div className="form-group">
            <label>Relación Laboral</label>
            <div className="employment-options">
              <button
                type="button"
                className={employmentType === 'Empleado' ? 'active' : ''}
                onClick={() => setEmploymentType('Empleado')}
              >
                Empleado
              </button>
              <button
                type="button"
                className={employmentType === 'Independiente' ? 'active' : ''}
                onClick={() => setEmploymentType('Independiente')}
              >
                Independiente
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Certificado Laboral</label>
            <input type="file" onChange={handleFileUpload} />
          </div>
          <div className="form-group">
            <label>Extracto Bancario</label>
            <input type="file" onChange={handleFileUpload} />
          </div>
          <div className="form-group">
            <label>RUT</label>
            <input type="text" />
          </div>
          <div className="form-buttons">
            <button type="submit">Finalizar Registro</button>
            <button type="button" onClick={() => console.log('Regresar')}>Regresar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Arrendatarios;