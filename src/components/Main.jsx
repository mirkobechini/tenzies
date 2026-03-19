import { useState } from "react";

import Die from "./Die"



export default function Main() {



  function generateAllNewDice() {
    return new Array(10).fill().map(() => Math.ceil(Math.random() * 6));
  }

  const [dice, setDice] = useState(generateAllNewDice)

  return (
    <main>
      <div className="container">
        {
          dice.map(die =>
            <Die value={die}/>
          )
        }
      </div>
    </main>
  )
}