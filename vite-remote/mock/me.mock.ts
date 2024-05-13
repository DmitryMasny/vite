import { defineMock } from "vite-plugin-mock-dev-server";

export default defineMock({
  url: "/me",
  body: { firstname: "Peter", lastname: "Parker" },
});
