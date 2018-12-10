import React, { Component } from "react";
import { connect } from "react-redux";

class UserName extends Component {
	render() {
		return <div>{this.props.user || "Please Login"}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(UserName);
