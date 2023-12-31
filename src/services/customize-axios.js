import axios from "axios";



const instance = axios.create({
    baseURL: 'https://reqres.in'
  });

instance.interceptors.response.use(function (response) {
  return response.data ? response.data : { statusCode: response.status};
}, function (error) {
  let res = {};
  if (error.response) {
    //Request made and server responded
    res.data = error.response.data;
    res.status = error.response.status;
    res.headers = error.response.headers;
  } else if (error.request) {
    //The request was made but no response was received
    console.log(error.request);
  } else {
    //Something happened in setting up the request that triggered an error
    console.log('Error', error.message);
  }
  return res;
    // return Promise.reject(error);
});



export default instance;