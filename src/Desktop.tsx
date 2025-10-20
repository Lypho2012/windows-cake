import { useEffect, useState } from "react"
import axios from "axios"
import defaultBackground from "./images/default_background.jpeg";
import "./Desktop.css"
import ClickCaptcha from "./components/ClickCaptcha";
import WindowsAlert from "./components/WindowsAlert";
import Animation1 from "./components/Animation1";
import Animation2 from "./components/Animation2";
import Animation3 from "./components/Animation3";
import Alert from "./components/Alert";

function Desktop() {
    // const [screenHeight,setScreenHeight] = useState(window.innerHeight)
    // const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    const [giftX] = useState(Math.floor(Math.random()*(window.innerWidth-150)))
    const [giftY] = useState(Math.floor(Math.random()*(window.innerHeight-150)))
    const [backgroundImage,setBackgroundImage] = useState(defaultBackground)

    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

    const [clickedGiftApplication, setClickedGiftApplication] = useState(false)

    const [showLoad, setShowLoad] = useState(false)
    const [showOnce, setShowOnce] = useState(false)
    const [showAnimation1, setShowAnimation1] = useState(false)
    const [showAnimation2, setShowAnimation2] = useState(false)
    const [showAnimation3, setShowAnimation3] = useState(false)
    const [showAnimation4, setShowAnimation4] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

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
            if (!showOnce)
                setShowAnimation2(true)
            else
                setShowOnce(false)
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
        if (!showOnce)
            setShowAnimation3(true)
        else
            setShowOnce(false)
    }

    const handleCloseAnimation3 = async () => {
        setShowAnimation3(false)
        setShowLoad(true)
        await sleep(1000)
        setShowLoad(false)
        if (!showOnce)
            setShowAnimation4(true)
        else
            setShowOnce(false)
    }

    const handleCloseAnimation4 = async () => {
        await sleep(3500)
        setShowAnimation4(false)
        setShowLoad(true)
        await sleep(1000)
        setShowLoad(false)
    }

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    const Captcha = () => {
        return <div>
            
        </div>
    }

    const Animation4 = () => {
        return <WindowsAlert handleClose={handleCloseAlert} handleForceClose={()=>{setShowAlert(true) }} show={showAnimation4}> 
            <ClickCaptcha handleCloseCaptcha={handleCloseAnimation4}/>
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

    const handleClick = (event: any) => {
        if (event.target.id != "gift-box-button" && event.target.id != "gift-box-img") {
            console.log(event.target.id)
            setClickedGiftApplication(false)
        }
    }
    window.addEventListener('click',handleClick)
    return (
        <div id="desktop-div" style={{
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            cursor: showLoad ? 'wait' : 'default'}}>
            <div style={clickedGiftApplication ? {
                border:"1px solid rgba(35, 54, 255, 1)",
                backgroundColor:"rgba(3, 133, 255, 0.5)",
                width:"140px",
                height:"140px",
                position:"fixed",
                left:`${giftX+10}px`,
                top:`${giftY+10}px`} : {}}>
                <button id="gift-box-button" style={{
                    background:"none",
                    border:"none",
                    position:"fixed",
                    left:`${giftX}px`,
                    top:`${giftY}px`}}>
                    <img id="gift-box-img" src={require("./images/gift.png")} alt='gift box' style={{width:'150px',cursor:'pointer'}} onClick={()=>setClickedGiftApplication(true)} onDoubleClick={triggerAnimation}/>
                </button>
            </div>
            <Animation1 handleClose={handleCloseAnimation1} dialogOptions={dialog1Options} dialogCounter={animation1Counter} showDialog={showAnimation1}/>
            <Animation2 handleClose={handleCloseAnimation2} showAnimation={showAnimation2}/>
            <Animation3 handleClose={handleCloseAnimation3} showAnimation={showAnimation3}/>
            <Animation4/>
            {showAlert && showAnimation4 && <Alert handleCloseAlert={handleCloseAlert} showAlert={showAlert}/>}
        </div>
    )
}

export default Desktop