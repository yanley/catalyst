import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getJobs = () => {
    return axios.get(`${apiUrl}/jobadder`);
};

