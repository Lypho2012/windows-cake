import { useEffect, useState } from "react"
import WindowsAlert from "./WindowsAlert"

const Animation6 = (props: any) => {
    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
    const [animationRan, setAnimationRan] = useState(false)

    const [showCakes,setShowCakes] = useState(Array(9).fill(false))
    const Cake1 = (useImage: any) => {
        return <WindowsAlert handleClose={()=>{}} handleForceClose={()=>{}} show={showCakes[0]}>
            {
                useImage ? <img src={require("../images/cake1.png")}/> : <></>
            }
        </WindowsAlert>
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
        runAnimation()
    }
    return (
        <div>
            <Cake1 useImage={props.selectedImages[0][0]}/>
        </div>
    )
}

export default Animation6