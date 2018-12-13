import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div >
			
			<div className ="center">
				<div className ='center shadow-2' >

					<input className ='f4 pa2 w-70 center' type ='tex'onChange={onInputChange} placeholder ='www.img.com/yourpic.jpg' />
					<button className ='w-30 br2 grow f4 link ph3 pv dib white bg-dark-blue pointer' onClick = {onButtonSubmit} >Detect</button>
				</div>
			</div >
		</div>
	);
}

export default ImageLinkForm;