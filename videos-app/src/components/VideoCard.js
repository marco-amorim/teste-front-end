import React from 'react';
import { Link } from 'react-router-dom';

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
					className="card-text font-weight-bold"
					dangerouslySetInnerHTML={{ __html: props.channel }}
				/>
				<p
					className="card-text"
					dangerouslySetInnerHTML={{ __html: props.description }}
				/>
				<Link
					to={{
						pathname: `/video/${props.videoId}`,
						state: { videoId: props.videoId },
					}}
					className="btn btn-info position-absolute"
				>
					DETALHES DO VÍDEO
				</Link>
			</div>
		</div>
	);
};

export default VideoCard;
