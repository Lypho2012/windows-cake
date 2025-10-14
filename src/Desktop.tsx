import { useEffect, useState } from "react"
import axios from "axios"
import defaultBackground from "./images/default_background.jpeg";
import "./Desktop.css"

function Desktop() {
    // const [screenHeight,setScreenHeight] = useState(window.innerHeight)
    // const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    const [giftX] = useState(Math.floor(Math.random()*(window.innerWidth-150)))
    const [giftY] = useState(Math.floor(Math.random()*(window.innerHeight-150)))
    const [backgroundImage,setBackgroundImage] = useState(defaultBackground)

    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

    const [showAnimation1, setShowAnimation1] = useState(false)
    const [showAnimation2, setShowAnimation2] = useState(false)

    const dialog1Options = [
        "You failed to open the application.",
        "The process failed. Try again.",
        "Attempting to access using server 2."]
    const [animation1Counter, setAnimation1Counter] = useState(0)
    const handleCloseAnimation1 = async () => {
        setShowAnimation1(false)
        await sleep(1000)
        if (animation1Counter+1 >= dialog1Options.length) {
            setAnimation1Counter(0)
            setShowAnimation2(true)
        } else {
            setAnimation1Counter(animation1Counter+1)
            setShowAnimation1(true)
        }
    }
    const Animation1 = () => {
        return <dialog 
        open={showAnimation1} 
        onClose={() => handleCloseAnimation1()}
        style={{
            paddingTop:"10px",
            border: "1px solid black", 
            borderRadius:"5px",
            background: "linear-gradient(to bottom, #8faacd, #d2def1ff)",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)"}}>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{
                    width:"100%",
                    textAlign:"left",
                    fontFamily:"'Lucida Console', monospace",
                    overflowWrap: "break-word"}}>Application Error</div>
                <div style={{
                    position:"absolute",
                    right:"20px",
                    margin:"none",
                    paddingLeft:"10px",
                    paddingRight:"10px",
                    fontStretch:"expanded",
                    userSelect: "none",
                    cursor:"pointer",
                    border:"1px solid grey",
                    borderRadius:"3px",
                    background:"linear-gradient(to bottom, #ffdedeff, #ab5151ff)",
                    color:"white"}} onClick={() => handleCloseAnimation1()}>X</div>
            </div>
            <div style={{border:"1px solid grey",display:"flex",justifyContent: "center",marginTop:"10px",height:"200px",width:"350px",background:"white"}}>
                <div style={{
                    width:"100%",
                    paddingLeft:"10px",
                    paddingTop:"10px",
                    textAlign:"left",
                    fontFamily:"'Lucida Console', monospace",
                    overflowWrap: "break-word"}}>{dialog1Options[animation1Counter]}</div>
                <button onClick={() => handleCloseAnimation1()} style={{position:"absolute",height:"fit-content",bottom:"20px",boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",cursor:"pointer"}}>Ok</button>
            </div>
        </dialog>
    }

    // Uncomment below section if purchased PixelLab tokens
    // useEffect(() => {
    //     try {
    //         axios.post(`http://localhost:8000/create-background-image?screen_width=${screenWidth}&screen_height=${screenHeight}`)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },[])
    const triggerAnimation = () => {
        setShowAnimation1(true)
    }
    return (
        <div id="desktop-div" style={{
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'}}>
            <button style={{
                background:"none",
                border:"none",
                position:"fixed",
                left:`${giftX}px`,
                top:`${giftY}px`}}>
                <img src={require("./images/gift.png")} alt='gift box' style={{width:'150px',cursor:'pointer'}} onClick={triggerAnimation}/>
            </button>
            <Animation1/>
        </div>
    )
}

export default Desktop