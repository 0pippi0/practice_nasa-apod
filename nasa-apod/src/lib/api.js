import axios from 'axios';


export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=isuJgZVLOc8YFOC7FGF4wi7ZCoXsHUSp1pOaAjs7&date=${date}`);
}
