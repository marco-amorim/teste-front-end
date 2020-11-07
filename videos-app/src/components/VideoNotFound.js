import React from 'react';

import notFoundImage from '../assets/images/not-found.png';
import '../assets/styles/videonotfound.css';

const VideoNotFound = () => {
	return (
		<div id="not-found">
			<h5 className="text-center mt-5">Nenhum resultado encontrado 😟</h5>
			<div className="d-flex justify-content-center">
				<img src={notFoundImage} alt="Desert" />
			</div>
		</div>
	);
};

export default VideoNotFound;
