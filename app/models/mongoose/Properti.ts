import mongoose, { Schema} from "mongoose";
import { PropertiType } from "../types/properti";

const PropertiSchema : Schema = new Schema(
  {
    name: { type: String, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    rooms: { type: String, required: true },
    bathrooms: { type: String, required: true },
    year_built: { type: String, required: true },
    sale_type: { type: String, enum: ["Sale", "Rent"], required: true },
    price: { type: String, default: null },
    rent: { type: String, default: null },
    address: { type: String, required: true },
    property_type: { type: String, required: true },
    features: { type: [String], default: [] },
    images: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Propertie || mongoose.model<PropertiType>("Propertie", PropertiSchema);