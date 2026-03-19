import Die from "./Die"


function generateAllNewDice() {
  return new Array(10).fill().map(() => Math.ceil(Math.random() * 6));
}


export default function Main() {
  return (
    <main>
      <div className="container">
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
      </div>
    </main>
  )
}