import React, { Component } from "react";
import Login from "./Login";

export default class Content extends Component {
	render() {
		return (
			<div className="content">
				<div className="d-c">
					{this.props.user ? (
						`${this.props.user} is super cool`
					) : (
						<Login />
					)}
				</div>
			</div>
		);
	}
}
