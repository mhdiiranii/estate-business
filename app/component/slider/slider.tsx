"user client";

import { SliderType } from "@/app/models/types/properti";
import { Button } from "antd";
import Image from "next/image";
import { MdOutlineApartment, MdBathroom, MdBedroomParent } from "react-icons/md";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Framer from "../framer/framer";

const CustomSlider = (props: SliderType) => {
  
  

  const increment = () => {
    if (props.setPage) {
      props.setPage((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (props.setPage) {
      props.setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full flex gap-12 flex-col">
      <div className="grid max-md:screengrid-cols-1 max-laptop:grid-cols-2 laptop:grid-cols-3 min-h-[700px] justify-between items-start laptop:gap-5 desktop:gap-7  w-full">
        {props.loading ? (
          <Framer height="700px" column={props.limit}/>
        ) : (
          props.data?.map((item, index) => (
            <div key={index} className="flex max-md:col-span-full justify-around w-full h-full flex-col gap-8 p-6 laptop:p-7 desktop:p-10 border-grey-15 dark:bg-grey-08 rounded-lg ">
              <Image src={item.images[1]} alt="hello" width={300} height={400} className="w-auto h-[40vh] rounded-lg " />
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
      <div className="w-full flex px-10 justify-between items-center">
        <div className="w-full flex justify-between py-5 rounded-lg items-center dark:bg-grey-10 dark:border-grey-15">
          <div className="flex gap-1">
            <p>{props.page}</p>
            <p>of</p>
            <p>{props.length}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button disabled={props.page === 1 ? true : false} onClick={decrement} type="primary" className="slider-action-btn" icon={<GrFormPreviousLink size={30} />}></Button>
            <Button disabled={props.page === props.length ? true : false} onClick={increment} type="primary" className="slider-action-btn" icon={<GrFormNextLink size={30} />}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
