import axios from '../config/Axios';

export const getDataFromRating = async () => {
    let response =  await axios.get('/rating');
    return response;
}

