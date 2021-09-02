import configureStore from './store/configureStore';
import { bugAdded , bugRemoved, bugResolved } from "./store/bug";

const store = configureStore();

const unsub = store.subscribe(() => {
	console.log('changed', store.getState());
});

store.dispatch(bugAdded("bug-1"));
store.dispatch(bugAdded("bug-2"));


store.dispatch(bugResolved(1));

