import React from 'react'
import './BottomTools.css'
import InfoIcon from '@mui/icons-material/Info';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LockClockIcon from '@mui/icons-material/LockClock';

const BottomRight = () => {
  return (
    
    <div className="right">
                    <div className="icons">
                        <InfoIcon />
                    </div>

                    <div className="icons">
                        <PeopleOutlineIcon />
                    </div>

                    <div className="icons">
                        <ChatIcon />
                    </div>

                    <div className="icons">
                        <SettingsIcon />
                    </div>

                    <div className="icons">
                        <LockClockIcon />
                    </div>
                </div>
  )
}

export default BottomRight