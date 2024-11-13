import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Lessor.css'; 
import axiosClient from '../config/axios';


function Lessor() {
    const navigate = useNavigate(); 
    const [message, setMessage] = useState("");
    const [dataform, setdataform]=useState({
        propertyAddress:"",
        squareMetersProperty:"",
        cost:"",
        propertyDescription:"",
        latitude:"",
        altitude:"",
        state:"",
        typesProperties:"",
        sectors:"",
        
    })

    const handleChange = (event) => {
        setdataform({...dataform, [event.target.name] : event.target.value});
        console.log(dataform);
        
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

            try {
            
                const respuesta = await axiosClient.post("/Property", dataform);
                console.log(respuesta);

                setMessage("¡Inmueble Publicado!");

                setTimeout(() => {
                    navigate("/buscar-hogar");
                }, 2000);
                
            } catch (error) {
                console.log(error);
                setMessage("Asegurate que los campos están bien")
            }


            // // Redirige según el rol seleccionado
            // if (dataform.usertypeid === '1') {
            //     navigate('/lessor'); // Redirige a la página de arrendador
            // } else if (dataform.usertypeid === '4') {
            //     navigate('/arrendatarios'); // Redirige a la página de arrendatario
            // }
       
    };


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
        <>
             <div id="fh5co-page">
                <header id="fh5co-header" role="banner">
                    <div class="container">
                        <div class="row">
                            <div class="header-inner">
                                <h1><a href="/">Inmo<span>Click</span></a></h1>
                                <nav role="navigation" className='m-0'>
                                    <ul>
                                        <li><a href="/lessor" >Comprar</a></li>
                                        <li><a href="/arrendatarios">Arrendar</a></li>
                                         
                                        <li class="cta"><a href="/login">INICIAR SESIÓN</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className="Lessor lessor-img">
            
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
                            <h2 className='title-lessor'>ARRENDADOR</h2>
                           <form onSubmit={handleSubmit}>
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
                                <p style={{ fontSize: '14px', color: '#666', textAlign: 'left', margin: '10px 0' }}>
                                    Estado
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1px' }}>
                                    <div style={{ width: '45%', border: '1px solid black', backgroundColor: '#f0f0f0', padding: '-5px' }}>
                                        <label>
                                            <input type="radio" name="stateid" value="1" onChange={handleChange} required />
                                            Disponible
                                        </label>
                                    </div>
                                    <div style={{ width: '45%', border: '1px solid black', backgroundColor: '#f0f0f0', padding: '-5px' }}>
                                        <label>
                                            <input type="radio" name="stateid" value="2"onChange={handleChange} required />
                                            Indisponible
                                        </label>
                                    </div>
                                </div>

                                {/* Campo para Descripción del inmueble */}
                                <div className="description-section">
                                    <label htmlFor="description" className="description-label">Descripción del inmueble</label>
                                    <textarea 
                                        id="description" 
                                        name="propertyDescription" 
                                        className="description-input" 
                                        maxLength="400" 
                                        rows="5" 
                                        placeholder="Describe el inmueble (máximo 400 caracteres)"
                                        type="text" 
                                        value={dataform.propertyDescription} onChange={handleChange} required />
                                    <p style={{ fontSize: '10px', color: '#666', textAlign: 'left' }}>Máximo 400 caracteres</p>
                                </div>

                                {/* Campo para Dirección o Ubicación */}
                                <div className="location-section">
                                    <label htmlFor="location" className="location-label">Dirección o Ubicación del inmueble</label>
                                    <input 
                                        type="text" 
                                        id="location" 
                                        name="propertyAddress" 
                                        className="location-input" 
                                        placeholder="Ingresa la dirección o ubicación del inmueble"
                                        value={dataform.propertyAddress} onChange={handleChange} required

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
                                            value={dataform.cost} onChange={handleChange} required

                                        />
                                    </div>
                                    <div className="squareMetersProperty-section">
                                        <label htmlFor="squareMetersProperty" className="squareMetersProperty-label">Metros</label>
                                        <input 
                                            type="number" 
                                            id="squareMetersProperty" 
                                            name="squareMetersProperty" 
                                            className="squareMetersProperty-input" 
                                            placeholder="Metros Cuadrados" 
                                            value={dataform.squareMetersProperty} onChange={handleChange} required

                                        />
                                    </div>
                                </div>
                                <div className="altitude-section">
                                    <div className="altitude-section">
                                        <label htmlFor="altitude" className="altitude-label">Altitud</label>
                                        <input 
                                            type="number" 
                                            id="altitude" 
                                            name="altitude" 
                                            className="altitude-input" 
                                            placeholder="Altitud"
                                            value={dataform.altitude} onChange={handleChange} required

                                        />
                                    </div>
                                    <div className="latitude-section">
                                        <label htmlFor="Latitude" className="Latitude-label">Latitud</label>
                                        <input 
                                            type="number" 
                                            id="Latitude" 
                                            name="Latitude" 
                                            className="Latitude-input" 
                                            placeholder="Latitud" 
                                            value={dataform.Latitude} onChange={handleChange} required

                                        />
                                    </div>
                                </div>
                                {/* Campos de Sector y Tipo de vivienda */}
                                <div className="sector-type-section">
                                    {/* Sector */}
                                    <div className="sector-section">     
                                    <label htmlFor="sectors">Sector </label>
                                
                                       <select required onChange={handleChange} name='sectors' value={dataform.sectors}>
                                    {!dataform.typedocument && (
                                        <option disabled value="">Selecciona un sector</option>
                                    )}

                                     
                                            <option value="">Selecciona un sector</option>
                                            <option value="2">Fagua</option>
                                            <option value="3">Tiquiza</option>
                                            <option value="4">Fonqueta</option>
                                            <option value="5">Cerca de Piedra</option>
                                            <option value="6">Bojaca</option>
                                            <option value="7">La Balsa</option>
                                            <option value="8">Samaria</option>
                                            <option value="9">Yerbabuena</option>
                                            <option value="10">Fusca</option>
                                        </select>
                                    </div>

                                    {/* Tipo de vivienda */}
                                    <div className="type-section">
                                    <label htmlFor="tipovivienda">Tipo de Vivienda </label>
                                
                                             <select required onChange={handleChange} name='typesProperties' value={dataform.typesProperties}>
                                                {!dataform.typedocument && (
                                                  <option disabled value="">Selecciona un sector</option>
                                             )}
                                            <option value="">Selecciona un tipo de vivienda</option>
                                            <option value="1">Apartamento en Conjunto</option>
                                            <option value="2">Apartamento en Barrio</option>
                                            <option value="3">Apartamento Duplex</option>
                                            <option value="4">Casa Independiente</option>
                                            <option value="5">Casa en Conjunto</option>
                                            <option value="6">Penthouse</option>
                                            <option value="7">Villa</option>
                                            <option value="8">Studio</option>
                                            <option value="9">Apartaestudio</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Botones al final */}
                                <div style={{ marginTop: '20px' }} className='d-flex gap-2'> {/* Ajusta el margen según sea necesario */}
                                    <button type="button" onClick={handleCancel}>Cancelar</button>
                                    <input type="submit" value="Finalizar Registro" /> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lessor;
