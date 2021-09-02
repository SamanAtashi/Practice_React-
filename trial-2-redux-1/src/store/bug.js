// Action Types
const BUG_ADDED = "bugAdded"
const BUG_REMOVED = "bugRemoved"
const BUG_RESOLVED = "bugResolved"

// Action Creators
export const bugAdded = (desc) => ({
	type: BUG_ADDED,
	payload: {
		description: desc,
	},
});

export const bugRemoved = (id) => ({
	type: BUG_REMOVED,
	payload: {
		id,
	},
});

export const bugResolved = (id) => ({
	type: BUG_RESOLVED,
	payload: {
		id,
	},
});

// Reducer
let lastId = 0;

export default function reducer(state = [], action) {
	switch (action.type) {
		case BUG_ADDED:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resolved: false,
				},
			];

		case BUG_REMOVED:
			return state.filter((a) => a.id !== action.payload.id);

		case BUG_RESOLVED:
			return state.map((n) => {
				n.id === action.payload.id
					? {...n,resoveld:true}
					: n;
			});

		default:
			return state;
	}
}
