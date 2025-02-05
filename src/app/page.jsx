"use client";

import mainstyles from "../../public/css/main.css"
import hdrstyle from "../../public/css/header.css"
import welcomestyles from "../../public/css/welcome.css"
import convinceestyles from "../../public/css/convince.css"
import servicesstyles from "../../public/css/services.css"
import trayectorystyles from "../../public/css/trayectory.css"
import pricesstyles from "../../public/css/prices.css"
import responsivewelcome from "../../public/css/responswelcome.css"

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
        <div className="photowelcome">
          <img src="/photos/persona.jpeg" alt="" />
        </div>
      </div>

      <div className="part2">
        <div className="part2divs">
          <div className="image1">
            <img src="https://media1.popsugar-assets.com/files/thumbor/D2nUX2g9K_pEoenE-vyfg-g0bCc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/07/28/954/n/1922398/60943ba1_shutterstock_167050907.jpg" alt="" />
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

      <div className="part3">
        <div className="services">
          <h1>Servicios</h1>
          <h2>Entrenamientos personalizados, orientación y programas integrales para satisfacer todas sus necesidades de acondicionamiento físico.</h2>
          
          <div className="grid-container">

            <div className="card">
              <img src="https://wallpaperaccess.com/full/2465431.jpg" alt="Entrenamiento personal" />
              <h3>Entrenamiento personal</h3>
              <p>Obtén entrenamientos personalizados y entrenamiento personalizado de nuestros entrenadores expertos para lograr tus objetivos de fitness específicos.</p>
              <button>Conocer más</button>
            </div>
            <div className="card highlighted">
              <img src="https://wallpaperaccess.com/full/2465431.jpg" alt="Clases de fitness en grupo" />
              <h3>Clases de fitness en grupo</h3>
              <p>Únase a nuestras clases grupales dinámicas y motivadoras, que van desde yoga hasta entrenamiento en intervalos de alta intensidad, diseñadas para todos los niveles de condición física.</p>
              <button>Conocer más</button>
            </div>
            <div className="card">
              <img src="https://wallpaperaccess.com/full/2465431.jpg" alt="Entrenamiento en zonas especiales" />
              <h3>Entrenamiento en zonas especiales</h3>
              <p>Planes de nutrición y asesoramiento de nuestros nutricionistas certificados para complementar tu rutina fitness y potenciar tus resultados.</p>
              <button>Conocer más</button>
            </div>
            <div className="card">
              <img src="https://wallpaperaccess.com/full/2465431.jpg" alt="Entrenamiento en zonas especiales" />
              <h3>Programas de bienestar</h3>
              <p>Programas de bienestar que incluyen manejo del estrés, bienestar mental y técnicas de recuperación para apoyar su salud general.</p>
              <button>Conocer más</button>
            </div>
            <div className="card">
              <img src="https://wallpaperaccess.com/full/2465431.jpg" alt="Entrenamiento en zonas especiales" />
              <h3>Entrenamiento de fuerza</h3>
              <p>Desarrolle sus músculos y aumente su fuerza con nuestros programas de entrenamiento de fuerza estructurados y equipos de levantamiento de pesas de última generación.</p>
              <button>Conocer más</button>
            </div>
            <div className="card">
              <img src="https://wallpaperaccess.com/full/2465431.jpg" alt="Entrenamiento en zonas especiales" />
              <h3>Entrenamientos cardiovasculares</h3>
              <p>Mejore su resistencia y salud cardiovascular con nuestra variedad de clases y equipos cardiovasculares, adaptados a todos los niveles de condición física.</p>
              <button>Conocer más</button>
            </div>

          </div>

        </div>
      </div>

      <div className="part4">
        <div className="trayectory">
          <h1>Trayectoria</h1>

          <div className="success-section">
            <div className="text-content">
              <h1>
                Historias de éxito inspiradoras de miembros de <span>Gimnasio St. Johns</span>
              </h1>
              <p>
                En el Gimnasio ST. John’s Manzanillo, celebramos las increíbles trayectorias de nuestros miembros.
                Desde triunfos en la pérdida de peso y logros en el aumento de masa muscular hasta un mayor bienestar
                y una nueva confianza, las historias de éxito de nuestros miembros resaltan el poder del compromiso y
                la comunidad. Explore estos testimonios inspiradores y vea cómo Gimnasio St. John’s puede ayudarlo a
                alcanzar sus objetivos de acondicionamiento físico.
              </p>
              <button className="btn1">Únete ahora</button>
            </div>
            <div className="image-content">
              <img src="yoga-meditation.jpg" alt="Meditación" className="main-image" />
            </div>
          </div>

        </div>
      </div>

      <div className="part5">
        <div className="plans">
          <h1>Consulta nuestros planes fitness </h1>
          <h2>Opciones de membresía flexibles que se adaptan a sus objetivos y estilo de vida. ¡Encuentre la opción adecuada y comience a transformar su vida hoy mismo!</h2>

          <div className="pricing-section">
            <div className="pricing-cards">
              <div className="pricing-card featured">
                <h3>MENSUAL</h3>
                <p className="price">$700 MXN</p>
                <ul>
                  <li>✔ Acceso ilimitado a los equipos del gimnasio</li>
                  <li>✔ Acceso a clases grupales de fitness</li>
                  <li>✔ Sesión de entrenamiento personal por mes</li>
                  <li>✔ Orientación nutricional y planes de alimentación</li>
                  <li>✔ Acceso a programas de bienestar</li>
                </ul>
                <button>Obtener ahora</button>
              </div>
              <div className="pricing-card">
                <h3>VISITA</h3>
                <p className="price">$100 MXN</p>
                <ul>
                  <li>✔ Acceso a los equipos del gimnasio por 1 dia</li>
                  <li>✔ Acceso a clases grupales de fitness</li>
                  <li>✔ Acceso a programas de bienestar</li>
                </ul>
                <button className="btnoa">Obtener ahora</button>
              </div>
              <div className="pricing-card">
                <h3>ANUALIDAD</h3>
                <p className="price">$1234MXN</p>
                <ul>
                  <li>✔ Acceso ilimitado a los equipos del gimnasio</li>
                  <li>✔ Acceso a clases grupales de fitness</li>
                  <li>✔ Sesión de entrenamiento personal por mes</li>
                  <li>✔ Orientación nutricional y planes de alimentación</li>
                  <li>✔ Acceso a programas de bienestar</li>
                </ul>
                <button>Obtener ahora</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <span>🏋️ Gimnasio St. John’s | Manzanillo</span>
          </div>
          <div className="footer-links">
            <a href="#conocenos">Conócenos</a>
            <a href="#servicios">Servicios</a>
            <a href="#precios">Precios</a>
            <a href="#contacto">Contáctanos</a>
          </div>
          <div className="footer-social">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-whatsapp"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Gimnasio Manzanillo St. John’s. Todos los derechos reservados.</p>
            <div className="footer-privacy">
              <a href="#privacidad">Política de Privacidad</a>
              <a href="#terminos">Condiciones de Servicio</a>
              <a href="#cookies">Configuración de cookies</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
