import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/searchbar.css';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	useEffect(() => {
		if (!term) {
			disableSearchButton();
		} else {
			enableSearchButton();
		}
	}, [term]);

	const disableSearchButton = () => {
		document
			.querySelector('#search-bar button')
			.setAttribute('disabled', 'true');
		document
			.querySelector('#search-bar button')
			.setAttribute('title', 'Por favor, digite algo no campo de busca');
	};

	const enableSearchButton = () => {
		document.querySelector('#search-bar button').removeAttribute('disabled');
		document.querySelector('#search-bar button').removeAttribute('title');
	};

	const onSubmit = (event) => {
		event.preventDefault();

		onFormSubmit(term);
	};

	return (
		<div id="search-bar">
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={term}
					onChange={(event) => setTerm(event.target.value)}
					placeholder="Pesquisar"
				/>
				<button type="submit">
					<FontAwesomeIcon icon={faSearch} color="grey" />
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
