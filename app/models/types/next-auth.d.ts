import { MyUser } from "../models/types/user";

declare module "next-auth" {
  type User = MyUser;
  interface Session {
    user: MyUser;
  }
}

declare module "next-auth/jwt" {
  type JWT = MyUser;
}
