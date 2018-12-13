import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl,box}) => {

	return(
		<div className ='center '>
			<div className = 'absolute mb2 mt2'>
				<img id ='inputImage' alt=''src = {imageUrl} width ='500px' height='auto' />
				
				{box}
			</div>
		</div>
	)
}

export default FaceRecognition;