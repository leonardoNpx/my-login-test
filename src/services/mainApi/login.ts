import { Userprops } from "@/models/user";
import baseApi from "./config";

export const userLogin = (user: any) =>
  baseApi.post("login", {
    user: user,
  });
