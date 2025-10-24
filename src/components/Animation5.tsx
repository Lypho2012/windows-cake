import { useEffect, useState } from "react";
import WindowsAlert from "./WindowsAlert";

const Animation5 = (props: any) => {
    const [keyword,setKeyword] = useState("cake")
    const [selectedImages,setSelectedImages] = useState(Array(3).fill(Array(3).fill(false)))

    const handleSelectImage = (i:any,j:any) => {
        setSelectedImages(selectedImages.map((row,r) => 
            row.map((selected:any, c:any) => r==i && c==j ? !selected : selected)
        ))
    }
    
    return <WindowsAlert handleClose={props.handleClose} handleForceClose={props.handleClose} show={props.showAnimation}>
        <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{
                backgroundColor:"rgb(56,114,226)",
                width:"360px",
                height:"100px",
                padding:"25px",
                color:"white",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize:"20px"}}>
                <p style={{margin:"0"}}>Select all images with</p>
                <p style={{margin:"0",fontSize:"40px"}}>{keyword}</p>
                <p style={{margin:"0"}}>Click verify once there are none left</p>
            </div>
            <div style={{width:"400px",
                height:"400px",display:"flex",flexDirection:"column",marginTop:"10px",marginBottom:"10px"}}>
                {
                    selectedImages.map((row, i) => (
                        <div style={{display:"flex",flexDirection:"row"}}>
                            {row.map((_:any, j:any) => (
                                <button style={{
                                    "border":"none",
                                    "background":"none",
                                    paddingLeft:"0",
                                    paddingRight:"10px",
                                    paddingBottom:"5px",
                                    cursor:"pointer"}}>
                                    {!selectedImages[i][j] ? 
                                    <img src={require(`../images/captcha${i*3+j+1}.png`)}
                                    style={{width:"130px"}} onClick={()=>handleSelectImage(i,j)}/>:
                                    <div>
                                        <img src={require(`../images/checkmark.png`)}
                                    style={{width:"30px",position:"fixed"}}/>
                                        <img src={require(`../images/captcha${i*3+j+1}.png`)}
                                    style={{width:"100px",padding:"15px"}} onClick={()=>handleSelectImage(i,j)}/>
                                    </div>
                                }
                                </button>
                            ))}
                        </div>
                    ))
                }
            </div>
            <button style={{width:"100px",height:'40px',color:"white",
                fontFamily: "Arial, Helvetica, sans-serif",backgroundColor:"rgb(56,114,226)",
                border:"none",marginLeft:"auto",cursor:"pointer"}} 
                onClick={()=> {
                    const res = selectedImages
                    setSelectedImages(Array(3).fill(Array(3).fill(false)))
                    props.handleClose(res)
                }}>
                VERIFY
            </button>
        </div>
    </WindowsAlert>
}
export default Animation5;