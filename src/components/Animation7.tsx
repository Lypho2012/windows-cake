import Vara from 'vara'

const Animation7 = (props: any) => {
  const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
  const handleShowMessage = async () => {
        const vara = new Vara(
            "#container", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Pacifico/PacificoSLO.json",
            [
                {
                text: "Happy Birthday Mom!",
                y: 350,
                fromCurrentPosition: { y: false },
                duration: 3000
                }
            ],
            {
                strokeWidth: 1,
                color: "#ffe30bff",
                fontSize: 50,
                textAlign: "center"
            }
        );
        vara.ready(() => {
            let erase = true;
            vara.animationEnd((i:any, o:any) => {
                if (i == "no_erase") erase = false;
                if (erase) {
                o.container.style.transition = "opacity 1s 1s";
                o.container.style.opacity = 0;
                }
            });
        }); 
        await sleep(6000)
        props.handleClose()
    }
  if (props.showAnimation) {
    handleShowMessage()
  }
  return (
      <div id="container" style={props.showAnimation?{position:"fixed",width:"100vw",height:"100vh",backgroundColor:"black",opacity:1}:{pointerEvents: "none"}}></div>
  )
}

export default Animation7