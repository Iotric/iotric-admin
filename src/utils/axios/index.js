import axios from 'axios'

const axiosinstance = axios.create({
  baseURL: "https://mocki.io/v1",
});

export default axiosinstance