import mongoose, { Schema} from "mongoose";
import { PropertiType } from "../types/properti";

const PropertiSchema : Schema = new Schema(
  {
    name: { type: String, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: Number, required: true },
    rooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    year_built: { type: Number, required: true },
    sale_type: { type: String, enum: ["Sale", "Rent"], required: true },
    price: { type: Number, default: null },
    rent: { type: Number, default: null },
    address: { type: String, required: true },
    property_type: { type: String, required: true },
    features: { type: [String], default: [] },
    images: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Properti || mongoose.model<PropertiType>("Properti", PropertiSchema);