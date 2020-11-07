import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import VideoNotFound from '../components/VideoNotFound';
import VideoResults from '../components/VideoResults';
import Welcome from '../components/Welcome';
import useVideos from '../hooks/useVideos';

import '../assets/styles/landing.css';

const Landing = () => {
	const [videos, search, nextPageToken] = useVideos('');
	const [searchMade, setSearchMade] = useState(false);

	useEffect(() => {
		console.log(videos);
		console.log(searchMade);
	}, [videos, searchMade]);

	const makeSearch = async (term) => {
		await search(term);
		setSearchMade(true);
	};

	const renderSearchResult = () => {
		if (videos.length > 0) {
			return <VideoResults videos={videos} />;
		} else if (videos.length === 0 && searchMade) {
			return <VideoNotFound />;
		} else {
			return <Welcome />;
		}
	};

	return (
		<div className="container">
			<SearchBar onFormSubmit={makeSearch} />
			{renderSearchResult()}
		</div>
	);
};

export default Landing;
