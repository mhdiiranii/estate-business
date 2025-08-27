import mongoose,{ Schema } from "mongoose";
import { CommentType } from "../types/properti";


const AddCommentSchema = new Schema(
  {
    userId: { type: String, required: true },   
    text: { type: String, required: true },     
  },
  { timestamps: true }
);


const CommentsSchema = new Schema(
  {
    propertiId: { type: String, require: true },
    comments: { type: [AddCommentSchema], require: true },
  },
  { timestamps: true }
);


export default mongoose.models.Comment || mongoose.model<CommentType>('Comment',CommentsSchema);
