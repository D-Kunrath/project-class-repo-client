import axios from "axios";

const githubApi = axios.create({
  baseURL: "http://api.github.com",
});

const loggedInUser = localStorage.getItem("loggedInUser");

const storedUser = JSON.parse(loggedInUser || '""');

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (process.env) {
      config.headers = {
        Authorization: `Bearer ${storedUser.token}`,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    console.error(error);
  }
);

export default githubApi;
