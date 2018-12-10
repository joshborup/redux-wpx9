import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { loginUser } from "../../ducks/reducer";

class Content extends Component {
	render() {
		const { loginUser } = this.props;
		return (
			<div className="content">
				<div className="d-c">
					{this.props.user ? (
						`${this.props.user} is super cool`
					) : (
						<Login login={loginUser} />
					)}
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
