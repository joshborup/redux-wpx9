import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import UpdateName from "./UpdateName";
import { loginUser } from "../../ducks/reducer";

class Content extends Component {
	render() {
		const { loginUser, user } = this.props;
		return (
			<div className="content">
				<div className="d-c">
					<div className="login-container">
						{user ? (
							<div>
								{`${user} is super cool`}
								<UpdateName />
							</div>
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
