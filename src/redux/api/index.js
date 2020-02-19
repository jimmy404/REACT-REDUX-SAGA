import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=222d9df6';

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
})
