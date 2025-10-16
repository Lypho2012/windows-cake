import WindowsAlert from "./WindowsAlert"

const Animation1 = (props: any) => {
    return <WindowsAlert handleClose={props.handleClose} handleForceClose={props.handleClose} show={props.showDialog}>
        <div style={{width:"100%"}}>{props.dialogOptions[props.dialogCounter]}</div>
        <button onClick={() => props.handleClose()} 
                style={{
                    position:"absolute",
                    height:"fit-content",
                    bottom:"20px",
                    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
                    cursor:"pointer"}}>Ok</button>
    </WindowsAlert>
}
export default Animation1