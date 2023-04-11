import React from 'react';
import './App.css';
import Equipo from './components/Equipo';

function App() {
  return (
      <div className="App">
      <h1>Equipos de Basquet</h1>
    
      <Equipo
      nombreSeleccionBasket="Argentina"
      banderaEquipo="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
      grupo="A"
      partidosJugados="6"
      partidosGanados="5"
      partidosPerdidos="1"
      puntosaFavor="455"
      puntosenContra="382"
      puntosTotales="11"
      />
        <Equipo
      nombreSeleccionBasket="Brasil"
      banderaEquipo="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
      grupo="B"
      partidosJugados="6"
      partidosGanados="5"
      partidosPerdidos="1"
      puntosaFavor="533"
      puntosenContra="411"
      puntosTotales="11"
      />

<Equipo
      nombreSeleccionBasket="Canadá"
      banderaEquipo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/800px-Flag_of_Canada.svg.png"
      grupo="D"
      partidosJugados="6"
      partidosGanados="6"
      partidosPerdidos="0"
      puntosaFavor="615"
      puntosenContra="417"
      puntosTotales="12"
      />
    
    
    <Equipo
      nombreSeleccionBasket="Mexico"
      banderaEquipo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png"
      grupo="E"
      partidosJugados="6"
      partidosGanados="4"
      partidosPerdidos="2"
      puntosaFavor="498"
      puntosenContra="498"
      puntosTotales="10"
      />

    </div>
  );
}

export default App;