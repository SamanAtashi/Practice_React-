import store from './store';
import { bugAdded , bugRemoved, bugResolved } from "./actions";


const unsub = store.subscribe(() => {
	console.log('changed', store.getState());
});

store.dispatch(bugAdded("bug-1"));
store.dispatch(bugAdded("bug-2"));


store.dispatch(bugResolved(1));

