import axios from "axios";
export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  console.log(method, url, bodyData, "hello world");
  return axiosInstance({
    method,
    url,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
