import React from 'react';

const Rank = ({num}) => {
	return(
		<div >
			<div className='mid-gray f3'>
				{'Number of face detected is...'}
			</div>
			<div className='mid-gray f1' >
		        {num} 
		    </div>
			<p className ="mid-gray f3">
				{"This Magical Brain will detect faces in your picture.Give it a try."}
			</p>
		</div>
	);
}

export default Rank;