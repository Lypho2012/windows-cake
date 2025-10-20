import { useState } from "react"

const Application = (props: any) => {
    const [x] = useState(Math.floor(Math.random()*(window.innerWidth-150)))
    const [y] = useState(Math.floor(Math.random()*(window.innerHeight-150)))
    const [clickedApplication, setClickedApplication] = useState(false)
    const handleClick = (event: any) => {
        if (event.target.className != props.applicationClass) {
            setClickedApplication(false)
        }
    }
    window.addEventListener('click',handleClick)
    return (
        <div style={clickedApplication ? {
            border:"1px solid rgba(35, 54, 255, 1)",
            backgroundColor:"rgba(3, 133, 255, 0.5)",
            width:"140px",
            height:"140px",
            position:"fixed",
            left:`${x+10}px`,
            top:`${y+10}px`} : {}}>
            <button className={props.applicationClass} style={{
                background:"none",
                border:"none",
                position:"fixed",
                left:`${x}px`,
                top:`${y}px`,
                margin:props.margin}}>
                <img className={props.applicationClass} src={props.imgSrc} 
                    style={{width:props.width,cursor:'pointer'}} 
                    onClick={()=>setClickedApplication(true)} 
                    onDoubleClick={props.triggerAnimation}/>
            </button>
        </div>
    )
}

export default Application