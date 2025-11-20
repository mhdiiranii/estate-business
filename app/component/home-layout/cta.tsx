"use client";

import { Button } from "antd";

const Cta = () => {
  return (
    <section className="container-section">
      <div className="flex max-md:flex-col justify-between items-center w-full gap-36 mt-2.5">
        <div className="flex flex-col gap-3 w-full">
          <h2>Start Your Real Estate Journey Today</h2>
          <p>Your dream property is just a click away. Whether youre looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
        </div>
        <Button type="text" className="my-btn max-md:!w-full dark:!bg-purple-60 dark:hover:!bg-white dark:hover:!text-black dark:!text-white ">
          Explore Properties
        </Button>
      </div>
    </section>
  );
};

export default Cta;
