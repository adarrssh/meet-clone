import React from 'react'
import "./Popup.css"
import CloseIcon from '@mui/icons-material/Close';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SecurityIcon from '@mui/icons-material/Security';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const Popup = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className='card-head'>
                    <div className="heading">
                        Your Meeting's ready
                    </div>

                    <div className="cross">
                        <CloseIcon />
                    </div>
                </div>

                <div className="mid-btn">
                    <a href="/" class="btn btn-primary"><GroupAddIcon className='add-other-icon' />Add others</a>
                </div>

                <div className="bottom-content">
                    <div className='btn-font'>Or share this meeting link with others that you want in the meeting</div>
                    <div className='btn-cont-link'>
                        <p>
                            meet.google.com/ads-asf-adsf
                        </p>
                        <ContentCopyIcon />
                    </div>
                    <div className='btn-cont-btn'>
                        <div><SecurityIcon /></div>
                        <p>People who use this meeting link must get your permission before they can join</p>
                    </div>
                    <div className="btn-font">
                        Joined as xyx@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup