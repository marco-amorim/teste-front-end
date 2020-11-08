import React, { Component } from 'react';

import youtube from '../apis/youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faThumbsUp,
	faThumbsDown,
	faEye,
} from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/videoplayer.css';

class VideoPlayer extends Component {
	state = {
		videoId: window.location.pathname.substr(7),
		video: {
			snippet: {
				channelTitle: 'Carregando...',
				title: 'Carregando...',
				description: 'Carregando...',
			},
			statistics: { likeCount: 0, dislikeCount: 0 },
		},
	};

	componentDidMount() {
		console.log('oi');
		this.fetchVideo();
	}

	fetchVideo = async () => {
		const response = await youtube.get('/videos', {
			params: {
				id: this.state.videoId,
				part: 'snippet,statistics',
			},
		});
		this.setState({ video: response.data.items[0] });
		console.log(this.state.video);
	};

	render() {
		return (
			<>
				<h3 className="video-title">{this.state.video.snippet.title}</h3>
				<div id="video-player" className="card">
					<iframe
						title="Video Player"
						src={`https://www.youtube.com/embed/${this.state.videoId}`}
					/>
					<div className="card-body">
						<div className="title-likes">
							<h5
								className="card-title"
								dangerouslySetInnerHTML={{
									__html: this.state.video.snippet.channelTitle,
								}}
							/>
							<div className="likes-container">
								<FontAwesomeIcon icon={faThumbsUp} color="grey" />
								{this.state.video.statistics.likeCount}
								<FontAwesomeIcon icon={faThumbsDown} color="grey" />
								{this.state.video.statistics.dislikeCount}
							</div>
						</div>
						<p
							className="card-text"
							dangerouslySetInnerHTML={{
								__html: this.state.video.snippet.description,
							}}
						/>
						<FontAwesomeIcon icon={faEye} color="grey" />
						<span className="views">
							{this.state.video.statistics.viewCount}
						</span>
					</div>
				</div>
			</>
		);
	}
}

export default VideoPlayer;
