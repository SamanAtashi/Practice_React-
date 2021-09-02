import * as actionTypes from './actionTypes';

export const bugAdded = (desc) => ({
	type: actionTypes.BUG_ADDED,
	payload: {
		description: desc,
	},
});

export const bugRemoved = (id) => ({
	type: actionTypes.BUG_REMOVED,
	payload: {
		id,
	},
});

export const bugResolved = (id) => ({
	type: actionTypes.BUG_RESOLVED,
	payload: {
		id,
	},
});
