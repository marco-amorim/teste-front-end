import React from 'react';

const Pagination = (props) => {
	const nextPage = () => {
		if (props.nextPageToken) {
			document.querySelector('#nextPageButton').removeAttribute('disabled');
			const customParams = {
				params: {
					q: props.searchTerm,
					pageToken: props.nextPageToken,
				},
			};
			props.search(props.defaultSearchTerm, customParams);
		} else {
			document
				.querySelector('#nextPageButton')
				.setAttribute('disabled', 'true');
		}
	};

	const previousPage = () => {
		if (props.prevPageToken) {
			document.querySelector('#previousPageButton').removeAttribute('disabled');
			const customParams = {
				params: {
					q: props.searchTerm,
					pageToken: props.prevPageToken,
				},
			};
			props.search(props.defaultSearchTerm, customParams);
		} else {
			document
				.querySelector('#previousPageButton')
				.setAttribute('disabled', 'true');
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
