import React, { Component } from 'react'
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/app';
import Signin from './components/signin';
import Signup from './components/signup';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDom.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
			</Route>
		</Router>
	</Provider>
	,document.querySelector('.main-container'));
