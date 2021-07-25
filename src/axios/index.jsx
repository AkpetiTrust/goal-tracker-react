import axios from "axios";

const instance = axios.create({
  baseURL: "https://goal-manager-api.herokuapp.com/api",
});

const token = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : "";

instance.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};

export default instance;
