import React from 'react';

export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  
}

export default function Button({onClick, disabled}: ButtonProps) {
  return <button className='flex flex-col items-center p-4 border-2 hover:scale-120 transition-transform' onClick={onClick} disabled={disabled}>PLAY</button>
}