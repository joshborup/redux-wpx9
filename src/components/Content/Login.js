import React, { Component } from "react";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
	}

	render() {
		return (
			<div>
				<h1>Login!</h1>
				<input
					value={this.state.name}
					onChange={(e) => this.setState({ name: e.target.value })}
				/>
				<button onClick={() => this.props.login(this.state.name)}>
					Submit
				</button>
			</div>
		);
	}
}
