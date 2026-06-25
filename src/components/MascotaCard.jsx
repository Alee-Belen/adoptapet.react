import React from 'react';
import './MascotaCard.css';

function MascotaCard({ nombre, raza, edad, especie, descripcion, caracteristicas }) {
  return (
    <div className={`mascota-card ${especie.toLowerCase()}`}>
      <h2>{nombre}</h2>
      <p><strong>Raza:</strong> {raza}</p>
      <p><strong>Edad:</strong> {edad} años</p>
      <p><strong>Especie:</strong> {especie}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Características:</strong> {caracteristicas.join(', ')}</p>
    </div>
  );
}

export default MascotaCard;