import React, { Component } from "react";

export default class UserName extends Component {
	render() {
		return <div>{this.props.user || "Please Login"}</div>;
	}
}
