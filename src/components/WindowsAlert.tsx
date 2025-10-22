
const WindowsAlert: React.FC<any> = ({handleClose, handleForceClose, show, children}) => {
    return <dialog 
    open={show} 
    onClose={() => handleClose()}
    style={{
        paddingTop:"10px",
        border: "1px solid black", 
        borderRadius:"5px",
        background: "linear-gradient(to bottom, #8faacd, #d2def1ff)",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        marginTop:"auto",
        fontFamily:"'Lucida Console', monospace",
        textAlign:"left",
        overflowWrap: "break-word"}}>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div>Application Message</div>
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
                color:"white"}} onClick={handleForceClose}>X</div>
        </div>
        <div style={{
            border:"1px solid grey",
            display:"flex",
            justifyContent: "center",
            marginTop:"10px",
            minHeight:"50px",
            minWidth:"50px",
            maxWidth:"500px",
            paddingBottom:"30px",
            background:"white",
            padding: "10px"}}>
            {children}
        </div>
    </dialog>
}
export default WindowsAlert