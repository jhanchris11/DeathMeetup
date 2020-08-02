import axios from "../config/Axios";

export const getItems = async (getItemsEndpoint, page, limit, filter) => {
  return await axios.post(getItemsEndpoint, {
    filter,
    page,
    limit
  });
};

export const getItemsSize = async (getItemsSizeEndpoint, model) => {
  return await axios.get(getItemsSizeEndpoint, {
    params: {
      model
    }
  });
};
