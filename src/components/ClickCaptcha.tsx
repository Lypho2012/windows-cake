import "./ClickCaptcha.css"

const ClickCaptcha = (props: any) => {
    return <div className="clickcaptcha">
        <div className="spinner">
            <label>
                <input type="checkbox" onClick={()=>{"$(this).attr('disabled','disabled');"; props.handleCloseCaptcha()}}/>
                <span className="checkmark"><span>&nbsp;</span></span>
            </label>
        </div>
        <div className="text">
            I'm not a robot
        </div>
        <div className="logo">
            <img src={require("../images/RecaptchaLogo.png")}/>
            <small>Privacy - Terms</small>
        </div>
    </div>
}

export default ClickCaptcha