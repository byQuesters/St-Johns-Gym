"use client";

import aboutstyles from "../../../public/css/about.css"
import aboutresponstyles from "../../../public/css/responsabout.css"

import Header from "../components/header2";
import modalstyles from "../../../public/css/modal.css"
import { X } from 'react-feather';
import React, { useState } from 'react';

export default function About() {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const openModalForProject = (projectId) => {
        setSelectedProject(projectId);
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setModalOpen(false);
    };

  return (
    
    <div>
        <Header />
        <header className="hero">
            <div className="hero-content">
                <h1>Descubra las cualidades únicas que distinguen a Gimnasio St. John’s</h1>
                <p>Descubra cómo nuestro compromiso con la excelencia, nuestros programas innovadores y nuestra comunidad apasionada hacen de el Gimnasio St. John´s el destino definitivo para su viaje de fitness.</p>
            </div>
        </header>

        <main>
            <section className="part2" id="about">
            <div className="about-content">
                <h2>Acerca de Gimnasio St. John’s</h2>
                <p>En Gimnasio St. John’s, creemos que el fitness es más que una rutina: es una forma de vida. Fundado con la misión de inspirar y empoderar a las personas en sus recorridos de fitness, ofrecemos una amplia gama de servicios diseñados para satisfacer las necesidades únicas de cada miembro. Nuestras instalaciones de última generación, entrenadores expertos y una comunidad vibrante crean un entorno en el que todos pueden prosperar.</p>
                <h3>Nuestra misión</h3>
                <p>Nuestra misión es brindar soluciones de acondicionamiento físico de primer nivel que ayuden a nuestros miembros a lograr sus objetivos personales de salud y bienestar. Nos dedicamos a fomentar un ambiente motivador y de apoyo, donde cada individuo se sienta valorado e inspirado para superar sus límites.</p>
            </div>
            <div className="about-image">
                <img src="/photos/Espalda1.JPEG" alt="Persona levantando pesas"/>
            </div>
            </section>

            <section className="part4" id="ubi">
                <div className="location">
                    <h1>Visita Gimnasio St. John’s</h1>
                    <p>Ubicados convenientemente para satisfacer sus necesidades de acondicionamiento físico. ¡Encuéntrenos y comience su viaje hoy mismo!</p>
                </div>
            </section>

            <div className="container">
                <div className="info-card">
                    <h2 className="title">DIRECCIÓN</h2>
                    <p className="subtitle">Gimnasio St. John’s | Manzanillo</p>
                    <p className="address">
                    Av. Paseo de Las Gaviotas s/n, Valle de las Garzas Barrio 5, <br />
                    28219 Manzanillo, Col.
                    </p>
                    <p className="phone">+52 314 3347 454</p>
                    <a
                    href="https://maps.app.goo.gl/SEYxYoZsgfNXBJbv5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                    >
                    Ver mapa
                    </a>
                </div>
                <div className="map">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.050212947993!2d-104.32058992549923!3d19.105452982105174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8424d6711fb0c985%3A0xcbb57bc1496bebbe!2sGimnasio%20St.%20John%C2%B4s!5e0!3m2!1ses!2smx!4v1737868974631!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    ></iframe>
                </div>
            </div>
        </main>
        <footer>
            <div className="footer-container">
            <div className="footer-logo">
                <span>Gimnasio St. John’s | Manzanillo</span>
            </div>
            <div className="footer-links">
                <a onClick={() => openModalForProject("choose")}>Imagenes</a>
                <a href="/#services">Servicios</a>
                <a href="/#prices">Precios</a>
                <a href="#contacto">Contáctanos</a>
                
                {modalOpen && selectedProject === "choose" && (
                <div className='modalprj1' onClick={closeModal}>
                    <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>
        
                    <button className="close-modal" onClick={closeModal}>
                        <X size={24} />
                    </button>
        
                    <div className="nameprj1">FOTOGRAFIAS</div>
                    <div className="categorie1">Primer Piso</div>
                    <div className="photoprj1">
                        <img src="/photos/superior1.JPEG" className="photoprj1"/>
                        <img src="/photos/superior2.JPEG" className="photoprj1"/>
                        <img src="/photos/pierna3.jpeg" className="photoprj1"/>
                        <img src="/photos/pierna1.JPG" className="photoprj1"/>
                        <img src="/photos/crossfit1.jpeg" className="photoprj1"/>
                        <img src="/photos/banohombreabajo1.jpeg" className="photoprj1"/>
                        <img src="/photos/banohombreabajo2.JPG" className="photoprj1"/>
                        <img src="/photos/banomujerabajo1.jpeg" className="photoprj1"/>
                        <img src="/photos/banomujerabajo2.jpeg" className="photoprj1"/>
                    </div>
                    <div className="categorie1">Segundo Piso</div>
                    <div className="photoprj1">
                        <img src="/photos/caminadoras1.JPEG" className="photoprj1"/>
                        <img src="/photos/caminadoras3.JPEG" className="photoprj1"/>
                        <img src="/photos/spinning2.JPG" className="photoprj1"/>
                        <img src="/photos/spinning1.JPG" className="photoprj1"/>
                        <img src="/photos/baile1.JPG" className="photoprj1"/>
                        <img src="/photos/banohombrearriba2.jpeg" className="photoprj1"/>
                        <img src="/photos/banomujerarriba1.jpeg" className="photoprj1"/>
                    </div>
                    </div>
                </div>
                )}
            </div>
            <div className="footer-bottom">
                <p>© 2025 Gimnasio Manzanillo St. John’s. Todos los derechos reservados.</p>
            </div>
            </div>
        </footer>
    </div>
    );
}
