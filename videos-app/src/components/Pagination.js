import React, { useEffect } from 'react';

const Pagination = (props) => {
	useEffect(() => {
		if (props.prevPageToken) {
			document.querySelector('#previousPageButton').removeAttribute('disabled');
		} else {
			document
				.querySelector('#previousPageButton')
				.setAttribute('disabled', 'true');
		}

		if (props.nextPageToken) {
			document.querySelector('#nextPageButton').removeAttribute('disabled');
		} else {
			document
				.querySelector('#nextPageButton')
				.setAttribute('disabled', 'true');
		}
	}, [props.nextPageToken, props.prevPageToken]);

	const nextPage = async () => {
		if (props.nextPageToken) {
			const customParams = {
				params: {
					q: props.searchTerm,
					pageToken: props.nextPageToken,
					maxResults: 6,
				},
			};
			await props.search(props.defaultSearchTerm, customParams);
		}
	};

	const previousPage = async () => {
		if (props.prevPageToken) {
			const customParams = {
				params: {
					q: props.searchTerm,
					pageToken: props.prevPageToken,
					maxResults: 6,
				},
			};
			await props.search(props.defaultSearchTerm, customParams);
		}
	};

	return (
		<nav className="d-flex justify-content-center">
			<ul className="pagination">
				<li className="page-item">
					<button
						id="previousPageButton"
						onClick={previousPage}
						className="page-link"
					>
						Anterior
					</button>
				</li>
				<li className="page-item">
					<button id="nextPageButton" onClick={nextPage} className="page-link">
						Próximo
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
