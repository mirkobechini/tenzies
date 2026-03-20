export default function Die(props){
    return(
        <>
            <button 
            aria-pressed={props.isHeld}
            aria-label={`This is a die with value ${props.value} and it is ${props.isHeld ? "held" : "not held"}`} 
            onClick={()=>props.hold(props.id)} className={`die ${props.isHeld ? "held" : ""}`}>{props.value}</button>
        </>
    )
}