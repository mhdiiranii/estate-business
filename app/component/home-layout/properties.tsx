"use client";

import ApiClient from "@/app/services/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { useEffect, useState } from "react";
import CustomSlider from "../slider/slider";
import { SliderType } from "@/app/models/types/properti";

const Properties = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        return setLimit(1);
      } else if (window.innerWidth < 1440) {
        return setLimit(2);
      } else if (window.innerWidth > 1440) {
        return setLimit(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div className="flex flex-col justify-between px-6">
        <h2 className="w-full text-left">Featured Properties</h2>
        <div className="flex flex-wrap justify-between gap-10 mt-3.5 mb-20">
          <p className="w-2/3 max-md:w-full">
            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more
            information.
          </p>
          <Button type="text" className="my-btn dark:!bg-grey-15 max-md:!w-full dark:hover:!bg-grey-10 dark:!text-white">
            View All Properties
          </Button>
        </div>
      </div>
      <CustomSlider data={data?.data} length={data?.length} page={page} setPage={setPage} loading={isLoading} limit={limit} />
    </section>
  );
};

export default Properties;
