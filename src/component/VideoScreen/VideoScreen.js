import React from 'react'
import Popup from '../popup/Popup'
import RightPopup from '../popup/RightPopup'
import './VideoScreen.css'

const VideoScreen = ({rightPopup,setRightPopup,popup, setPopup}) => {

  return (
    <div className='video-body'>
        <div className="video">
        </div>
        {popup?<Popup setPopup={setPopup}/>:""}
        {
         rightPopup?<RightPopup setRightPopup={setRightPopup}/>:""
        }
    </div>
  )
}

export default VideoScreen