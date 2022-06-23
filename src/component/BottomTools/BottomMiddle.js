import React, { useState } from 'react'
import "./BottomTools.css"
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';

const BottomMiddle = () => {
    const [micOn, setMicOn]=useState(false)
    const [videoOn, setvideOn]=useState(false)

    const changeMic =()=>{
        setMicOn(!micOn);
    }

    const changeVid=()=>{
        setvideOn(!videoOn)
    }

    return (
        <div className="middle">
            <div onClick={changeMic} className={micOn?"icons":"icons red"}>
                {micOn?<MicIcon/>:<MicOffIcon/>}
            </div>

            <div onClick={changeVid} className={videoOn?"icons":"icons red"}>
               {videoOn?
                   <VideocamIcon />:<VideocamOffIcon/>
               }
            </div>

            <div className="icons">
                <ClosedCaptionIcon />
            </div>

            <div className="icons">
                <PresentToAllIcon />
            </div>

            <div className="icons">
                <MoreVertIcon />
            </div>

            <div className="icons red">
                <CallEndIcon />
            </div>
        </div>

    )
}

export default BottomMiddle