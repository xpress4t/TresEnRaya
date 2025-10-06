import Button from "../components/Button";
import Input from "../components/Input";
import Board from "../components/Board";
import TokenPicker from "../components/TokenPicker";
import { useState, useEffect } from "react";
import React from "react";

export default function Home() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  return (
    <div className="flex flex-1 flex-col justify-evenly h-screen w-screen bg-gradient-to-br from-blue-500 to-lime-500 gap-8 p-2">
      <div>
        <h1 className="flex flex-col items-center p-4 text-4xl sm:text-6xl xl:text-8xl font-bold text-black">
          Tres En Raya
        </h1>
      </div>
      <div className="flex flex-col items-center gap-2 sm:gap-4 p-2 sm:p-8">
        <div className="border-3 border-emerald-400">
          <div className="flex border-3 border-black-500 gap-2 p-2 m-2 rounded">
            <label className="font-bold text-3xl ">Player 1: </label>
            <Input value={player1} onChange={setPlayer1} autoFocus={true} />
          </div>
          <div className="flex border-3 border-black-500 gap-2 p-2 m-2 rounded">
            <label className="flex items-center font-bold text-xl pb-4">
              Selecciona tu ficha:{" "}
            </label>
            <Button children="🦁" />
          </div>
        </div>
        <div className="border-3 border-emerald-400">
          <div className="flex border-3 border-black-500 gap-2 p-2 m-2 rounded">
            <label className="font-bold text-3xl ">Player 2: </label>
            <Input value={player2} onChange={setPlayer2} />
          </div>
          <div className="flex border-3 border-black-500 gap-2 p-2 m-2 rounded">
            <label className="flex items-center font-bold text-xl pb-4 ">
              Selecciona tu ficha:{" "}
            </label>
            <Button>
              
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          children="PLAY"
          onClick={() => alert("En obras, aún falta terminar la página 🦝")}
        />
      </div>
    </div>
  );
}
