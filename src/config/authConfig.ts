import { Userprops } from "@/models/user";
import { userLogin } from "@/services/mainApi/login";
import { AuthOptions } from "next-auth";

import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "text",
        },
      },
      authorize: async (credentials) => {
        try {
          const response = await userLogin(credentials);

          const user = response.data;
          console.log(user);

          if (user) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
};
