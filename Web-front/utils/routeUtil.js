import axios from "axios";
//This file consists of the axios instance
//Testing
const axiosInstance = axios.create({
  baseURL: "http://localhost:9090",
});

//Deployment
// const axiosInstance = axios.create({
//   baseURL: "https://backend.studyboard.info",
// });

// Use the code below to check the request that's being sent
// axiosInstance.interceptors.request.use(request => {
//   console.log('Starting Request', JSON.stringify(request, null, 2))
//   return request
// })

// axiosInstance.interceptors.response.use(response => {
//   console.log('Response:', JSON.stringify(response, null, 2))
//   return response
// })

export default axiosInstance;
