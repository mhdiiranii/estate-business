import { FilterType } from "../models/types/properti";



export default function DynamicFilter(props: FilterType) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: any = {};

  if (props.city) filter.city = props.city;
  if (props.property_type) filter.property_type = props.property_type;
  if (props.area) filter.area = props.area;
  if (props.year_built) filter.year_built = props.year_built;
  if (props.sale_type) filter.sale_type = props.sale_type;

  if (props.price) {
    filter.price = {};
    if (props.price.min !== undefined) filter.price.$gte = props.price.min;
    if (props.price.max !== undefined) filter.price.$lte = props.price.max;
  }

  if (props.rent) {
    filter.rent = {};
    if (props.rent.min !== undefined) filter.rent.$gte = props.rent.min;
    if (props.rent.max !== undefined) filter.rent.$lte = props.rent.max;
  }

  if (props.area) {
    filter.area = {};
    if (props.area.min !== undefined) filter.area.$gte = props.area.min;
    if (props.area.max !== undefined) filter.area.$lte = props.area.max;
  }

  return filter;
}
