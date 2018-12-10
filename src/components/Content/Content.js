import React, { Component } from "react";
import Login from "./Login";

export default class Content extends Component {
	render() {
		return (
			<div className="content">
				<div className="d-c">
					<div>
						{this.props.user ? (
							`${this.props.user} is super cool`
						) : (
							<Login login={this.props.login} />
						)}
					</div>
				</div>
			</div>
		);
	}
}
