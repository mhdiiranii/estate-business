import z from "zod";
import { AuthSchema } from "../zod/AuthSchema";
import User from "../mongoose/User";

export type AuthType = z.infer<typeof AuthSchema>;
export type RegisterUser = z.infer<typeof User>;

export type LogInType = {
  username?: string;
  password?: string;
};

export type SignUpType = {
  email?:string,
  username?: string;
  password?: string;
};


export interface MyUser {
  email:string,
  username:string,
  // password:string,
  role:'user',
  provider:"local"|"google",
  userCode:string,
}
