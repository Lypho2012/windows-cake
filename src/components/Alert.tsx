import WindowsAlert from "./WindowsAlert"

const Alert = (props: any) => {
    return <div
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
        }}>
        <WindowsAlert handleClose={props.handleCloseAlert} handleForceClose={props.handleCloseAlert} show={props.showAlert}>
            <div>
                Please complete the Captcha first.
            </div>
            <button onClick={props.handleCloseAlert} 
                style={{
                    position:"absolute",
                    height:"fit-content",
                    bottom:"20px",
                    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
                    cursor:"pointer"}}>Ok</button>
        </WindowsAlert>
    </div>
}
export default Alert