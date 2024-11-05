import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Lessor.css'; 

function Lessor() {
    const navigate = useNavigate(); 

    const [images, setImages] = useState([]); 
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 

    const handleBack = () => {
        navigate(-1); 
    };

    const handleCancel = () => {
        navigate('/'); // Navega a la página principal
    };

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files); 
        const imageUrls = files.map(file => URL.createObjectURL(file)); 
        setImages([...images,imageUrls]); 
        setCurrentImageIndex(0); 
    };

    const nextImage = () => {
        if (images.length > 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
        }
    };

    return (
        
        <div className="Lessor">
            <h2>Bienvenido a InmoClick</h2>
            <hr className="separator" />
            <div className="content">
                <div className="left-column">
                    
                    {/* Marco para la imagen */}
                    <div className="image-frame">
                        {images.length > 0 && (
                            <img 
                                src={images[currentImageIndex]} 
                                alt={`Imagen ${currentImageIndex + 1}`} 
                            />
                        )}
                    </div>
                    {/* Flecha en círculo para avanzar a la siguiente imagen */}
                    <span 
                        className="next-image-arrow" 
                        onClick={nextImage}
                    >
                    </span>

                    {/* Botón para cargar imágenes (debajo del marco de imágenes) */}
                    <input 
                        type="file" 
                        accept="image/*" 
                        multiple 
                        onChange={handleImageChange} 
                        className="upload-button" 
                    />
                     {/* Nuevo contenedor con bordes redondeados */}
                     <div className="additional-property-container">
                        <h4 className="additional-property-title">¿Deseas agregar otro inmueble?</h4>
                        <div className="additional-property-buttons">
                            <button className="yes-button">Sí</button>
                            <button className="no-button">No</button>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="arrendador-form">
                        <h11>ARRENDADOR</h11>
                        <div className="quick-signup-line">
                            <span>Documentación</span>
                        </div>

                        {/* Campo para Documento Arrendador */}
                        <div className="upload-section">
                            <label className="upload-label" htmlFor="documento-arrendador">
                                Documento Arrendador
                            </label>
                            <input 
                                type="file" 
                                id="documento-arrendador" 
                                className="upload-input" 
                                accept=".pdf,.doc,.docx" 
                            />
                        </div>

                        {/* Campo para Certificado de Tradición y Libertad */}
                        <div className="upload-section">
                            <label className="upload-label" htmlFor="certificado-tradicion">
                                Certificado Tradición y Libertad
                            </label>
                            <input 
                                type="file" 
                                id="certificado-tradicion" 
                                className="upload-input" 
                                accept=".pdf,.doc,.docx" 
                            />
                        </div>

                        {/* Estados */}
                        <p style={{ fontSize: '10px', color: '#666', textAlign: 'left', margin: '10px 0' }}>
                            Estado
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1px' }}>
                            <div style={{ width: '45%', border: '1px solid black', backgroundColor: '#f0f0f0', padding: '-5px' }}>
                                <label>
                                    <input type="radio" name="rol" value="arrendador" required />
                                    Disponible
                                </label>
                            </div>
                            <div style={{ width: '45%', border: '1px solid black', backgroundColor: '#f0f0f0', padding: '-5px' }}>
                                <label>
                                    <input type="radio" name="rol" value="arrendatario" required />
                                    No Disponible
                                </label>
                            </div>
                        </div>

                        {/* Campo para Descripción del inmueble */}
                        <div className="description-section">
                            <label htmlFor="description" className="description-label">Descripción del inmueble</label>
                            <textarea 
                                id="description" 
                                name="description" 
                                className="description-input" 
                                maxLength="400" 
                                rows="5" 
                                placeholder="Describe el inmueble (máximo 400 caracteres)"
                            />
                            <p style={{ fontSize: '10px', color: '#666', textAlign: 'left' }}>Máximo 400 caracteres</p>
                        </div>

                        {/* Campo para Dirección o Ubicación */}
                        <div className="location-section">
                            <label htmlFor="location" className="location-label">Dirección o Ubicación del inmueble</label>
                            <input 
                                type="text" 
                                id="location" 
                                name="location" 
                                className="location-input" 
                                placeholder="Ingresa la dirección o ubicación del inmueble"
                            />
                        </div>

                        {/* Campos de Costo y Teléfono */}
                        <div className="cost-phone-section">
                            <div className="cost-section">
                                <label htmlFor="cost" className="cost-label">Costo</label>
                                <input 
                                    type="number" 
                                    id="cost" 
                                    name="cost" 
                                    className="cost-input" 
                                    placeholder="Costo en pesos"
                                />
                            </div>
                            <div className="phone-section">
                                <label htmlFor="phone" className="phone-label">Teléfono</label>
                                <input 
                                    type="number" 
                                    id="phone" 
                                    name="phone" 
                                    className="phone-input" 
                                    placeholder="Número de teléfono" 
                                    pattern="[0-9]*"
                                />
                            </div>
                        </div>

                        {/* Campos de Sector y Tipo de vivienda */}
                        <div className="sector-type-section">
                            {/* Sector */}
                            <div className="sector-section">
                                <label htmlFor="sector" className="sector-label">Sector</label>
                                <select id="sector" name="sector" className="sector-input">
                                    <option value="">Selecciona un sector</option>
                                    <option value="1">Fagua</option>
                                    <option value="2">Tiquiza</option>
                                    <option value="3">Fonqueta</option>
                                    <option value="4">Cerca de Piedra</option>
                                    <option value="5">Bojaca</option>
                                    <option value="6">La Balsa</option>
                                    <option value="7">Samaria</option>
                                    <option value="8">Yerbabuena</option>
                                    <option value="9">Fusca</option>
                                </select>
                            </div>

                            {/* Tipo de vivienda */}
                            <div className="type-section">
                                <label htmlFor="type" className="type-label">Tipo de vivienda</label>
                                <select id="type" name="type" className="type-input">
                                    <option value="">Selecciona un tipo de vivienda</option>
                                    <option value="apartamento">Apartamento</option>
                                    <option value="casa">Casa</option>
                                    <option value="duplex">Dúplex</option>
                                    <option value="loft">Loft</option>
                                    <option value="penthouse">Penthouse</option>
                                    <option value="studio">Studio</option>
                                    <option value="villa">Villa</option>
                                </select>
                            </div>
                        </div>

                        {/* Botones al final */}
                        <div style={{ marginTop: '20px' }}> {/* Ajusta el margen según sea necesario */}
                            <button type="button" onClick={handleCancel}>Cancelar</button>
                            <button type="button" onClick={handleBack} style={{ marginLeft: '10px' }}>Finalizar Registro</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lessor;
