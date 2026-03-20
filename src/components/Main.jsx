import { useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import Die from "./Die"



export default function Main() {


  const [dice, setDice] = useState(generateAllNewDice);

  const gameWon = dice.every(die => die.isHeld && dice[0].value === die.value);

  
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
    if(gameWon){
      setDice(generateAllNewDice());
    } else {
      setDice(oldDice => oldDice.map(die =>
        !die.isHeld ?
          { ...die, value: getRandomNumber() } :
          die
      ))
    }
  }
  

  function hold(id) {
    setDice(oldDice => oldDice.map(die =>
      die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    ))
  }


  return (
    <main>
      {gameWon && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
      <div className="container">
        {
          dice.map(die =>
            <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} hold={hold} />
          )
        }
      </div>

      <button onClick={rollDice} className="roll">{gameWon ? "New Game" : "Roll"}</button>

    </main>
  )
}