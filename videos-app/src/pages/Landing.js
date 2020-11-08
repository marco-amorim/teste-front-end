import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import VideoNotFound from '../components/VideoNotFound';
import VideoResults from '../components/VideoResults';
import Welcome from '../components/Welcome';
import useVideos from '../hooks/useVideos';

import '../assets/styles/landing.css';
import Pagination from '../components/Pagination';

const Landing = () => {
	const [search, nextPageToken, prevPageToken, videos] = useVideos('');
	const [searchMade, setSearchMade] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		renderSearchResult();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);

	const makeSearch = async (term, customParams) => {
		customParams = {
			params: {
				q: term,
				maxResults: 6,
			},
		};
		await search(term, customParams);
		setSearchMade(true);
		setSearchTerm(term);
	};

	const renderSearchResult = () => {
		if (videos.length > 0) {
			return (
				<>
					<VideoResults videos={videos} />
					<Pagination
						nextPageToken={nextPageToken}
						prevPageToken={prevPageToken}
						search={search}
						searchTerm={searchTerm}
					/>
				</>
			);
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
