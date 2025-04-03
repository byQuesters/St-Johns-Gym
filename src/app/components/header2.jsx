import styles from "../../../public/css/header.css";
import modalstyles from "../../../public/css/modal.css"
import { X } from 'react-feather';
import React, { useState } from 'react';

function Header() {
    
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
        <header className="header">
            <div className="header-content">
            <h1 className="header-title">Gimnasio St. John´s | MZO</h1>
            <nav className="nav-links">
                <a href="/">Inicio</a>
                <a href="/#whychosseus">Eligenos</a>
                <a href="/#services">Servicios</a>
                <a href="/#prices">Precios</a>
                <a href="#ubi">Ubicacion</a>
            </nav>
            <button onClick={() => openModalForProject("choose")} className="photos-btn">Mirar Fotos</button>
            </div>
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
            
        </header>
    );
}
export default Header;