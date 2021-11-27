import Cookies from "universal-cookie";

export const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    console.log("newAuthRes: ", newAuthRes);
    console.log("new auth token", newAuthRes.id_token);

    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};

// Debugging tool
// Following is used to intercept axios calls to see our requests
// // Add a request interceptor
// axiosInstance.interceptors.request.use((request) => {
//   console.log("Starting Request", JSON.stringify(request, null, 2));
//   return request;
// });

// axiosInstance.interceptors.response.use((response) => {
//   console.log("Response:", JSON.stringify(response, null, 2));
//   return response;
// });
