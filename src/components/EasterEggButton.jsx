"use client";
import { useState } from "react";
import eastereggstyle from "../../public/css/easteregg.css";

export default function EasterEggButton() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleMouseEnter = () => {
    setShowEasterEgg(true);
  };

  const handleMouseLeave = () => {
    setShowEasterEgg(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        display: "flex", // Para que el texto esté a la derecha del botón
        alignItems: "center", // Centra el texto con respecto al botón
      }}
    >
      <button
        className="btnEsterEgg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        🐣
      </button>
      {showEasterEgg && (
        <div className="easteregg">
            by Questerz!
        </div>
      )}
    </div>
  );
}
