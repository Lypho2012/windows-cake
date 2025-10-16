import { useEffect } from "react";
import WindowsAlert from "./WindowsAlert";

const Animation2 = (props: any) => {
    useEffect(() => {
        if (props.showAnimation){
            const timer = setInterval(async () => {
                props.handleClose()
            }, 10000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [props.showAnimation])
    return <WindowsAlert handleClose={props.handleClose} handleForceClose={props.handleClose} show={props.showAnimation}>
        <div style={{display:"flex",flexDirection:"column"}}>
            <div>Please wait while the application is fetching server 2.</div>
            <div className="progress">
                <div className="progress_inner"></div>
                <div className="progress_right"></div>
            </div>
        </div>
    </WindowsAlert>
}
export default Animation2