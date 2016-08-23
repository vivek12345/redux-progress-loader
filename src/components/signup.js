import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions/index';

class SignUp extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	}
	handleFormSubmit({ email, password }) {
		this.props.signupUser({ email, password });
	}
	renderAlert() {
		if(this.props.errorMessage) {
			return (
				<div className='alert alert-danger'>
					{ this.props.errorMessage }
				</div>
			);
		}
	}
	render() {
		const { handleSubmit, fields } = this.props;
		return (
			<div className="container">
				<form className="col-xs-5" onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
					<div>
						<label htmlFor="email">Email:</label>
						<input type="text" className="form-control" id="email" placeholder="Enter Email" { ...fields.email }/>
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input type="password" className="form-control" id="password" placeholder="Enter Password" { ...fields.password }/>
					</div>
					{ this.renderAlert() }
					<button className="btn btn-primary">SignUp</button>
				</form>
			</div>
		);
	}
}
function validate(values) {
	const errors = {}
	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}
	if (!values.password) {
		errors.password = 'Required'
	} else if (values.password.length<5) {
		errors.password = 'The password should be atleast 5 Characters long'
	}
	return errors
}

function mapStateToProps(state) {
	return {
		errorMessage: state.auth.error
	}
}
export default reduxForm({
	form: 'signup',
	fields: ['email', 'password'],
	validate
}, mapStateToProps, actions)(SignUp);
