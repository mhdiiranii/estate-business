import mongoose, { Schema } from "mongoose";
import { AuthType } from "../types/user";

const UserSignUpSchema = new Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: false },
    email: { type: String, require: true },
    role: { type: String, enum: ["User", "Adimn"], default: "User"  },
    provider: { type: String, enum: ["local", "google"], default: "local" },
    userCode : {type : String , require : true , unique : true}
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model<AuthType>("User", UserSignUpSchema);
