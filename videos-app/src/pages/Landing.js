import React, { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import useVideos from '../hooks/useVideos';

const Landing = () => {
	const [videos, search] = useVideos('');

	useEffect(() => {
		console.log(videos);
	}, [videos]);

	return (
		<div className="container">
			<SearchBar onFormSubmit={search} />
		</div>
	);
};

export default Landing;
