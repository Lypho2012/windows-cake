import WindowsAlert from "./WindowsAlert";

const Animation3 = (props: any) => {
    return <WindowsAlert handleClose={props.handleClose} handleForceClose={props.handleClose} show={props.showAnimation}>
        <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
            <div>Please enter your password:</div>
            <input type="password"/>
        </div>
        <button onClick={() => props.handleClose()} 
                style={{
                    position:"absolute",
                    height:"fit-content",
                    bottom:"20px",
                    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
                    cursor:"pointer"}}>Confirm</button>
    </WindowsAlert>
}
export default Animation3;