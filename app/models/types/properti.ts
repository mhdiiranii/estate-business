import { Document } from "mongoose";
import React, { Dispatch, SetStateAction } from "react";

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

export interface LikeType extends Document {
  userId: string;
  propertiId: string;
}

type Coment = {
  userId: string;
  text: string;
};

export interface CommentType extends Document {
  propertiId: string;
  comments: Coment[];
}

interface price {
  min?: string;
  max?: string;
}

export interface FilterType {
  city?: string;
  property_type?: string;
  price?: price;
  area?: price;
  year_built?: string;
  sale_type?: string;
  rent?: price;
}

export interface SliderType {
  data?: PropertiType[];
  length?: number;
  operation?: boolean;
  page?: number;
  setPage?: Dispatch<SetStateAction<number>>;
  loading?: boolean;
  limit?: number | null;
}
