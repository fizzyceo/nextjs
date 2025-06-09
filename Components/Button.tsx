"use client";
import { useState } from "react";

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      Please dont click
    </button>
  );
};

export default Button;
