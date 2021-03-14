import axios from 'axios';
//https://api.hgbrasil.com/weather?key=e559e77c&lat=-23.682&lon=-46.875

export const key = 'e559e77c';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;