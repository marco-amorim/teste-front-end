import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);
	const [nextPageToken, setNextPageToken] = useState('');
	const [prevPageToken, setPrevPageToken] = useState('');

	useEffect(() => {
		if (defaultSearchTerm) {
			search(defaultSearchTerm);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [defaultSearchTerm]);

	const search = async (term, customParams) => {
		console.log(term);

		const response = await youtube.get('/search', customParams);

		if (response.data.nextPageToken) {
			setNextPageToken(response.data.nextPageToken);
		} else {
			setNextPageToken('');
		}

		if (response.data.prevPageToken) {
			setPrevPageToken(response.data.prevPageToken);
		} else {
			setPrevPageToken('');
		}

		setVideos(response.data.items);
	};

	return [search, nextPageToken, prevPageToken, videos];
};

export default useVideos;
