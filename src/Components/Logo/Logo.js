import React from 'react';
import brain from './83246.png';
import './Logo.css'

const Logo = () => {
	return(
		<div className ='ma2 mt0 ' id ='titleLogo'>
			<img className='profile-image' alt='icon' src ={brain} width="100" height="100" />
			<span className ='f2 w-60 mb10'> Smart Brain</span>
		</div>
	);
}

export default Logo;