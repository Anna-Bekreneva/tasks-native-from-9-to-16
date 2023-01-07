import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'daf5c876';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axios.get(`https://omdbapi.com/?s=${title}&page=1&apikey=${key}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axios.get(`https://omdbapi.com/?s=${title}&type=${type}&page=1&apikey=${key}`)
    }
};


export default API;
