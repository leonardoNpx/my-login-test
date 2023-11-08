import baseApi from "./config";
import { UserLoginProps } from "@/models/user";

export const userLogin = (user: UserLoginProps) =>
  baseApi.post("login", {
    user: user,
  });
