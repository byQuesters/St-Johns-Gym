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
        <div className="part2divs">
          <div className="image1">
            <img src="https://th.bing.com/th/id/R.11ec291058ea3cc8b5df03c779224ce8?rik=WHf%2fyCJ7533e9Q&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f9%2f7%2f9%2f200446.jpg&ehk=fydI%2b4RjHcPqBMTBiwXDvXTv6BshXM75z%2f4ERjYFJNc%3d&risl=&pid=ImgRaw&r=0" alt="" />
          </div>
          <div className="text">
            <h2>¿Por qué escoger el Gimnasio ST. John´s?</h2>
            <h3>Descubra los beneficios que nos distinguen e impulse su viaje de acondicionamiento físico hacia adelante.</h3>
            <ul className="custom-list">
              <li>
                <div>
                  <p className="custom-list-title">Orientadores de Entrenamiento</p>
                  <p className="custom-list-text">Nuestros entrenadores certificados brindan orientación personalizada y asistencia para lograr tus metas.</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="custom-list-title">Equipos de Alta Calidad</p>
                  <p className="custom-list-text">Entrena con los equipos de fitness más modernos y avanzados para maximizar tus resultados y mejorar tu experiencia.</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="custom-list-title">Programas Integrales</p>
                  <p className="custom-list-text">Disfrute de una variedad de clases y programas adaptados a todos los niveles de condición física, desde principiante hasta avanzado.</p>
                </div>
              </li>
            </ul>
          </div>
        </div> 
      </div>

    </div>
  );
}
