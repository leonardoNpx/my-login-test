import { UserProps } from "@/models/user";
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
      async authorize(credentials) {
        try {
          if (!credentials) {
            return null;
          }

          const bodyContent = {
            email: credentials?.email,
            password: credentials?.password,
          };

          const response = await userLogin(bodyContent);

          const user: UserProps = await response.data;

          if (!user) {
            throw new Error("Email does not exist");
          }

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error: any) {
          console.log("Error", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ token, session }) {
      if ("user" in token && token.user) {
        const user = token.user as UserProps;
        session.user = {
          ...session.user,
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.avatar,
          role: user.role,
          nickname: user.nickname,
          refreshToken: user.refresh_token,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
};
