import axios from "axios";
import config from "@/config";

export const api = axios.create({
  baseURL: config.backendUrl,
});

// Example API call
// export const getUsers = () => {
//   return api.get("/users");
// };
