import React from 'react'
import './BottomTools.css'

import BottomMiddle from './BottomMiddle';
import BottomRight from './BottomRight';
import BottomLeft from './BottomLeft';

const BottomTools = () => {
    return (
        <div className='bottom-body'>
            <div className='button-container'>
               
                <BottomLeft/>
                <BottomMiddle/>
                <BottomRight/>

                
            </div>
        </div>
    )
}

export default BottomTools