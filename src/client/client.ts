import axios from 'axios';

const CarClient = axios.create({
  baseURL: 'https://spokanemercedes.com' + '/api/json/vehicles/',
});

export default CarClient;
