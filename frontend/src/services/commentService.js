import axios from '../config/Axios';

export const commentService = async (data) => {
	return await axios.post('/comment', data);
};
export const getComments = async () => {
	return await axios.get('/comment');
};
