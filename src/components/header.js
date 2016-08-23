import React, { Component } from 'react';
import ProgressBar from './progress-bar';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Header extends Component {
	componentWillMount() {
		console.log("Inside component will mount of header");
	}
	render() {
		return (
			<div>
				<ProgressBar autoIncrement={this.props.loading} increment={400}/>
				<nav className="navbar navbar-light bg-faded">
					<a className="navbar-brand" href="#">Authentication</a>
					<ul className="nav navbar-nav">
						<li className="nav-item active">
							<Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
						</li>
					</ul>
					<ul className="nav navbar-nav pull-xs-right">
						<li className="nav-item" key={1}>
							<Link to='/signin' className="btn btn btn-secondary">SignIn</Link>
						</li>
						<li className="nav-item" key={2}>
							<Link to='/signup' className="btn btn btn-secondary">SignUp</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
	componentWillUnMount() {
		console.log("Inside component will unmount of header");
	}
}
function mapStateToProps(state) {
	return { loading: state.loader.loading }
}
export default connect(mapStateToProps, actions)(Header);
