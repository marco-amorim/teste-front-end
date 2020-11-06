import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';

const Routes = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Landing} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Routes;
