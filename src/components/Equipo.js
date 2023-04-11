import React from 'react';


const Equipo = ({ nombreSeleccionBasket, banderaEquipo, grupo, partidosJugados, partidosGanados, partidosPerdidos, puntosaFavor, puntosenContra, puntosTotales }) => {
  return (
    <div>

      <h1>{nombreSeleccionBasket}</h1>
      <p><img class="bandera" src={banderaEquipo}></img></p>
      <p>Grupo:  {grupo}</p>
      <p>Partidos Jugados: {partidosJugados}</p>
      <p>Partidos Ganados: {partidosGanados}</p>
      <p>Partidos Perdidos {partidosPerdidos}</p>
      <p>Puntos a favor: {puntosaFavor}</p>
      <p>Puntos en contra : {puntosenContra}</p>
      <p>Puntos totales : {puntosTotales}</p>
    </div>
  );
};



export default Equipo;