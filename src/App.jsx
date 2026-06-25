import React, { useState } from 'react';
import { mascotas } from './data/mascota.js';
import ListaMascota from './components/ListaMascota';
import FiltroEspecie from './components/FiltroEspecie';

function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('todas'); // Estado para el filtro de especie
  const [filtroNombre, setFiltroNombre] = useState(''); // Estado para el filtro de nombre

  // Filtrar el array de mascotas
  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      filtroEspecie === 'todas' || mascota.especie.toLowerCase() === filtroEspecie;
    const coincideNombre = mascota.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
    return coincideEspecie && coincideNombre;
  });

  return (
    <div>
      <h1>Lista de Mascotas</h1>
      {/* Componente de filtros :) */}
      <FiltroEspecie
        filtroEspecie={filtroEspecie}
        setFiltroEspecie={setFiltroEspecie}
        filtroNombre={filtroNombre}
        setFiltroNombre={setFiltroNombre}
      />
      {/* Mensaje cuando no coincide */}
      {mascotasFiltradas.length > 0 ? (
        <ListaMascota mascotas={mascotasFiltradas} />
      ) : (
        <p>No hay mascotas que coincidan</p>
      )}
    </div>
  );
}

export default App;