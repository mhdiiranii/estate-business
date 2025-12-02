import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "./lib/mongoClient";
import User from "./models/mongoose/User";
import bcrypt from "bcryptjs";
import { LogInSchema } from "./models/zod/LogIn";
import { MyUser } from "./models/types/user";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const parsed = await LogInSchema.safeParseAsync(credentials);
        if (!parsed.success) return null;

        const { username, password } = parsed.data;
        if (!credentials.password && !credentials.username) return null;

        try {
          await dbConnect();

          const user = await User.findOne({ username });
          if (!user) {
            return null;
          }

          const validPass = await bcrypt.compare(password, user.password);
          if (!validPass) return null;

          return {
            username: user.username,
            userCode: user.userCode,
            email: user.email,
            role: user.role,
            provider: user.provider,
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        const u = user as MyUser;
        token.userCode = u.userCode;
        token.username = u.username;
        token.role = u.role;
        token.provider = u.provider;
        token.email = u.email;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.username = token.username as string;
        session.user.role = token.role as "user";
        session.user.userCode = token.userCode as string;
        session.user.provider = token.provider as "local" | "google";
        session.user.email = token.email as string;
        session.user.sub = token.sub;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return baseUrl;
    },
  },
  pages: {
    signIn: "(page)/login",
  },
});
