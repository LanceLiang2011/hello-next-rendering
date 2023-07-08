import React from "react";

import HitCounter from "./HitCounter";
import Blur from "../components/Blur";

function Home() {
  return (
    <main>
      <h1>Welcome</h1>
      You are visitor number{" "}
      <Blur>
        <HitCounter />
      </Blur>
    </main>
  );
}

export default Home;
