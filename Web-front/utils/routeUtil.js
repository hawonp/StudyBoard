import axios from "axios";
//This file consists of the axios instance
//Testing
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

//Deployment
// const axiosInstance = axios.create({
//   baseURL: "https://backend.studyboard.info",
// });

export default axiosInstance;
