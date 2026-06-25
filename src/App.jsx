import React from 'react';
import { mascotas } from './data/mascota.js';
import ListaMascota from './components/ListaMascota';

function App() {
  return (
    <div>
      <h1>Lista de Mascotas</h1>
      <ListaMascota mascotas={mascotas} />
    </div>
  );
}

export default App;