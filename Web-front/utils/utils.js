function calculateTimeDiff(currentTimeStamp, postTimeStamp) {
  // convert timestamps into dates
  const dateFuture = new Date(currentTimeStamp);
  const dateNow = new Date(postTimeStamp);
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  var diffList = [];
  if (days > 0) {
    diffList.push(days);
  } else {
    diffList.push(0);
  }

  diffList.push(hours);
  diffList.push(minutes);
  return diffList;
}

export function getTimeDisplay(currentTimeStamp, postTimeStamp) {
  const diffList = calculateTimeDiff(currentTimeStamp, postTimeStamp);

  const days = diffList[0];
  const hours = diffList[1];
  const minutes = diffList[2];
  var result = "";
  if (days >= 720) {
    result = Math.floor(days / 365) + " years ago";
  } else if (days > 365) {
    result = Math.floor(days / 365) + " year ago";
  } else if (days >= 61) {
    result = Math.floor(days / 30.5) + " months ago";
  } else if (days >= 30) {
    result = Math.floor(days / 30.5) + " month ago";
  } else if (days > 1) {
    result = days + " days ago";
  } else if (days == 1) {
    result = days + " day ago";
  } else if (hours > 1) {
    result = hours + " hours ago";
  } else if (hours == 1) {
    result = hours + " hour ago";
  } else if (minutes > 1) {
    result = minutes + " minutes ago";
  } else {
    result = "1 minute ago";
  }

  return result;
}

export function stripHTMLTags(text) {
  const regex = /(<([^>]+)>)/gi;
  return text.replace(regex, "");
}
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
