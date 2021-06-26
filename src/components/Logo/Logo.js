import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import face from './face.png'

const Logo =() => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2'>
                <div className='TiltInner pa4'>
                    <img style ={{paddingTop:'5px'}}  src={face} alt = 'Face Recognition'></img></div>
            </Tilt>
        </div>
    );
}


export default Logo;