import { toast } from 'react-toastify';

const errorHandler = err => {
    if (err.response) {
        // client received an error response (5xx, 4xx)
        if (err.response.status > 490) {
            toast.error('An api error occurred.', 'error', 5000);
            return
        }
        if(err.response.data.message) {
            toast.error(err.response.data.message, 'error', 5000);
        } else {
            toast.error('User error.', 'error', 5000);
        }
    } else if (err.request) {
        // client never received a response, or request never left
        // throw new Error(`No server response.`);
        toast.error('No server response.', 'error', 5000);
    } else {
        // throw new Error(`Unknown error occurred.`);
        console.log(err);
        toast.error('Unknown error occurred.', 'error', 5000);
    }
}

export default errorHandler;
