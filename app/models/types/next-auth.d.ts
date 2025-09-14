import { MyUser } from "../models/types/user";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  type User = MyUser;
  interface Session {
    user: MyUser;
  }
}

declare module "next-auth/jwt" {
  type JWT = MyUser;
}
