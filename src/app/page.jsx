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

      <div className="part1">
        <div className="titlewelcome">
          <h1>TRANSFORMA TU VIDA CON GIMNASIO</h1>
          <h1>ST. JOHNS</h1>
        </div>
        <div className="subtitlewelcome">
          <h2>Unete al Gimnasio St. John´s y forma parte de la gran comunidad Fitness, con entrenadores especializados, programas personalizados y areas enfocadas para lograr tus metas saludables.</h2>
        </div>
        <div className="btnswelcome">
          <a href="#" className="btn1">
            Comenzar
          </a>
        </div>
      </div>

      <div className="part2">

      </div>
    </div>
  );
}
