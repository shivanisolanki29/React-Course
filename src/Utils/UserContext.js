import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});
// console.log("From UserContext");

export default UserContext;
