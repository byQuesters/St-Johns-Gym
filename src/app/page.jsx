"use client";

import mainstyles from "../../public/css/main.css"
import welcomestyles from "../../public/css/welcome.css"
import responsivewelcome from "../../public/css/responswelcome.css"

import modalstyles from "../../public/css/modal.css"

import React, { useState } from 'react';
import { X } from 'react-feather';
import Image from 'next/image';

import Header from "./components/header1";

export default function Home() {

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

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div>
      <Header />
      <div className="part1">
        <div>
          <img src="/photos/PersonaFit.png" className="photowelcome" alt="" />
        </div>
        <div className="titlewelcome">
          <h1>TRANSFORMA TU VIDA CON GIMNASIO</h1>
          <h1>ST. JOHNS</h1>
        </div>
        <div className="subtitlewelcome">
          <h2>Unete al Gimnasio St. John´s y forma parte de la gran comunidad Fitness, con entrenadores especializados, programas personalizados y areas enfocadas para lograr tus metas saludables.</h2>
        </div>
        <div className="btnswelcome">
          <a href="#whychosseus" className="btn1">
            Comenzar
          </a>
        </div>
      </div>

      <div className="part2">
        <div className="part2divs">
          <div className="image1">
            <img src="/photos/Espalda1copia.JPEG" alt="" />
          </div>
          <div className="text" id="whychosseus">
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

      <div className="part3" id="services">
        <div className="services" >
          <h1>Servicios</h1>
          <h2>Entrenamientos personalizados, orientación y programas integrales para satisfacer todas sus necesidades de acondicionamiento físico.</h2>
          
          <div className="grid-container">

            <div className="card">
              <img src="/photos/ApoyoEntrenam1.JPEG" alt="Entrenamiento personal" />
              <h3>Entrenamiento personal</h3>
              <p>Obtén entrenamientos personalizados y entrenamiento personalizado de nuestros entrenadores expertos para lograr tus objetivos de fitness específicos.</p>
              <button onClick={() => openModalForProject("PersonalTrainer")}>Conocer más</button>
            </div>
            <div className="card highlighted">
              <img src="https://wallpaperaccess.com/full/2465431.jpg" alt="Clases de fitness en grupo" />
              <h3>Clases de fitness en grupo</h3>
              <p>Únase a nuestras clases grupales dinámicas y motivadoras, que van desde yoga hasta entrenamiento en intervalos de alta intensidad, diseñadas para todos los niveles de condición física.</p>
              <button onClick={() => openModalForProject("Clases")}>Conocer más</button>
            </div>
            <div className="card">
              <img src="/photos/superior1.JPEG" alt="Entrenamiento en zonas especiales" />
              <h3>Entrenamiento en zonas especiales</h3>
              <p>Desarrolle sus músculos y aumente su fuerza con nuestros equipos de levantamiento de pesas de última generación y nuestras zonas escenciales para ello.</p>
              <button onClick={() => openModalForProject("Zonas")}>Conocer más</button>
            </div>
            <div className="card">
              <img src="https://wallpaperaccess.com/full/2465431.jpg" alt="Entrenamiento en zonas especiales" />
              <h3>Espacios aclimatados</h3>
              <p>Todo el gimnasio cuenta con aire acondicionado y dispersores de fragancia para mantener un ambiente fresco y agradable.</p>
              <button onClick={() => openModalForProject("Clima")}>Conocer más</button>
            </div>
            <div className="card">
              {/* <img src="/photos/bano2.jpg" alt="Baños y regaderas" /> */}
              <img src="/photos/banomujerabajo1.jpeg" alt="Baños y regaderas" />              <h3>Baños y Regaderas</h3> 
              <p>El gimnasio cuenta con baños y duchas individuales en grupos de hombres y mujeres (no mixtos), tanto en la primera planta como en la segunda.</p>              
              <button onClick={() => openModalForProject("banos")}>Conocer más</button>
            </div>
            <div className="card">
              <img src="/photos/caminadoras1.JPEG" alt="Entrenamiento en zonas especiales" />
              <h3>Entrenamientos cardiovasculares</h3>
              <p>Mejore su resistencia y salud cardiovascular con nuestra variedad de clases y equipos cardiovasculares, adaptados a todos los niveles de condición física.</p>
              <button onClick={() => openModalForProject("caminadoras")}>Conocer más</button>
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
              <div className="btnswelcome">
                <a href="/about" className="btn1">
                  Unete ahora
                </a>
              </div>            </div>
            <div className="image-content">
              <img src="yoga-meditation.jpg" alt="Meditación" className="main-image" />
            </div>
          </div>

        </div>
      </div>

      <div className="part5" id="prices">
        <div className="plans" >
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

      {modalOpen && selectedProject === "PersonalTrainer" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Alcanza tus Objetivos de Fitness con Expertos</div>
            <div className="categorie1">Entrenamiento Personalizado</div>
            <div className="descriptionprj1">
              <h4></h4>
            </div>
            <div className='descriptionprj2'>
              <p>¿Quieres resultados reales y duraderos? Nuestro servicio de Entrenamiento Personal está diseñado para ayudarte a alcanzar tus metas de fitness de manera eficiente y segura. Con el apoyo de nuestros entrenadores certificados, recibirás un plan 100% personalizado que se adapta a tus necesidades, nivel de condición física y objetivos.</p>
              <p>¿Qué incluye nuestro servicio de Entrenamiento Personal?</p>
              <ul className="modalul">
                <li>Evaluación Inicial Gratuita:
                  <p>Comenzamos con una evaluación completa de tu estado físico actual, incluyendo pruebas de resistencia, fuerza, flexibilidad y composición corporalm, analizamos tus objetivos: ya sea perder peso, ganar masa muscular, mejorar tu rendimiento deportivo o simplemente mantenerte en forma.</p>
                </li>
                <li>Planificación Personalizada:
                  <p>Diseñamos un plan de entrenamiento exclusivo para ti, que incluye ejercicios específicos, rutinas adaptadas a tu horario y recomendaciones nutricionales básicas para garantizar que siempre estés avanzando.</p>
                </li>
                <li>Seguimiento Constante:
                  <p>Nuestros entrenadores te acompañan en cada sesión, corrigiendo tu postura, técnica y motivándote a superar tus límites.</p>
                </li>
                <li>Flexibilidad de Horarios:
                  <p>Ofrecemos sesiones en horarios que se adaptan a tu rutina, ya sea por la mañana, tarde o noche!</p>                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {modalOpen && selectedProject === "Clases" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Diversión, Motivación y Resultados</div>
            <div className="categorie1">Clases de fitness en grupo</div>
            <div className="descriptionprj1">
              <h4></h4>
            </div>
            <div className='descriptionprj2'>
              <p>¿Buscas una forma divertida y efectiva de mantenerte en forma? Nuestras Clases de Fitness en Grupo son la opción perfecta para ti. Con una amplia variedad de disciplinas, desde yoga relajante hasta entrenamientos de alta intensidad, ofrecemos algo para todos, sin importar tu nivel de condición física.</p>
              <div className="photoprj1">
                  <img src="/photos/superior2.JPEG" className="photoprj1"/>
              </div>
              <p>¿Qué ofrecemos en nuestras Clases de Fitness en Grupo?</p>
              <ul className="modalul">
                <li>Variedad de Disciplinas:
                  <p>Yoga, Gap, Spinning, CrossFit, Bailoterapia...</p>
                </li>
                <li>Ambiente Motivador:
                  <p>Únete a un grupo de personas con objetivos similares y disfruta de la energía y motivación que se genera en cada clase.</p>              
                </li>
                <li>Horarios Flexibles:
                  <p>Ofrecemos clases en diferentes horarios durante el día para que puedas encontrar una opción que se ajuste a tu rutina.</p>
                </li>
                <li>Beneficios para la Salud:
                  <p>Mejora tu condición física, reduce el estrés y aumenta tu energía.</p>                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {modalOpen && selectedProject === "Clima" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Entrena en un Ambiente Fresco y Agradable</div>
            <div className="categorie1">Espacios Aclimatados</div>
            <div className="descriptionprj1">
              <h4></h4>
            </div>
            <div className='descriptionprj2'>
              <p>En nuestro gimnasio, sabemos que un ambiente cómodo es clave para que disfrutes al máximo de tu entrenamiento. Por eso, todo nuestro espacio está equipado con sistemas de aire acondicionado y dispersores de fragancia, diseñados para mantener un clima fresco, limpio y agradable en todo momento. Ya sea que estés levantando pesas, corriendo en la cinta o participando en una clase grupal, te garantizamos un entorno ideal para que te enfoques en tus objetivos.</p>
              <p>¿Qué ofrecemos en nuestros Espacios Aclimatados?
              </p>
              <ul className="modalul">
                <li>Temperatura Controlada:
                  <p>Sistemas de aire acondicionado de última generación que mantienen una temperatura óptima durante todo el año.</p>
                </li>
                <li>Ambiente Fresco y Limpio:
                  <p>Dispersores de fragancia que mantienen el aire con un aroma agradable y neutralizan olores desagradables, y Ventilación adecuada para garantizar un flujo constante de aire fresco en todas las áreas del gimnasio.</p>
                </li>
                <li>Comodidad en Cada Rincón:
                  <p>Desde la zona de cardio hasta las áreas de peso libre y las salas de clases grupales, todas las áreas están climatizadas para tu bienestar.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {modalOpen && selectedProject === "Zonas" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Enfócate en tus Músculos</div>
            <div className="categorie1">Entrenamiento en Zonas Especiales</div>
            <div className="photoprj1">
              <img src="/photos/crossfit2.jpeg" className="photoprj1"/>
            </div>
            <div className="descriptionprj1">
              <h4>Nuestras Zonas de Entrenamiento Especializadas están diseñadas para ayudarte a trabajar grupos musculares de manera eficiente y efectiva. Ya sea que busques ganar fuerza, tonificar o mejorar tu rendimiento, estas zonas cuentan con el equipo y el espacio necesario para lograrlo.</h4>
            </div>
            <div className="descriptionprj2">
              <h4></h4>
            </div>
            <div className="photoprj1">
              <img src="/photos/baile1.JPG" className="photoprj1"/>
            </div>
            <div className='descriptionprj2'>
              <p>¿Qué ofrecemos en nuestras Zonas de Entrenamiento Especializadas?</p>
              <ul className="modalul">
                <li>Equipamiento de Alta Calidad:
                  <p>Máquinas de resistencia y peso libre para trabajar todos los grupos musculares: piernas, glúteos, espalda, pecho, brazos y core. Equipos especializados para entrenamiento funcional, como kettlebells, barras, mancuernas, bandas de resistencia y más.</p>
                </li>
                <div className="photoprj1">
                  <img src="/photos/superior2.JPEG" className="photoprj1"/>
                </div>
                <li>Zonas Específicas para Cada Tipo de Entrenamiento:
                  <p>Contamos con zonas dividadidas para parte superior e inferior del cuerpo, para entrenamiendo de resistencia, spinning, caminadoras y de clases.
                  Nuestras zonas están diseñadas para ofrecer un ambiente cómodo y seguro, con equipos bien distribuidos y áreas amplias para que puedas entrenar sin limitaciones.
                  </p>
                </li>
                <div className="photoprj1"> 
                  <img src="/photos/pierna3.jpeg" className="photoprj1"/>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
      {modalOpen && selectedProject === "caminadoras" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Fortalece tu Corazón y Mejora tu Resistencia</div>
            <div className="categorie1">Entrenamientos Cardiovasculares</div>
            <div className="descriptionprj1">
              <h4></h4>
            </div>
            <div className='descriptionprj2'>
              <p>¿Quieres mejorar tu salud cardiovascular, aumentar tu resistencia y quemar calorías de manera efectiva? Nuestros Entrenamientos Cardiovasculares están diseñados para ayudarte a alcanzar estos objetivos, sin importar tu nivel de condición física. Con una amplia variedad de clases y equipos especializados, te ofrecemos las herramientas necesarias para mantener tu corazón sano y tu cuerpo en forma.</p>
              <div className="photoprj1">
                <img src="/photos/caminadoras2.JPEG" className="photoprj1"/>
              </div>
              <p>¿Qué ofrecemos en nuestros Entrenamientos Cardiovasculares?</p>
              <ul className="modalul">
                <li>Equipos de Última Generación:
                  <p>Cintas de correr, Bicicletas estáticas y elípticas, Escaladora, Trampolin, </p>
                </li>
                <div className="photoprj1">
                  <img src="/photos/caminadoras3.JPEG" className="photoprj1"/>
                </div>
                <li>Clases Cardiovasculares Dinámicas:
                  <p>Spinning, GAP, Bailoterapia.</p>
                </li>
                <div className="photoprj1">
                  <img src="/photos/spinning2.JPG" className="photoprj1"/>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
      {modalOpen && selectedProject === "banos" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Comodidad y Privacidad para tu Bienestar</div>
            <div className="categorie1">Baños y Regaderas</div>
            <div className="descriptionprj1">
              <div className="photoprj1"> 
                <img src="/photos/banomujerabajo2.jpeg" className="photoprj1"/>
              </div>
            </div>
            <div className='descriptionprj2'>
              <p>En nuestro gimnasio, entendemos que la comodidad y la higiene son aspectos fundamentales para que disfrutes de una experiencia completa. Por eso, contamos con baños y regaderas individuales diseñados para ofrecerte privacidad y confort después de tu entrenamiento. Nuestras instalaciones están disponibles tanto en la primera como en la segunda planta, separadas por grupos de hombres y mujeres (no mixtos), garantizando un ambiente seguro y respetuoso para todos.</p>
              <div className="photoprj1"> 
                <img src="/photos/banomujerabajo1.jpeg" className="photoprj1"/>
              </div>
              <p>¿Qué ofrecemos en nuestras instalaciones de Baños y Regaderas?</p>
              <ul className="modalul">
                <li>Duchas Individuales:
                  <p>Espacios privados y cómodos para que puedas refrescarte después de tu entrenamiento.</p>
                </li>
                <div className="photoprj1"> 
                  <img src="/photos/banohombreabajo1.jpeg" className="photoprj1"/>
                </div>
                <li>Baños Limpios y Modernos:
                  <p>Instalaciones impecables, limpiadas y desinfectadas regularmente para garantizar la máxima higiene y amplios espejos y áreas de preparación personal para que puedas arreglarte con tranquilidad.</p>
                </li>
                <div className="photoprj1"> 
                  <img src="/photos/banohombreabajo2.JPG" className="photoprj1"/>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
   </div>
  );
}
