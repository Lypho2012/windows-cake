import { useEffect, useState } from "react"
import axios from "axios"
import defaultBackground from "./images/default_background.jpeg";
import "./Desktop.css"
import { LinearProgress } from "@mui/material";

function Desktop() {
    // const [screenHeight,setScreenHeight] = useState(window.innerHeight)
    // const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    const [giftX] = useState(Math.floor(Math.random()*(window.innerWidth-150)))
    const [giftY] = useState(Math.floor(Math.random()*(window.innerHeight-150)))
    const [backgroundImage,setBackgroundImage] = useState(defaultBackground)

    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

    const [showLoad, setShowLoad] = useState(false)
    const [showAnimation1, setShowAnimation1] = useState(false)
    const [showAnimation2, setShowAnimation2] = useState(false)
    const [showAnimation3, setShowAnimation3] = useState(false)

    const dialog1Options = [
        "You failed to open the application.",
        "The process failed. Try again.",
        "Attempting to access using server 2."]
    const [animation1Counter, setAnimation1Counter] = useState(0)
    const handleCloseAnimation1 = async () => {
        setShowAnimation1(false)
        setShowLoad(true)
        await sleep(1000)
        setShowLoad(false)
        if (animation1Counter+1 >= dialog1Options.length) {
            setAnimation1Counter(0)
            setShowAnimation2(true)
        } else {
            setAnimation1Counter(animation1Counter+1)
            setShowAnimation1(true)
        }
    }

    const handleCloseAnimation2 = async () => {
        setShowAnimation2(false)
        setShowLoad(true)
        await sleep(1000)
        setShowLoad(false)
    }

    const WindowsAlert: React.FC<any> = ({handleClose, show, children}) => {
        return <dialog 
        open={show} 
        onClose={() => handleClose()}
        style={{
            paddingTop:"10px",
            border: "1px solid black", 
            borderRadius:"5px",
            background: "linear-gradient(to bottom, #8faacd, #d2def1ff)",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            marginTop:"auto",
            fontFamily:"'Lucida Console', monospace",
            textAlign:"left"}}>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{
                    width:"100%",
                    textAlign:"left",
                    overflowWrap: "break-word"}}>Application Message</div>
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
                    color:"white"}} onClick={() => handleClose()}>X</div>
            </div>
            <div style={{
                border:"1px solid grey",
                display:"flex",
                justifyContent: "center",
                marginTop:"10px",
                height:"200px",
                width:"350px",
                background:"white",
                padding: "10px"}}>
                {children}
            </div>
        </dialog>
    }
    
    const Animation1 = () => {
        return <WindowsAlert handleClose={handleCloseAnimation1} show={showAnimation1}>
            <div style={{
                width:"100%",
                textAlign:"left",
                overflowWrap: "break-word"}}>{dialog1Options[animation1Counter]}</div>
            <button onClick={() => handleCloseAnimation1()} 
                    style={{
                        position:"absolute",
                        height:"fit-content",
                        bottom:"20px",
                        boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
                        cursor:"pointer"}}>Ok</button>
        </WindowsAlert>
    }

    const Animation2 = () => {
        useEffect(() => {
            const timer = setInterval(async () => {
                setShowAnimation2(false);
                setShowLoad(true)
                await sleep(1000)
                setShowLoad(false)
                setShowAnimation3(true);
            }, 10000);

            return () => {
                clearInterval(timer);
            };
        }, [])
        return <WindowsAlert handleClose={handleCloseAnimation2} show={showAnimation2}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div>Please wait while the application is fetching server 2.</div>
                <div className="progress">
                    <div className="progress_inner"></div>
                    <div className="progress_right"></div>
                </div>
            </div>
        </WindowsAlert>
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
            backgroundPosition: 'center',
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            cursor: showLoad ? 'wait' : 'default'}}>
            <button style={{
                background:"none",
                border:"none",
                position:"fixed",
                left:`${giftX}px`,
                top:`${giftY}px`}}>
                <img src={require("./images/gift.png")} alt='gift box' style={{width:'150px',cursor:'pointer'}} onClick={triggerAnimation}/>
            </button>
            <Animation1/>
            <Animation2/>
        </div>
    )
}

export default Desktop