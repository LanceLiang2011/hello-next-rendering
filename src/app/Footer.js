import React from "react";

export default function Footer() {
  const timestamp = new Date().toLocaleString();
  return <footer>Page rendered on {timestamp}</footer>;
}
