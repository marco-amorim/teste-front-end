import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);
	const [nextPageToken, setNextPageToken] = useState('');

	useEffect(() => {
		if (defaultSearchTerm) {
			search(defaultSearchTerm);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [defaultSearchTerm]);

	const search = async (term) => {
		let response;
		console.log(term);
		if (nextPageToken === '') {
			response = await youtube.get('/search', {
				params: {
					q: term,
				},
			});
		} else {
			response = await youtube.get('/search', {
				params: {
					q: term,
					pageToken: nextPageToken,
				},
			});
		}

		setNextPageToken(response.data.nextPageToken);
		setVideos(() => {
			return [...videos, ...response.data.items];
		});
	};

	return [videos, search];
};

export default useVideos;
