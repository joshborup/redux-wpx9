const INITIAL_STATE = {
	user: "",
	password: ""
};

const LOGIN_USER = "LOGIN_USER";

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case LOGIN_USER:
			return Object.assign({}, state, { user: action.payload });
		default:
			return state;
	}
}

export function loginUser(user) {
	return {
		type: LOGIN_USER,
		payload: user
	};
}
