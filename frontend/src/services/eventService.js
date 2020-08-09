import axios from "../config/Axios";

export const getEventById = async (eventId) => {
  return await axios.get(`/event/${eventId}`);
};