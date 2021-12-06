import axios from "axios";
//This file consists of the axios instance
//Testing
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:9090",
// });

//Deployment
const axiosInstance = axios.create({
  baseURL: "https://www.backend.studyboard.info",
});

export default axiosInstance;
