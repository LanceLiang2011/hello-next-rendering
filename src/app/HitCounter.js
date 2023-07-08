import React from "react";

import { readFile, writeFile } from "../helpers/helpers";

const DATABASE_PATH = "/src/data/database.json";

export default function HitCounter() {
  const num = JSON.parse(readFile(DATABASE_PATH));
  num.hits++;
  writeFile(DATABASE_PATH, JSON.stringify(num));
  return <span>{num.hits}.</span>;
}
