import React from 'react';

import '../assets/styles/videoresults.css';

const VideoResults = ({ videos }) => {
	const renderVideoResults = videos.map((video) => {
		return (
			<>
				<span>{video.snippet.title}</span>
			</>
		);
	});
	return <div id="video-results">{renderVideoResults}</div>;
};

export default VideoResults;
