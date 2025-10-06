import React, { useEffect, useRef } from "react";

export type InputProps = {
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
};

export default function Input({ value, onChange, autoFocus }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      ref={inputRef}
      className="border-3 w-32 sm:w-48 xl:w-64 p-2 rounded focus:outline-none"
      placeholder="Nombre"
    />
  );
}
