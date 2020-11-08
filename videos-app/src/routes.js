import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import VideoDetail from './pages/VideoDetail';

const Routes = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/video/:id" exact component={VideoDetail} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Routes;
