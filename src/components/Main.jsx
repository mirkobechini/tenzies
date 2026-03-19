import { useState } from "react";
import { nanoid } from "nanoid";

import Die from "./Die"



export default function Main() {

  function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  }

  function generateAllNewDice() {
    return new Array(10).fill(null)
      .map(() => ({
        id: nanoid(),
        value: getRandomNumber(),
        isHeld: false
      }))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die =>
      !die.isHeld ?
        { ...die, value: getRandomNumber() } :
        die
    ))
  }

  function hold(id) {
    setDice(oldDice => oldDice.map(die =>
      die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    ))
  }

  const [dice, setDice] = useState(generateAllNewDice)

  return (
    <main>
      <div className="container">
        {
          dice.map(die =>
            <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} hold={hold} />
          )
        }
      </div>

      <button onClick={rollDice} className="roll">Roll</button>

    </main>
  )
}