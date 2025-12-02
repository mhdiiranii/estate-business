"use client";

import ApiClient from "@/app/services/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { CompaniesType, PropertiType, SliderType } from "@/app/models/types/properti";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import SkeletonSlider from "../framer/skeletonSlider";
import { MdBathroom, MdBedroomParent, MdOutlineApartment } from "react-icons/md";
import Image from "next/image";

interface propsType {
  query: string;
  title: string;
  head: string;
  viewBtn?: boolean;
}
interface getDataType {
  query: string;
  limit: number | null;
  page: number;
}

const Slider = ({ query, title, head, viewBtn = true }: propsType) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        return setLimit(1);
      } else if (window.innerWidth < 1440) {
        return setLimit(2);
      } else if (window.innerWidth > 1440) {
        return setLimit(() => (query == "companies" ? 2 : 3));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  async function getData({ query, page, limit }: getDataType) {
    if (query == "properti") {
      return await ApiClient()
        .getProperti(page, limit)
        .then((res) => res.data);
    } else {
      return await ApiClient()
        .getCompanies(page, limit)
        .then((res) => res.data);
    }
  }

  const { data, isLoading } = useQuery<SliderType>({
    queryKey: [query, page, limit],
    queryFn: async () => await getData({ query, page, limit }),
    staleTime: 1000 * 60,
  });

  const increment = () => {
    if (setPage) {
      setPage((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (setPage) {
      setPage((prev) => prev - 1);
    }
  };

  if (query == "properti") {
    return (
      <section className="container-section">
        <div className="flex w-full flex-col justify-between px-6">
          <h2 className="w-full text-left">{head}</h2>
          <div className="flex  max-md:flex-wrap justify-between gap-10 mt-3.5 mb-20">
            <p className="w-full max-md:w-full">{title}</p>
            {viewBtn && (
              <Button type="text" className="my-btn dark:!bg-grey-15 max-md:!w-full dark:hover:!bg-grey-10 dark:!text-white">
                View All Properties
              </Button>
            )}
          </div>
        </div>
        <div className="w-full flex gap-12 flex-col px-6">
          <div className="grid max-md:screengrid-cols-1 max-laptop:grid-cols-2 laptop:grid-cols-3 justify-between items-start laptop:gap-5 desktop:gap-7  w-full">
            {isLoading ? (
              <SkeletonSlider component="properti" column={limit} />
            ) : (
              (data?.data as PropertiType[])?.map((item, index) => (
                <div key={index} className="flex border border-grey-15 max-md:col-span-full justify-around w-full h-full flex-col gap-8 p-6 laptop:p-7 desktop:p-10  rounded-lg ">
                  <Image src={item.images[1]} alt="hello" width={300} height={400} className="w-auto  rounded-lg " />
                  <div className="flex flex-col">
                    <h4>{item.name}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sequi.</p>
                  </div>
                  <div className="  flex flex-wrap w-full gap-1">
                    <div className="slider-btn">
                      <MdBedroomParent className="bg-white rounded-sm dark:text-black" />
                      <span className="flex items-center">
                        {item.rooms}
                        <p className="truncate">-Bedroo </p>
                      </span>
                    </div>
                    <div className="slider-btn">
                      <MdBathroom className="bg-white rounded-sm dark:text-black" />
                      <span className="flex items-center">
                        {item.bathrooms}
                        <p className="truncate ">-Bathroom</p>
                      </span>
                    </div>
                    <div className="slider-btn">
                      <MdOutlineApartment className="bg-white rounded-sm dark:text-black" />
                      <p className="truncate ">{item.property_type}</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-start items-cente">
                    <p>{item.sale_type}</p>
                  </div>
                  <div className="flex justify-between w-full items-end">
                    <div className="flex flex-col justify-start">
                      <p>Price</p>
                      <h4>${item.price || item.rent}</h4>
                    </div>
                    <Button href="/about-us" type="primary" size="middle" className="!bg-purple-60 !h-12 !text-white">
                      View Property Details
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex justify-between py-5 rounded-lg items-center px-10 dark:bg-grey-10 dark:border-grey-15">
              <div className="flex gap-1">
                <p>{page}</p>
                <p>of</p>
                <p>{data?.length}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button disabled={page === 1 ? true : false} onClick={decrement} type="primary" className="slider-action-btn">
                  <GrFormPreviousLink />
                </Button>
                <Button disabled={page === data?.length ? true : false} onClick={increment} type="primary" className="slider-action-btn">
                  <GrFormNextLink />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container-section ">
      <div className="flex flex-col justify-between px-6">
        <h2 className="w-full text-left">{head}</h2>
        <div className="flex flex-wrap justify-between gap-10 mt-3.5 mb-20">
          <p className="w-2/3 max-md:w-full">{title}</p>
          {viewBtn && (
            <Button type="text" className="my-btn dark:!bg-grey-15 max-md:!w-full dark:hover:!bg-grey-10 dark:!text-white">
              View All Properties
            </Button>
          )}
        </div>
      </div>
      <div className="w-full flex gap-12 flex-col">
        <div className="grid max-md:screengrid-cols-1 grid-cols-2  justify-between items-start gap-5 desktop:gap-7  w-full">
          {isLoading ? (
            <SkeletonSlider component="companies" column={limit} />
          ) : (
            (data?.data as CompaniesType[])?.map((item, index) => (
              <div key={index} className="flex border border-grey-60 dark:border-grey-15 max-md:col-span-full justify-around w-full h-full flex-col gap-8 p-6 laptop:p-10 desktop:p-12  rounded-lg ">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <p>Since {item.since}</p>
                    <h3>{item.company}</h3>
                  </div>
                  <div>
                    <Button href={item.website} type="link" className="my-btn dark:!bg-grey-15 max-md:!w-full dark:hover:!bg-grey-10 dark:!text-white">
                      Visit Website
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <p>Domain</p>
                    <h6>{item.domain}</h6>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>Category</div>
                    <div>{item.category}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p>What They Said 🤗</p>
                  <p className="pl-2">{item.testimonial?.source}</p>
                  <p className="pl-4 dark:!text-white !text-black">{item.testimonial?.quote}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="w-full flex  px-10 justify-between items-center dark:bg-grey-10 dark:border-grey-15">
          <div className="w-full relative flex justify-between max-lg:justify-center py-5 rounded-lg items-center ">
            <div className="flex gap-1">
              <p>{page}</p>
              <p>of</p>
              <p>{data?.length}</p>
            </div>
            <div className="flex items-center gap-2 max-lg:absolute max-lg:w-full max-lg:justify-between">
              <Button disabled={page === 1 ? true : false} onClick={decrement} type="primary" className="slider-action-btn">
                <GrFormPreviousLink />
              </Button>
              <Button disabled={page === data?.length ? true : false} onClick={increment} type="primary" className="slider-action-btn">
                <GrFormNextLink />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
