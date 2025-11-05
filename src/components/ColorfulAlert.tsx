
const ColorfulAlert: React.FC<any> = ({show, background, children, x, y}) => {
    return <dialog 
    open={show} 
    onClose={() => {}}
    style={{
        paddingTop:"10px",
        border: "1px solid black", 
        borderRadius:"5px",
        background: background,
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        fontFamily:"'Lucida Console', monospace",
        textAlign:"left",
        overflowWrap: "break-word",
        position:"absolute",
        left: x+"px",
        top: y+"px",
        margin:"0"}}>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{
                position:"absolute",
                right:"20px",
                margin:"none",
                paddingLeft:"10px",
                paddingRight:"10px",
                fontStretch:"expanded",
                userSelect: "none",
                cursor:"pointer",
                border:"1px solid grey",
                borderRadius:"3px",
                background:"linear-gradient(to bottom, #ffdedeff, #ab5151ff)",
                color:"white"}} >X</div>
        </div>
        {children}
    </dialog>
}
export default ColorfulAlert