import { UserProps } from "@/models/user";
import type { User } from "next-auth";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT extends UserProps {
    iat: number;
    exp: number;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      role: string;
      nickname: string;
      refreshToken: string;
    };
  }
}
