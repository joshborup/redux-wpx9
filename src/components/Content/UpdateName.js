import React, { Component } from "react";
import { connect } from "react-redux";
import { updateName } from "../../ducks/reducer";

class UpdateName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
	}

	render() {
		const { updateName } = this.props;
		return (
			<div>
				<h1>Update your name!</h1>
				<input
					value={this.state.name}
					onChange={(e) => this.setState({ name: e.target.value })}
				/>
				<button onClick={() => updateName(this.state.name)}>
					Submit
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = {
	updateName: updateName
};

export default connect(
	null,
	mapDispatchToProps
)(UpdateName);
