import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions/index';

class Signin extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		console.log("Inside component will mount of signin");
	}
	componentDidMount() {
		console.log("inside component did mount");
		this.showLoaderIcon();
	}
	showLoaderIcon() {
		this.props.showLoader();
		setTimeout(this.loadAutoSuggestData.bind(this), 4000);
	}
	loadAutoSuggestData() {
		const url = 'Http://www.craftsvilla.com/v1/getAutosuggestion?term=sa';
		const _this = this;
		axios.get(url)
		.then(response => {
			console.log(response);
			this.props.hideLoader();
		})
		.catch(error => {
			console.log(error);
		});
	}
	render() {
		return (
			<div>This is signin component</div>
		);
	}
	componentWillUnMount() {
		console.log("Inside component will unmount of signin");
	}
}
export default connect(null, actions)(Signin);
