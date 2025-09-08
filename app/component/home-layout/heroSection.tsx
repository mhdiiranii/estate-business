"use client";

import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const subContiner = [
  {
    id: 1,
    image: "./hero-section/sub/one.svg",
    desceribtion: "Find Your Dream Home",
  },
  {
    id: 2,
    image: "./hero-section/sub/two.svg",
    desceribtion: "Unlock Property Value",
  },
  {
    id: 3,
    image: "./hero-section/sub/three.svg",
    desceribtion: "Effortless Property Management",
  },
  {
    id: 4,
    image: "./hero-section/sub/four.svg",
    desceribtion: "Smart Investments, Informed Decisions",
  },
];

const HeroSection = () => {
  return (
    <section className="flex flex-col max-laptop:gap-10 gap-4 w-full ">
      <div className="flex flex-col-reverse laptop:flex-row justify-between items-center gap-4 w-full px-4 laptop:px-0 laptop:pl-[10%]">
        <div className="flex flex-col items-center laptop:items-start w-full laptop:w-2/4 ">
          <h1>Discover Your Dream Property with Estatein</h1>
          <p className="mt-5 mb-10">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          <div className="flex flex-col laptop:flex-row justify-start items-center gap-5 w-full">
            <Button type="text" className="my-btn !text-black dark:!text-white !border-grey-15">
              Learn More
            </Button>
            <Button type="text" className="my-btn !bg-purple-60 !text-white">
              Browse Properties
            </Button>
          </div>
          <div className="flex w-full gap-2 max-laptop:flex-wrap justify-center items-center mt-10">
            <div className="sub-container max-laptop:flex-[48%]">
              <h3>200+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="sub-container max-laptop:flex-[48%]">
              <h3>10k+</h3>
              <p>Properties For Clients</p>
            </div>
            <div className="sub-container max-laptop:flex-[100%]">
              <h3>16+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <Image src={"./hero-section/tower.svg"} alt="towner" width={70} height={70} className="w-full " />
          <div className="absolute -bottom-5 left-[10%] laptop:top-20 laptop:-left-[10%]">
            <div className="relative flex justify-center items-center">
              <span className="absolute animate-spin ">
                <GoArrowUpRight size={30} className="text-white " />
              </span>
              <Image src={"./hero-section/circle.svg"} alt="circle" width={100} height={100} className="w-1/2 laptop:w-3/4" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Row className="px-4  w-full gap-1 laptop:gap-5 !flex-nowrap max-laptop:!flex-wrap !items-center !justify-center">
          {subContiner.map((item) => (
            <Col key={item.id}  className="!w-[48%] laptop:!w-full  !rounded-lg border-1 !border-grey-15">
              <Card variant="borderless" className="sub-card ">
                <GoArrowUpRight size={30} className="text-grey-30 absolute right-[5%] top-[10%]" />
                <Image src={item.image} alt="image" width={50} height={50}/>
                <p className="">{item.desceribtion}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default HeroSection;
