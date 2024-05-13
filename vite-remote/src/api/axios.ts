import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://jsonplaceholder.org/",
  headers: { "X-Custom-Header": "foobar" },
});
