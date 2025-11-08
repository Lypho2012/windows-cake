import { useEffect, useState } from "react"
import ColorfulAlert from "./ColorfulAlert"
import "./Animation6.css"
import birthdaySong from "../images/birthdaySong.mp3"
import applause from "../images/applause.mp3"
import lightMatch from "../images/lightMatch.mp3"

const Animation6 = (props: any) => {
    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
    const [animationRan, setAnimationRan] = useState(false)

    const [showCakes,setShowCakes] = useState(Array(9).fill(false))
    const [showCandles,setShowCandles] = useState(Array(5).fill(false))
    const [animationState, setAnimationState] = useState("none")
    
    const birthdaySongAudio = new Audio(birthdaySong)
    const applauseAudio = new Audio(applause)
    const lightMatchAudio = new Audio(lightMatch)

    const [makeWish, setMakeWish] = useState(false)
    const [blowCandles, setBlowCandles] = useState(false)

    const Cake1 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(181,226,247)"} x={400} y={700}>
            {
                useImage ? <img style={{width:"800px"}} src={require("../images/cake1.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake2 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[1]} background={"rgb(255,253,206)"} x={500} y={500}>
            {
                useImage ? <img style={{width:"400px"}} src={require("../images/cake2.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake3 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[2]} background={"rgb(253,228,225)"} x={500} y={750}>
            {
                useImage ? <img style={{width:"300px"}} src={require("../images/cake3.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake4 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[3]} background={"rgb(245,224,178)"} x={800} y={650}>
            {
                useImage ? <img style={{width:"200px"}} src={require("../images/cake4.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake5 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[4]} background={"rgb(254,174,189)"} x={400} y={600}>
            {
                useImage ? <img style={{width:"200px"}} src={require("../images/cake5.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake6 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[5]} background={"rgb(251,209,147)"} x={600} y={400}>
            {
                useImage ? <img style={{width:"450px"}} src={require("../images/cake6.png")}/> : <></>
            }
        </ColorfulAlert>
    }

    const Cake7 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[6]} background={"rgb(253,237,237)"} x={620} y={250}>
            {
                useImage ? <img style={{width:"400px"}} src={require("../images/cake7.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake8 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[7]} background={"rgb(254,214,196)"} x={1000} y={600}>
            {
                useImage ? <img style={{width:"220px"}} src={require("../images/cake8.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake9 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[8]} background={"rgb(250,198,114)"} x={700} y={100}>
            {
                useImage ? <img style={{width:"260px"}} src={require("../images/cake9.png")}/> : <></>
            }
        </ColorfulAlert>
    }

    const Candle1 = () => {
        return <ColorfulAlert show={showCandles[0]} background={"rgb(255,244,156)"} x={500} y={480}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle2 = () => {
        return <ColorfulAlert show={showCandles[1]} background={"rgb(255,244,156)"} x={1100} y={480}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle3 = () => {
        return <ColorfulAlert show={showCandles[2]} background={"rgb(255,244,156)"} x={600} y={180}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle4 = () => {
        return <ColorfulAlert show={showCandles[3]} background={"rgb(255,244,156)"} x={1000} y={180}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle5 = () => {
        return <ColorfulAlert show={showCandles[4]} background={"rgb(255,244,156)"} x={800} y={10}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }

    const Match = () => {
        return <img className={"match "+animationState} src={require("../images/match.png")}/>
    }

    const handleCloseLetter = async () => {
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
                    height:"50px",
                    top:"310px",
                    left:"170px",
                    width:"150px",
                    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
                    cursor:"pointer",
                    background:"rgba(206, 156, 6, 1)",
                    color:"white",
                    border:"none",
                    fontSize:"20px"}}>Make Wish!</button>
        </div>
    }

    const handleBlowCandles = async () => {
        setBlowCandles(false)
        applauseAudio.play()
        setAnimationState("black-screen")
        await sleep(7000)
        await sleep(2000)
        setAnimationState("none")
        props.handleClose()
        setShowCakes(Array(9).fill(false))
        setShowCandles(Array(5).fill(false))
        setAnimationRan(false)
        props.setCurtainRose(false)
    }

    const BlowCandle = () => {
        return <button style={{
            width:"300px",
            fontSize:"30px",
            position:"fixed",
            left:"calc(690px)",
            top:"calc(50% - 10px)"}}
            onClick={handleBlowCandles}>Blow out the candles!</button>
    }

    const runAnimation = async () => {
        for (let i=0; i<9; i++) {
            setShowCakes(showCakes.map((_,j) => i >= j ? true : false))
            await sleep(1000)
        }
        for (let i=0; i<5; i++) {
            setShowCandles(showCandles.map((_,j) => i >= j ? true : false))
            await sleep(1000)
        }

        props.setCurtainRose(true)
        setAnimationState("black-screen")
        await sleep(500)
        lightMatchAudio.play()
        await sleep(500)
        setAnimationState("light-match")
        await sleep(1500)
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
        setAnimationState("light-match song")
        await sleep(3000)
        birthdaySongAudio.play()
        await sleep(20000)
        setMakeWish(true)
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
            {props.showAnimation && <div className={"curtain "+animationState}></div>}
            {makeWish && <Letter/>}
            {blowCandles && <BlowCandle/>}
        </div>
    )
}

export default Animation6