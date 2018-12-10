import React, { Component } from "react";
import UserName from "../Header/UserName";

export default class Apply extends Component {
	render() {
		return (
			<div>
				Special Promotions for:
				<UserName user={this.props.user} />
			</div>
		);
	}
}
