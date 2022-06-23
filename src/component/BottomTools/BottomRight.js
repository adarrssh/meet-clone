import React, { useState } from 'react'
import './BottomTools.css'
import InfoIcon from '@mui/icons-material/Info';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LockClockIcon from '@mui/icons-material/LockClock';

const BottomRight = ({rightPopup,setRightPopup}) => {


    const btnChange=()=>{
        setRightPopup(!rightPopup)
    }

  return (
    
    <div className="right">
                    <div  onClick={btnChange} className="icons red">
                        <InfoIcon />
                    </div>

                    <div  onClick={btnChange} className="icons icons-eight">
                        <div className='eight'>8</div>
                        <PeopleOutlineIcon />
                    </div>

                    <div  onClick={btnChange} className="icons">
                        <ChatIcon />
                    </div>

                    <div  onClick={btnChange} className="icons">
                        <SettingsIcon />
                    </div>

                    <div  onClick={btnChange} className="icons">
                        <LockClockIcon />
                    </div>
                </div>
  )
}

export default BottomRight