import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://65.1.40.113:8000'
});

export default instance;

//baseURL: 'http://31.187.75.117:8989'
