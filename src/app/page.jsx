"use client";

import mainstyles from "../../public/css/main.css"
import hdrstyle from "../../public/css/header.css"

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Gimnasio St. John´s | Manzanillo</h1>
          <nav className="nav-links">
            <a href="#">Inicio</a>
            <a href="#">Conócenos</a>
            <a href="#">Servicios</a>
            <a href="#">Precios</a>
            <a href="#">Contacto</a>
          </nav>
          <a href="#" className="photos-btn">Mirar Fotos</a>
        </div>
      </header>

      <div className="welcome"></div>
    </div>
  );
}
