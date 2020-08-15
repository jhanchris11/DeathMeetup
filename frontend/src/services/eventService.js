import axios from '../config/Axios';

export const getEventById = async (eventId) => {
	return await axios.get(`/event/${eventId}`);
};
export const updateLikeorDislike = async (eventId, data) => {
	return await axios.put(`/event/${eventId}`, data);
};
