const INITIAL_STATE = {
	user: ""
};

const LOGIN_USER = "LOGIN_USER";
const UPDATE_USER = "UPDATE_USER";

// export default function reducer(state = INITIAL_STATE, action) {
// 	switch (action.type) {
// 		case LOGIN_USER:
// 			return Object.assign({}, state, { user: action.payload });
// 		case UPDATE_USER:
// 			return Object.assign({}, state, { user: action.payload });
// 		default:
// 			return state;
// 	}
// }

export default function reducer(state = INITIAL_STATE, action) {
	if (action.type === LOGIN_USER) {
		return Object.assign({}, state, { user: action.payload });
	} else if (action.type === UPDATE_USER) {
		return Object.assign({}, state, { user: action.payload });
	} else {
		return state;
	}
}

export function loginUser(name) {
	return {
		type: LOGIN_USER,
		payload: name
	};
}

export function updateName(name) {
	return {
		type: UPDATE_USER,
		payload: name
	};
}
