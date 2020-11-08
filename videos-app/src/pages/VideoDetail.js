import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/videodetail.css';

const VideoDetail = (props) => {
	return (
		<div id="video-detail" className="container">
			<Link
				to={{
					pathname: '/',
					term: props.location.term,
				}}
			>
				<FontAwesomeIcon icon={faArrowLeft} color="grey" size="lg" />
			</Link>
			<VideoPlayer />
		</div>
	);
};

export default VideoDetail;
