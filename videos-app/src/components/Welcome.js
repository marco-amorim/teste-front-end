import React from 'react';

import welcomeImage from '../assets/images/welcome.png';
import '../assets/styles/welcome.css';

const Welcome = () => {
	return (
		<div id="welcome">
			<h5 className="text-center mt-5">Seja bem-vindo(a)!</h5>
			<p className="text-center">Faça sua busca 🔍</p>
			<div className="d-flex justify-content-center">
				<img src={welcomeImage} alt="Welcome" />
			</div>
		</div>
	);
};

export default Welcome;
