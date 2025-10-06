import React from "react";

export type BoardProps = {};

const initialBoard = [
  ["X", "", ""],
  ["", "", ""],
  ["", "O", ""],
];
export default function Board({}: BoardProps) {
  return <div>
    {initialBoard.map((row, rowIndex) => (
      <div key={rowIndex} className="flex">
        {row.map((cell, cellIndex) => (
          <div key={cellIndex} className="w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold cursor-pointer hover:bg-gray-200">
            {cell}
          </div>
        ))}
      </div>
    ))}
  </div>;
}
