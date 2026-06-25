import React from 'react';

function FiltroEspecie({ filtroEspecie, setFiltroEspecie, filtroNombre, setFiltroNombre }) {
  return (
    <div className="filtros">
      <select
        value={filtroEspecie}
        onChange={(e) => setFiltroEspecie(e.target.value)}
      >
        <option value="todas">Todas</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="otro">Otro</option>
      </select>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={filtroNombre}
        onChange={(e) => setFiltroNombre(e.target.value)}
      />
    </div>
  );
}

export default FiltroEspecie;