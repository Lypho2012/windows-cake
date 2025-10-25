import { useEffect, useState } from "react"
import ColorfulAlert from "./ColorfulAlert"

const Animation6 = (props: any) => {
    const [relativeX] = useState(50)
    const [relativeY] = useState(50)
    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
    const [animationRan, setAnimationRan] = useState(false)

    const [showCakes,setShowCakes] = useState(Array(9).fill(true))
    const Cake1 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(181,226,247)"} x={relativeX-25} y={relativeY+20}>
            {
                useImage ? <img style={{width:"800px"}} src={require("../images/cake1.png")}/> : <></>
            }
        </ColorfulAlert>
    }
    const Cake2 = (useImage: any) => {
        return <ColorfulAlert show={showCakes[0]} background={"rgb(255,253,206)"} x={relativeX-15} y={relativeY}>
            {
                useImage ? <img style={{width:"300px"}} src={require("../images/cake2.png")}/> : <></>
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
        </div>
    )
}

export default Animation6