import axios from 'axios'

const axiosinstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default axiosinstance