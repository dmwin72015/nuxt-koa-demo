import axios from "axios";

const request = axios.create({
  baseURL: "/api/",
  timeout: 2000,
  withCredentials: true // 跨域cookie携带
});

request.interceptors.request.use(
  config => {
    const logText = process.server
      ? "服务端"
      : process.client ? "客户端" : "未知";

    console.log(`请求来自类型 >>>>> ${logText}`);

    if (process.server) {
      config.baseURL = "http://localhost:9800/api/";
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default request;
