import Board from "@/components/Board";
import React from "react";

export default function Game() {
  return (
    <div>
      {/*Marcador*/}
      <div className="border-2 border-amber-600 p-2 m-2">
        <h1>Best Of ....</h1>
      </div>
      <div className="flex justify-around border-2 border-red-600 p-2 m-2">
      {/*Jugador 1*/}
        <div>
          <h2>Jugadores</h2>
          <div className="border-2 border-green-700 p-2 m-2">
            <h3>Jugador 1</h3>
          </div>
        </div>
        <div className="border-2 border-blue-700 p-2 m-2">
          <h2>Tablero</h2>
          <Board />
        </div>
      {/*Jugador 1*/}
        <div>
          <h2>Jugadores</h2>
          <div className="border-2 border-green-700 p-2 m-2">
            <h3>Jugador 2</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
