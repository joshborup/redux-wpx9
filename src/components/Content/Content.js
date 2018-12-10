import React, { Component } from "react";
import { loginUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import Login from "./Login";

class Content extends Component {
	render() {
		const { user, loginUser } = this.props;
		return (
			<div className="content">
				<div className="d-c">
					<div className="login-container">
						{user ? (
							`${user} is super cool`
						) : (
							<Login login={loginUser} />
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = {
	loginUser: loginUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content);
