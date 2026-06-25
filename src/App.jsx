import React from 'react';
import { mascotas } from './data/mascota.js';
import MascotaCard from './components/MascotaCard';


function App() {
  return (
    <div>
      <h1>Lista de Mascotas</h1>
      <div className="mascotas-container">
        {mascotas.map((mascota) => (
          <MascotaCard
            key={mascota.id}
            nombre={mascota.nombre}
            raza={mascota.raza}
            edad={mascota.edad}
            especie={mascota.especie}
            descripcion={mascota.descripcion}
            caracteristicas={mascota.caracteristicas}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
