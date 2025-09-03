"use client";

import ApiClient from "@/app/services/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { useState } from "react";
import CustomSlider from "../slider/slider";
import { PropertiType, SliderType } from "@/app/models/types/properti";

const Properties = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const { data, isLoading } = useQuery<SliderType>({
    queryKey: ["properti", page, limit],
    queryFn: async () =>
      await ApiClient()
        .getPropertiPage(page, limit)
        .then((res) => res.data),
    staleTime: 1000 * 60,
  });


  return (
    <section className="container-section">
      <h2 className="w-full text-left">Featured Properties</h2>
      <div className="flex justify-between gap-10 mt-3.5 mb-20">
        <p className="w-2/3">
          Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more
          information.
        </p>
        <Button type="text" className="my-btn dark:!text-white dark:!bg-grey-10">
          View All Properties
        </Button>
      </div>
      <CustomSlider data={data?.data} length={data?.length} page={page} setPage={setPage} loading={isLoading}/>
    </section>
  );
};

export default Properties;
