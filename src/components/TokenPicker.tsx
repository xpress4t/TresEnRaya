import React from "react";
import Button from "./Button";

export default function TokenPicker() {
  const tokens: string[] =["🦁", "🦝", "🐶", "🦐","🦜","🦉","🐢","🐇"];
  return (
    <div>
      <h2>Select your token:</h2>
      <div className="flex gap-2">
        {tokens.map((token) => (
          <Button key={token} children={token} />
        ))}
      </div>
    </div>
  );
}
