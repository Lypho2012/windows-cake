import { useEffect, useState } from "react"
import axios from "axios"
import defaultBackground from "./images/default_background.jpeg";
import "./Desktop.css"

function Desktop() {
    const [screenHeight,setScreenHeight] = useState(window.innerHeight)
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    const [backgroundImage,setBackgroundImage] = useState(defaultBackground)

    useEffect(() => {
        try {
            axios.post(`http://localhost:8000/create-background-image?screen_width=${screenWidth}&screen_height=${screenHeight}`)
        } catch (error) {
            console.error(error);
        }
    },[])
    const triggerAnimation = () => {

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
                left:`${Math.floor(Math.random()*window.innerWidth-150)}px`,
                top:`${Math.floor(Math.random()*window.innerHeight-150)}px`}}>
                <img src={require("./images/gift.png")} alt='gift box' style={{width:'150px',cursor:'pointer'}} onClick={triggerAnimation}/>
            </button>
        </div>
    )
}

export default Desktop