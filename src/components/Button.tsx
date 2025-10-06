import React from 'react';

export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children?: string;
}

export default function Button({onClick, disabled, children}: ButtonProps) {
  return <button className='flex flex-col items-center p-4 border-2 hover:bg-blue-400 hover:scale-110 transition-transform cursor-pointer rounded' onClick={onClick} disabled={disabled}>{children}</button>
}