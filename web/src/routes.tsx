import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import DonePoint from './pages/DonePoint';

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={Home} path="/" exact />
			<Route component={CreatePoint} path="/create-point" />
			<Route component={DonePoint} path="/concluido" />
		</BrowserRouter>
	);
};

export default Routes;