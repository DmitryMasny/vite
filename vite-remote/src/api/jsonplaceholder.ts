import { axios } from "api/axios.ts";

export const getUser = () => {
  return axios.get("/users/1");
};

export const getList = () => {
  return axios.get("/posts");
};
