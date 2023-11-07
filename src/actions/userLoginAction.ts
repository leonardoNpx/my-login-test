"use server";

import { LoginType } from "@/schema/login";
import axios from "axios";
// import { userLogin } from "@/services/mainApi/login";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export const UserLoginAction = async (user: LoginType) => {
  try {
    const response = await signIn("credentials", {
      user: user,
      redirect: false,
      callbackUrl: "/profile",
    });
    if (response?.error) {
      throw new Error(`Error: ${response.status}`);
    }
    console.log(response?.status);
  } catch (error) {
    console.log("Error:", error);
  }
};
