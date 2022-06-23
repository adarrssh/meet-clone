import React from 'react'
import './BottomTools.css'
import BottomMiddle from './BottomMiddle';
import BottomRight from './BottomRight';
import BottomLeft from './BottomLeft';

const BottomTools = ({rightPopup,setRightPopup}) => {


    return (
        <div className='bottom-body'>
            <div className='button-container'>
                <BottomLeft/>
                <BottomMiddle/>
                <BottomRight rightPopup={rightPopup} setRightPopup={setRightPopup}/>
            </div>
        </div>
    )
}

export default BottomTools