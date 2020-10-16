import axios from "axios";
import api from "./index";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

// const loggedInUser = localStorage.getItem("loggedInUser");

// const storedUser = JSON.parse(loggedInUser || '""');

const getGithubToken = async () => {
  try {
    const githubToken = await api.get("/githubapi");
    console.log("gittoken:", githubToken.data.token);
    githubApi.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        config.headers = {
          Authorization: `Token ${githubToken.data.token}`,
        };
        return config;
      },
      function (error) {
        // Do something with request error
        console.error(error);
      }
    );
    return githubApi;
  } catch (err) {
    console.error(err);
  }
};

export default getGithubToken;
