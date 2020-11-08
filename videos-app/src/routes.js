import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoNotFound from './components/VideoNotFound';
import Landing from './pages/Landing';
import VideoDetail from './pages/VideoDetail';

const Routes = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/video/:id" exact component={VideoDetail} />
					<Route path="/video/status/404" exact component={VideoNotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Routes;
