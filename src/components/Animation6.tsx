import { useState } from "react"
import ColorfulAlert from "./ColorfulAlert"
import "./Animation6.css"
// import birthdaySong from "../images/birthdaySong.mp3"
import WindowsAlert from "./WindowsAlert"

const Animation6 = (props: any) => {
    const [relativeX] = useState(50)
    const [relativeY] = useState(55)
    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
    const [animationRan, setAnimationRan] = useState(false)

    const [showCakes,setShowCakes] = useState(Array(9).fill(true))
    const [showCandles,setShowCandles] = useState(Array(5).fill(true))
    const [animationState, setAnimationState] = useState("none")
    
    // const birthdaySongAudio = new Audio(birthdaySong)

    const [makeWish, setMakeWish] = useState(false)
    const [blowCandles, setBlowCandles] = useState(false)

    const Cake1 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(181,226,247)"} x={relativeX-25} y={relativeY+20}>
            {
                useImage ? <img style={{width:"800px"}} src={require("../images/cake1.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake2 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[1]} background={"rgb(255,253,206)"} x={relativeX-20} y={relativeY-10}>
            {
                useImage ? <img style={{width:"400px"}} src={require("../images/cake2.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake3 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[2]} background={"rgb(253,228,225)"} x={relativeX-15} y={relativeY+25}>
            {
                useImage ? <img style={{width:"300px"}} src={require("../images/cake3.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake4 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[3]} background={"rgb(245,224,178)"} x={relativeX} y={relativeY+10}>
            {
                useImage ? <img style={{width:"200px"}} src={require("../images/cake4.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake5 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[4]} background={"rgb(254,174,189)"} x={relativeX-27} y={relativeY+10}>
            {
                useImage ? <img style={{width:"200px"}} src={require("../images/cake5.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake6 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[5]} background={"rgb(251,209,147)"} x={relativeX-15} y={relativeY-15}>
            {
                useImage ? <img style={{width:"450px"}} src={require("../images/cake6.png")}/> : <></>
            }
        </ColorfulAlert>
    }

    const Cake7 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[6]} background={"rgb(253,237,237)"} x={relativeX-13.5} y={relativeY-35}>
            {
                useImage ? <img style={{width:"400px"}} src={require("../images/cake7.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake8 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[7]} background={"rgb(254,214,196)"} x={relativeX+8} y={relativeY+5}>
            {
                useImage ? <img style={{width:"220px"}} src={require("../images/cake8.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake9 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[8]} background={"rgb(250,198,114)"} x={relativeX-9.5} y={relativeY-48}>
            {
                useImage ? <img style={{width:"260px"}} src={require("../images/cake9.png")}/> : <></>
            }
        </ColorfulAlert>
    }

    const Candle1 = () => {
        return <ColorfulAlert show={showCandles[0]} background={"rgb(255,244,156)"} x={relativeX-22} y={relativeY-10}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle2 = () => {
        return <ColorfulAlert show={showCandles[1]} background={"rgb(255,244,156)"} x={relativeX+14} y={relativeY-10}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle3 = () => {
        return <ColorfulAlert show={showCandles[2]} background={"rgb(255,244,156)"} x={relativeX-15} y={relativeY-40}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle4 = () => {
        return <ColorfulAlert show={showCandles[3]} background={"rgb(255,244,156)"} x={relativeX+8} y={relativeY-40}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle5 = () => {
        return <ColorfulAlert show={showCandles[4]} background={"rgb(255,244,156)"} x={relativeX-3} y={relativeY-55}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }

    const Match = () => {
        return <img className={"match "+animationState} src={require("../images/match.png")}/>
    }

    const handleCloseLetter = () => {
        setMakeWish(false)
        setBlowCandles(true)
    }

    const Letter = () => {
        return <div style={{position:"fixed",left:"35%",top:"25%",display:"flex"}}>
                <img src={require("../images/letter.png")} style={{position:"fixed",width:"400px"}}/>
                <textarea style={{
                    width:"450px",
                    background:"rgba(0,0,0,0.3)",
                    height:"100px",
                    border:"none",
                    position:"fixed",
                    fontSize:"20px",
                    padding:"30px",
                    color:"white",
                    marginTop:"150px"}}/>
                <button onClick={handleCloseLetter} 
                style={{
                    position:"absolute",
                    height:"30px",
                    top:"310px",
                    left:"200px",
                    width:"100px",
                    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
                    cursor:"pointer",
                    background:"rgba(206, 156, 6, 1)",
                    color:"white",
                    border:"none"}}>Make Wish!</button>
        </div>
    }

    const runAnimation = async () => {
        // for (let i=0; i<9; i++) {
        //     setShowCakes(showCakes.map((_,j) => i >= j ? true : false))
        //     await sleep(1000)
        // }
        // for (let i=0; i<5; i++) {
        //     setShowCandles(showCandles.map((_,j) => i >= j ? true : false))
        //     await sleep(1000)
        // }

        // props.setCurtainRose(true)
        setAnimationState("black-screen")
        await sleep(1000)
        setAnimationState("light-match")
        await sleep(1000)
        setAnimationState("light-match animate-candle1")
        await sleep(3000)
        setAnimationState("light-match animate-candle2")
        await sleep(3000)
        setAnimationState("light-match animate-candle3")
        await sleep(3000)
        setAnimationState("light-match animate-candle4")
        await sleep(3000)
        setAnimationState("light-match animate-candle5")
        await sleep(3000)
        setAnimationState("song")
        await sleep(3000)
        // birthdaySongAudio.play()
        await sleep(3000)
        setMakeWish(true)

        // Rest everything's state and end animation 6
        // props.setCurtainRose(false)
        // setAnimationState("none")
        // setShowCakes(Array(9).fill(false))
        // setShowCandles(Array(5).fill(false))
        // props.handleClose()
        // setAnimationRan(false)
    }
    if (props.showAnimation && !animationRan){
        setAnimationRan(true)
        runAnimation()
    }
    return (
        <div style={{width:"100%",height:"100%"}}>
            <Cake1 useImage={props.selectedImages[0][0]}/>
            <Cake2 useImage={props.selectedImages[0][1]}/>
            <Cake3 useImage={props.selectedImages[0][2]}/>
            <Cake4 useImage={props.selectedImages[1][0]}/>
            <Cake5 useImage={props.selectedImages[1][1]}/>
            <Cake6 useImage={props.selectedImages[1][2]}/>
            <Cake7 useImage={props.selectedImages[2][0]}/>
            <Cake8 useImage={props.selectedImages[2][1]}/>
            <Cake9 useImage={props.selectedImages[2][2]}/>

            <Candle1/>
            <Candle2/>
            <Candle3/>
            <Candle4/>
            <Candle5/>
            <Match/>
            {animationRan && <div className={"curtain "+animationState}></div>}
            {makeWish && <Letter/>}
        </div>
    )
}

export default Animation6