import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);

    toast("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

// function setJwt(jwt) {
//   //With this we can set the headers on all kinds of http requests.
//   axios.defaults.headers.common["x-auth-token"] = jwt; // when ever we have a http request this token 'll be included.
// }

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  //setJwt,
};

export default http;
