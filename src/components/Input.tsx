import React from "react";

export type InputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Input({ value }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={() => {}}
      className="border-2 border-gray-300 p-2 rounded"
    />
  );
}
