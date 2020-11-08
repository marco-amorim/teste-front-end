import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/videodetail.css';

const VideoDetail = () => {
	return (
		<div id="video-detail" className="container">
			<Link to="/">
				<FontAwesomeIcon icon={faArrowLeft} color="grey" />
			</Link>
			<VideoPlayer />
		</div>
	);
};

export default VideoDetail;
