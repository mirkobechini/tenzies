import { useState } from "react";
import {nanoid} from "nanoid";

import Die from "./Die"



export default function Main() {



  function generateAllNewDice() {
    return new Array(10).fill(null)
    .map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }))
  }

  function rollDice() {
    setDice(generateAllNewDice)
  }

  const [dice, setDice] = useState(generateAllNewDice)

  return (
    <main>
      <div className="container">
        {
          dice.map(die =>
            <Die key={die.id} value={die.value} isHeld={die.isHeld}/>
          )
        }
      </div>

      <button onClick={rollDice} className="roll">Roll</button>

    </main>
  )
}