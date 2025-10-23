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
import Application from "./components/Application";
import Animation5 from "./components/Animation5";

function Desktop() {
    // const [screenHeight,setScreenHeight] = useState(window.innerHeight)
    // const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    const [backgroundImage,setBackgroundImage] = useState(defaultBackground)

    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

    const [showLoad, setShowLoad] = useState(false)
    const [showOnce, setShowOnce] = useState(false)
    const [showAnimation1, setShowAnimation1] = useState(false)
    const [showAnimation2, setShowAnimation2] = useState(false)
    const [showAnimation3, setShowAnimation3] = useState(false)
    const [showAnimation4, setShowAnimation4] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [showAnimation5, setShowAnimation5] = useState(false)

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
        setShowAnimation5(false)
    }

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    const handleCloseAnimation5 = async () => {
        await sleep(3500)
        setShowAnimation5(false)
        setShowLoad(true)
        await sleep(1000)
        setShowLoad(false)
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
    const triggerAnimations = () => {
        setShowAnimation1(true)
    }

    const triggerAnimation1 = () => {
        setShowOnce(true)
        setShowAnimation1(true)
    }

    const triggerAnimation2 = () => {
        setShowOnce(true)
        setShowAnimation2(true)
    }

    const triggerAnimation3 = () => {
        setShowOnce(true)
        setShowAnimation3(true)
    }

    const triggerAnimation4 = () => {
        setShowOnce(true)
        setShowAnimation4(true)
    }

    const triggerAnimation5 = () => {
        setShowOnce(true)
        setShowAnimation5(true)
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
            <Application x={Math.floor(Math.random()*(window.innerWidth-150))} y={Math.floor(Math.random()*(window.innerHeight-150))} triggerAnimation={triggerAnimations} imgSrc={require("./images/gift.png")} applicationClass={"gift-box"} width={"150px"}/>
            <Application x={20} y={20} triggerAnimation={triggerAnimation1} imgSrc={require("./images/warning.png")} applicationClass={"animation1"} width={"100px"} margin={"25px"}/>
            <Application x={20} y={200} triggerAnimation={triggerAnimation2} imgSrc={require("./images/loading.png")} applicationClass={"animation2"} width={"100px"} margin={"25px"}/>
            <Application x={20} y={400} triggerAnimation={triggerAnimation3} imgSrc={require("./images/password.png")} applicationClass={"animation3"} width={"100px"} margin={"25px"}/>
            <Application x={20} y={600} triggerAnimation={triggerAnimation4} imgSrc={require("./images/shield.png")} applicationClass={"animation4"} width={"80px"} margin={"37px"}/>
            <Application x={20} y={800} triggerAnimation={triggerAnimation5} imgSrc={require("./images/image_folder.png")} applicationClass={"animation5"} width={"80px"} margin={"37px"}/>
            <Animation1 handleClose={handleCloseAnimation1} dialogOptions={dialog1Options} dialogCounter={animation1Counter} showDialog={showAnimation1}/>
            <Animation2 handleClose={handleCloseAnimation2} showAnimation={showAnimation2}/>
            <Animation3 handleClose={handleCloseAnimation3} showAnimation={showAnimation3}/>
            <Animation4/>
            {showAlert && showAnimation4 && <Alert handleCloseAlert={handleCloseAlert} showAlert={showAlert}/>}
            <Animation5 handleClose={handleCloseAnimation5} showAnimation={showAnimation5}/>
        </div>
    )
}

export default Desktop