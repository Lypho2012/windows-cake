import { useState } from 'react'
import Vara from 'vara'

const Animation7 = (props: any) => {
  const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
  const [vara,setVara] = useState<any>(null)
  const handleShowMessage = async () => {
    if (vara == null){
      const cur = new Vara(
          "#container", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Pacifico/PacificoSLO.json",
          [
              {
              text: "Happy Birthday Mom!",
              y: 350,
              fromCurrentPosition: { y: false },
              duration: 3000,
              id:"birthday_text"
              }
          ],
          {
              strokeWidth: 1,
              color: "#ffe30bff",
              fontSize: 50,
              textAlign: "center"
          }
      )
      setVara(cur)
      cur.ready(() => {
        cur.animationEnd(async (i:any, o:any) => {
          o.characters.forEach(function (i:any) {
            i.querySelectorAll("path").forEach(function (j: any) {
              j.style.transition = "opacity 2s 2s"
              j.style.opacity = 0;
            });
          });
          await sleep(3000)
          document.getElementById("container")?.children[0].remove()
          setVara(null)
          props.handleClose()
        });
      }); 
    } else {
      vara.draw("birthday_text")
    }
    }
  if (props.showAnimation) {
    handleShowMessage()
  }
  return (
      <div id="container" style={props.showAnimation?{position:"fixed",width:"100vw",height:"100vh",backgroundColor:"black"}:{pointerEvents: "none"}}></div>
  )
}

export default Animation7