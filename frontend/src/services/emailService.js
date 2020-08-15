import axios from '../config/Axios';

export const SendEmail = async (data) => {
	return await axios.post('/email', data);
};
