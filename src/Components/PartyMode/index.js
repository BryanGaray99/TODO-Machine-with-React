import React, { useState, useEffect } from "react";
import './PartyMode.css';
import { GiPartyPopper } from "react-icons/gi";
import { FaBook } from "react-icons/fa";


function PartyMode() {
  const [modoFiesta, setModoFiesta] = useState(false);

  useEffect(() => {
    const bodyElement = document.body;
    if (bodyElement) {
      if (modoFiesta) {
        bodyElement.classList.add("modo-fiesta");
      } else {
        bodyElement.classList.remove("modo-fiesta");
      }
    }
  }, [modoFiesta]);

  const cambiarModo = () => {
    setModoFiesta(!modoFiesta);
  };

  return (
    <>
        <div className="modo-button-container"> {/* Nuevo contenedor del botón */}
            <button onClick={cambiarModo} className={`modo-button ${modoFiesta ? 'modo-fiesta' : ''}`}>
                <span className="modo-text">{modoFiesta ? "Modo Serio" : "Modo Fiesta"}</span>
                <span className="modo-icon">{modoFiesta ? <FaBook /> : <GiPartyPopper />}</span>
            </button>
        </div>
    </>
  );
}

export { PartyMode };
