import React from 'react';
import './ButtonGroup.css'; // Importar el archivo de estilos
import homePageImage from "../assets/imag/OIG4.jpg"
import image1 from "../assets/imag/slide_1.png";

function ButtonGroup() {
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
                                        <li><a href="/buscar-hogar">Arrendar</a></li>
                                         
                                        <li class="cta"><a href="/login">INICIAR SESIÓN</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <aside id="fh5co-hero" clsas="js-fullheight">
                <div class="flexslider js-fullheight">
                    <ul class="slides">
                    <li style={{backgroundImage: `url(${homePageImage})`}}>
                        <div class="container">
                            <div class="col-md-12 text-center js-fullheight fh5co-property-brief slider-text">
                                <div class="fh5co-property-brief-inner">
                                    <div class="fh5co-box">
                                        <div class="price-status">
                                        <span class="price">Tu aliado para gestionar tus propiedades en Chía de forma sencilla y eficiente<a href="#" class="tag"></a></span>
                                    </div>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    </ul>
                </div>
            </aside>

            <div id="best-deal">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box" data-animate-effect="fadeIn">
					<h2 className='text-black text-center'>¿Qué es InmoClick?</h2>
					<p>InmoClick es la plataforma digital diseñada para facilitar la gestion de tus propiedades en el Municipio de Chia. </p>
					<h2 className='text-black text-center'>¿Quieres alquilar tu apartamento o casa?</h2>
					<p>Con InmoClick, podras crear anuncios detallados, subir fotos de alta calidad y recibir solicitudes de arrendamiento de manera rapida y segura</p>
				</div>
				<div class="col-md-4 item-block animate-box" data-animate-effect="fadeIn">


					<div class="fh5co-property">
						<figure>
							<h2 className='text-black text-center p-2'>Misión</h2>
						</figure>
						<div class="fh5co-property-innter">
							<h3><a href="#">Conectar a propietarios e inquilinos en Chia de manera rapida y segura, simplificando el proceso de alquiler de propiedades</a></h3>
							<div class="price-status">
		                 	<span class="price"></span>
		               </div>
		              </div>
	            	<p class="fh5co-property-specification">
	            	</p>
					</div>

					
				</div>

				<div class="col-md-4 item-block animate-box" data-animate-effect="fadeIn">

					<div class="fh5co-property">
						<figure>
							<h2 className='text-black text-center p-2'>Visión</h2>
						</figure>
						<div class="fh5co-property-innter">
							<h3><a href="#">Ser la plataforma de referencia para la gestion inmobiliaria en Chia, ofreciendo una experiencia digital intuitiva y confiable</a></h3>
							<div class="price-status">
		                 	<span class="price"><span class="per"></span> </span>
		               </div>
		            </div>
	            	<p class="fh5co-property-specification">
	            	</p>
					</div>
					
				</div>
				<div class="col-md-4 item-block animate-box" data-animate-effect="fadeIn">

					<div class="fh5co-property">
						<figure>
							<img src={image1} alt="" class="img-responsive"/>
							<a href="#" class="tag"></a>
						</figure>
						<div class="fh5co-property-innter">
							<h3><a href="#"></a></h3>
							<div class="price-status">
		                 	<span class="price"></span>
		               </div>
		            </div>
	            	<p class="fh5co-property-specification">
	            	</p>
					</div>
				</div>


			</div>
		</div>
	</div>


        
        </>
    );
}

export default ButtonGroup;
