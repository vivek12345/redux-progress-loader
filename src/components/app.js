import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class App extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		console.log("Inside component will mount of app");
	}
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
	componentWillUnMount() {
		console.log("Inside component will unmount of header");
	}
}
export default App;
