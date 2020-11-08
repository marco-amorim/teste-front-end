import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/searchbar.css';

const SearchBar = ({ onFormSubmit, onTop }) => {
	const [term, setTerm] = useState('');

	useEffect(() => {
		if (!term) {
			disableSearchButton();
		} else {
			enableSearchButton();
		}

		if (onTop) {
			document.querySelector('#search-bar input').removeAttribute('onfocus');
			document.querySelector('#search-bar').classList.add('slide-top');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [term]);

	const disableSearchButton = () => {
		document
			.querySelector('#search-bar button')
			.setAttribute('disabled', 'true');
	};

	const enableSearchButton = () => {
		document.querySelector('#search-bar button').removeAttribute('disabled');
	};

	const onSubmit = (event) => {
		event.preventDefault();

		onFormSubmit(term);
	};

	const welcomeAnimation = () => {
		let welcomeElement = document.querySelector('#welcome');
		let searchbarElement = document.querySelector('#search-bar');

		if (welcomeElement) {
			setTimeout(() => {
				welcomeElement.classList.add('fade-in');
				welcomeElement.classList.remove('d-none');
			}, 300);

			if (!searchbarElement.classList.contains('slide-top')) {
				searchbarElement.classList.add('slide-top');
			}
		}
	};

	return (
		<div id="search-bar">
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={term}
					onChange={(event) => setTerm(event.target.value)}
					placeholder="Pesquisar"
					onFocus={welcomeAnimation}
				/>
				<button type="submit">
					<FontAwesomeIcon icon={faSearch} color="grey" />
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
