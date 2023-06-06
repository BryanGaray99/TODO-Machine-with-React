import React from "react";

// Create React App permite importar svg´s de la siguiente manera
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";

import './TodoIcons.css'

// Hacemos un diccionario de íconos para type en vez de hacer condicionales
// Este diccionario es un objeto con diferentes propiedades, si la propiedad se llama check renderizar CheckSVG
// Le pasamos un color como arrow function para hacerle el fill a nuestro svg el color viene como prop del 
// componente padre.
const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
}

// El TodoIcons va a tener 2 props type y color color se lo envía con una arrow function
function TodoIcons({ type, color, onClickEvent }) {
    return (
        <span
            className = {`Icon-container Icon-container-${type}`}
            onClick = { onClickEvent }
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcons };