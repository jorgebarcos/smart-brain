import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl}) => {
	return (
		<div className="center ma">
            <div className="absolute mt2">   
            <img className="photo" src={imageUrl} width='500px' height='auto' alt=""/>
            </div> 
        </div>
	);
};

export default FaceRecognition;
