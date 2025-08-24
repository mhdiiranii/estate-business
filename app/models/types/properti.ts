import { Document } from "mongoose";

export interface PropertiType extends Document {
  name: string;
  province: string;
  city: string;
  area: number;
  rooms: number;
  bathrooms: number;
  year_built: number;
  sale_type: "Sale" | "Rent";
  price?: number | null;
  rent?: number | null;
  address: string;
  property_type: string;
  features: string[];
  images: string[];
}