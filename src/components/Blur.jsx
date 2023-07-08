"use client";

import { useState } from "react";

export default function Blur({ children }) {
  const [isBlur, setIsBlur] = useState(true);
  return (
    <span
      onClick={() => {
        setIsBlur((cur) => !cur);
      }}
      style={{ filter: `blur(${isBlur ? "0.25rem" : "0"})` }}
    >
      {children}
    </span>
  );
}
