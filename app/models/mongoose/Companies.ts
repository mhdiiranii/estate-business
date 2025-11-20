import mongoose, { Schema } from "mongoose";
import { CompaniesType } from "../types/properti";

const CompanieSchema: Schema = new Schema({
  company: { type: String, required: true },
  since: { type: String, required: true },
  domain: { type: String, required: true },
  category: { type: String, required: true },
  website: { type: String, required: true },
  testimonial: { type: { String }, required: true },
});

export default mongoose.models.Companie || mongoose.model<CompaniesType>("Companie", CompanieSchema);
