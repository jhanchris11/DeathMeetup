import axios from '../config/Axios';

export const SignInUser = async (user) => {
    return await axios.post('/user/signin', user);
}
export const SignUpUser = async (user) => {
    return await axios.post('/user/signup', user);
} 