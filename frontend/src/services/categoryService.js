import axios from "../config/Axios";

export const getCategories = async () => {
  return await axios.get("/category");
};