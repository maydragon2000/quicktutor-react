import axios from "axios";

axios.defaults.baseURL = `/api`;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
