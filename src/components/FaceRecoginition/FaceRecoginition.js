import React from 'react';

const FaceRecognition =({imageUrl,faceSentiment}) =>{
    return (
        <div className='center ma'>
            <div className='absolute mt4'>
                <img src ={imageUrl} width ='500px' height='auto'
                alt =""/>
            <div class="centered">{faceSentiment}</div>
            </div>
        </div>
    )
}


export default FaceRecognition;