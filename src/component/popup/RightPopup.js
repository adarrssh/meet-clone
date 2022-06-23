import React from 'react'
import "./RightPopup.css"
import CloseIcon from '@mui/icons-material/Close';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

import SendIcon from '@mui/icons-material/Send';

const RightPopup = ({setRightPopup}) => {

  const closeRightPop =()=>{
    setRightPopup(false)
  }
  return (
    <div className='r-p-main'>
      <div className="r-p-content">

          <div className="r-p-head">
            <p className='margin'>
              In-call messages
            </p>
            <CloseIcon onClick={closeRightPop} />
          </div>
          <div className="send-msg">

            <div className='send-msg-content'>

            <p className='margin '>
              Let everyone send messages
            </p>
            <ToggleOnIcon />
            </div>

          </div>

        <div className="l-msg">
          <div className='l-msg-content'>

            Messages can be seen only by people in the call and are deleted when the call ends
          </div>
        </div>

        <div className="b-send">
          <div className='b-send-content'>
            <div className='b-send-l'>
              <p>Send a message to everyone</p>
            </div>
            <div className='b-send-r'>
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightPopup