import * as actionTypes from './actionTypes';
let lastId = 0;

function reducer(state = [], action) {
	switch (action.type) {
		case actionTypes.BUG_ADDED:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resolved: false,
				},
			];

		case actionTypes.BUG_REMOVED:
			return state.filter((a) => a.id !== action.payload.id);

		case actionTypes.BUG_RESOLVED:
			return state.map((n) => {
				n.id === action.payload.id
					? {...n,resoveld:true}
					: n;
			});

		default:
			return state;
	}
}

export default reducer;
