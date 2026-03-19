export default function Die(props){
    return(
        <>
            <button onClick={()=>props.hold(props.id)} className={`die ${props.isHeld ? "held" : ""}`}>{props.value}</button>
        </>
    )
}