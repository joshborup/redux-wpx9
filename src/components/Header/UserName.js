import React, { Component } from "react";
import { connect } from "react-redux";
class UserName extends Component {
	render() {
		return <div>{this.props.frank || "Please Login"}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		frank: state.user
	};
};

export default connect(mapStateToProps)(UserName);
