import React from 'react';

import '../assets/styles/videocard.css';

const VideoCard = (props) => {
	return (
		<div className="card video-card position-relative">
			<img src={props.thumbnail} className="card-img-top" alt="Thumbnail" />
			<div className="card-body">
				<h5
					className="card-title"
					dangerouslySetInnerHTML={{ __html: props.title }}
				/>
				<p
					className="card-text"
					dangerouslySetInnerHTML={{ __html: props.channel }}
				/>
				<p
					className="card-text"
					dangerouslySetInnerHTML={{ __html: props.description }}
				/>
				<a href="/" className="btn btn-primary position-absolute">
					DETALHES DO VÍDEO
				</a>
			</div>
		</div>
	);
};

export default VideoCard;
