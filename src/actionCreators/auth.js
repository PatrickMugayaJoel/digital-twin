import axios from 'axios';
import { toast } from 'react-toastify';
import { REGISTER } from '../actionTypes';
import errorHandler from '../utils/apiError';

export const register = (body, props) => dispatch => {

    axios.post(`${process.env.REACT_APP_API_SERVER}/auth/register`,body)
    .then(response => {
        toast.success('Logged In Successfully', 'success', 5000);
        localStorage.setItem("user_token", response.data.user.token);
        localStorage.setItem("username", response.data.user.username);
        dispatch({
            type: REGISTER,
            payload: response.data
        });
        // props.history.push('/projects');
        window.location.href = '/projects';
    })
    .catch(errorHandler);
}
