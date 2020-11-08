import React from 'react';

import '../assets/styles/videoresults.css';
import VideoCard from './VideoCard';

const VideoResults = ({ videos }) => {
	const renderVideoResults = videos.map((video, index) => {
		return (
			<li key={index}>
				<VideoCard
					title={video.snippet.title}
					channel={video.snippet.channelTitle}
					description={video.snippet.description}
					thumbnail={video.snippet.thumbnails.medium.url}
					videoId={video.id.videoId}
				/>
			</li>
		);
	});
	return (
		<div id="video-results">
			<ul className="list-unstyled d-flex flex-wrap">{renderVideoResults}</ul>
		</div>
	);
};

export default VideoResults;
