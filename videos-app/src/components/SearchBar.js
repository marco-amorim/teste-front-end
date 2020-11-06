import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/searchbar.css';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

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
