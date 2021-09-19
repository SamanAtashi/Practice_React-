import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://my-burger-react-59aa2-default-rtdb.firebaseio.com/',
});

export default instance;
