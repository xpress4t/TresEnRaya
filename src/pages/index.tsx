import Button from "../components/Button";
import Input from "../components/Input";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-1 border-4 flex-col justify-evenly border-green-600 h-screen w-screen">
      <div>
        <h1 className="flex flex-col items-center p-8 bg-lime-300 ">
          Tres En Raya
        </h1>
      </div>
      <div>
        <Input value="" onChange={() => {}} />
      </div>
      <div className="flex justify-center items-center">
        <Button onClick={() => {}} />
      </div>
    </div>
  );
}
