import { useEffect, useState } from "react"
import axios from "axios"
import defaultBackground from "./images/default_background.jpeg";

function Desktop() {
    const [screenHeight,setScreenHeight] = useState(window.innerHeight)
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    const [backgroundImage,setBackgroundImage] = useState(defaultBackground)

    useEffect(() => {
        try {
            axios.post('http://localhost:8000/create-background-image')
        } catch (error) {
            console.error(error);
        }
    })
    const triggerAnimation = () => {

    }
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <button style={{background:"none",border:"none"}}>
                <img src={require("./images/gift.png")} alt='gift box' onDoubleClick={triggerAnimation}/>
            </button>
        </div>
    )
}

export default Desktop