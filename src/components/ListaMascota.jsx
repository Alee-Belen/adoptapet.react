import React from 'react';
import MascotaCard from './MascotaCard';

function ListaMascota({ mascotas }) {
  return (
    <div className="mascotas-container">
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id} // Usamos el id como key
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
        />
      ))}
    </div>
  );
}

export default ListaMascota;