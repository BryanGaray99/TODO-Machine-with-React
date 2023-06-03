import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Creamos una cosntante root en la cual por medio de ReactDom creamos un nuevo root
// y ese root se aplica sobre el elemento con id 'root' del archivo index.html que se 
// encuentra en la carpeta public
const root = ReactDOM.createRoot(document.getElementById('root'));

// Hacemos el método .render sobre esa const root y adentro del método le pasamos la APP a renderizar. 
// esa App se encuentra en otro archivo importado que es el App.js 
root.render(<App />);
