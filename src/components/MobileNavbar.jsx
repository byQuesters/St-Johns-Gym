"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mobile-navbar">
      <div className="mobile-nav-container">
        <Link href="/" className="mobile-nav-logo">
          St. John's
        </Link>
        <div className={isOpen ? "mobile-hamburger active" : "mobile-hamburger"} onClick={() => setIsOpen(!isOpen)}>
          <span className="mobile-bar"></span>
          <span className="mobile-bar"></span>
          <span className="mobile-bar"></span>
        </div>
      </div>
      <div className={isOpen ? "mobile-nav-menu active" : "mobile-nav-menu"}>
        <Link href="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
          Inicio
        </Link>
        <Link href="/#services" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
          Servicios
        </Link>
        <Link href="/#horarios" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
          Clases
        </Link>
        <Link href="/#prices" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
          Precios
        </Link>
        <Link href="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
          Contacto
        </Link>
      </div>
    </nav>
  );
}
