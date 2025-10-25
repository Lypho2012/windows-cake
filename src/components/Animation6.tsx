import { useEffect, useState } from "react"
import ColorfulAlert from "./ColorfulAlert"

const Animation6 = (props: any) => {
    console.log(window.innerWidth)
    const [relativeX] = useState(50)
    const [relativeY] = useState(55)
    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
    const [animationRan, setAnimationRan] = useState(false)

    const [showCakes,setShowCakes] = useState(Array(9).fill(true))
    const [showCandles,setShowCandles] = useState(Array(9).fill(true))
    const Cake1 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(181,226,247)"} x={relativeX-25} y={relativeY+20}>
            {
                useImage ? <img style={{width:"800px"}} src={require("../images/cake1.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake2 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(255,253,206)"} x={relativeX-20} y={relativeY-10}>
            {
                useImage ? <img style={{width:"400px"}} src={require("../images/cake2.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake3 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(253,228,225)"} x={relativeX-15} y={relativeY+25}>
            {
                useImage ? <img style={{width:"300px"}} src={require("../images/cake3.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake4 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(245,224,178)"} x={relativeX} y={relativeY+10}>
            {
                useImage ? <img style={{width:"200px"}} src={require("../images/cake4.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake5 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(254,174,189)"} x={relativeX-27} y={relativeY+10}>
            {
                useImage ? <img style={{width:"200px"}} src={require("../images/cake5.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake6 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(251,209,147)"} x={relativeX-15} y={relativeY-15}>
            {
                useImage ? <img style={{width:"450px"}} src={require("../images/cake6.png")}/> : <></>
            }
        </ColorfulAlert>
    }

    const Cake7 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(253,237,237)"} x={relativeX-13.5} y={relativeY-35}>
            {
                useImage ? <img style={{width:"400px"}} src={require("../images/cake7.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake8 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(254,214,196)"} x={relativeX+8} y={relativeY+5}>
            {
                useImage ? <img style={{width:"220px"}} src={require("../images/cake8.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake9 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(250,198,114)"} x={relativeX-9.5} y={relativeY-48}>
            {
                useImage ? <img style={{width:"260px"}} src={require("../images/cake9.png")}/> : <></>
            }
        </ColorfulAlert>
    }

    const Candle1 = () => {
        return <ColorfulAlert show={showCandles[0]} background={"rgb(255,244,156)"} x={relativeX-15} y={relativeY-40}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle2 = () => {
        return <ColorfulAlert show={showCandles[0]} background={"rgb(255,244,156)"} x={relativeX+8} y={relativeY-40}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle3 = () => {
        return <ColorfulAlert show={showCandles[0]} background={"rgb(255,244,156)"} x={relativeX-22} y={relativeY-10}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle4 = () => {
        return <ColorfulAlert show={showCandles[0]} background={"rgb(255,244,156)"} x={relativeX+14} y={relativeY-10}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }
    const Candle5 = () => {
        return <ColorfulAlert show={showCandles[0]} background={"rgb(255,244,156)"} x={relativeX-3} y={relativeY-55}>
            {
                <img style={{width:"50px"}} src={require("../images/candle.png")}/>
            }
        </ColorfulAlert>
    }

    const runAnimation = async () => {
        for (let i=0; i<9; i++) {
            setShowCakes(showCakes.map((_,j) => i == j ? true : false))
            console.log(i)
            await sleep(1000)
        }
        props.handleClose()
        setAnimationRan(false)
    }
    if (props.showAnimation && !animationRan){
        setAnimationRan(true)
        // runAnimation()
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
        </div>
    )
}

export default Animation6