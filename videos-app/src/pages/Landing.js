import React, { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import VideoNotFound from '../components/VideoNotFound';
import VideoResults from '../components/VideoResults';
import useVideos from '../hooks/useVideos';

const Landing = () => {
	const [videos, search] = useVideos('');

	useEffect(() => {
		console.log(videos);
	}, [videos]);

	return (
		<div className="container mt-5">
			<SearchBar onFormSubmit={search} />
			{videos.length > 0 ? (
				<VideoResults
					videos={[
						{ snippet: { title: 'oi' } },
						{ snippet: { title: 'tchau' } },
					]}
				/>
			) : (
				<VideoNotFound />
			)}
		</div>
	);
};

export default Landing;
