import React, { Component } from 'react';
import classNames from 'classnames';
import axios from 'axios';
class ProgressBar extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		console.log("Inside component will mount of progress bar");
		this.state = {
			percent: this.props.percent,
			loader: false
		};
	}
	componentDidMount() {
		console.log("Inside component did mount of progress bar");
		this.handleProps(this.props);
	}
	componentWillReceiveProps(nextProps) {
		if (this.interval) {
			clearInterval(this.interval);
		}
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.handleProps(nextProps);
	}
	componentWillUnmount() {
		console.log("Inside progress bar component will unmount method");
		if(this.interval) {
			clearInterval(this.interval);
		}
	}
	handleProps(props) {
		if(props.autoIncrement) {
			this.interval = setInterval(this.increment.bind(this), props.interval);
		} else {
			if(this.state.loader) {
				this.setState({
					percent: 99.99
				}, () => {
					this.timeout = setTimeout(() => {
						this.setState({
							percent: -1,
							loader: false
						});
					}, 400);
				});
			}
		}
	}
	increment() {
		let { percent, loader } = this.state;
		loader = true;
		percent = percent +  (Math.random() + 1-Math.random());
		percent = percent < 99 ? percent : 99;
		if(percent == 99) {
			clearInterval(this.interval);
			loader = false;
		}
		this.setState({ percent, loader });
	}
	render() {
		let { className, onTop } = this.props;
		let { percent } = this.state;
		className = classNames('react-progress-bar', className, {
			'react-progress-on-top': onTop,
			'react-progress-bar-hidden': (percent < 0 || percent > 100)
		});
		let style = {
			width: (percent < 0 ? 0 : percent) + '%'
		};
		return (
			<div className={className}>
				<div className='react-progress-bar-percent' style={style}>
				</div>
			</div>
		);
	}
}
ProgressBar.propTypes = {
	className: React.PropTypes.string,
	autoIncrement: React.PropTypes.bool,
	interval: React.PropTypes.number,
	percent: React.PropTypes.number,
	onTop: React.PropTypes.bool
};
ProgressBar.defaultProps = {
	autoIncrement: false,
	interval: 400,
	percent: -1,
	onTop: true
}

export default ProgressBar;
