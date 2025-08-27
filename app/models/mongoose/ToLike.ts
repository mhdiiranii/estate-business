import mongoose, { Schema } from "mongoose";
import { LikeType } from "../types/properti";

const ToLikeSchema: Schema = new Schema(
  {
    userId: { type: String, require: true },
    propertiId: { type: String, require: true },
    liked: { type: Boolean, require: true }
  },
  { timestamps: true }
);

export default mongoose.models.Like || mongoose.model<LikeType>("Like", ToLikeSchema);  
