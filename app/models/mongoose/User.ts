import mongoose , { Schema } from "mongoose";
import { AuthType } from "../types/user";


const UserSignUpSchema = new Schema ({
  userName : {type : String , require: true},
  password : {type : String , require: false},
  email : {type : String , require : true}
})


export default mongoose.models.User || mongoose.model<AuthType>("User",UserSignUpSchema); 