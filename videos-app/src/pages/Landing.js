import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import VideoNotFound from '../components/VideoNotFound';
import VideoResults from '../components/VideoResults';
import Welcome from '../components/Welcome';
import useVideos from '../hooks/useVideos';

const Landing = () => {
	const [videos, search] = useVideos('');
	const [searchMade, setSearchMade] = useState(false);

	useEffect(() => {
		console.log(videos);
		console.log(searchMade);
	}, [videos, searchMade]);

	const makeSearch = () => {
		search();
		setSearchMade(true);
	};

	const renderSearchResult = () => {
		if (videos.length > 0) {
			return (
				<VideoResults
					videos={[
						{ snippet: { title: 'oi' } },
						{ snippet: { title: 'tchau' } },
					]}
				/>
			);
		} else if (videos.length === 0 && searchMade) {
			return <VideoNotFound />;
		} else {
			return <Welcome />;
		}
	};

	return (
		<div className="container mt-5">
			<SearchBar onFormSubmit={makeSearch} />
			{renderSearchResult()}
		</div>
	);
};

export default Landing;
