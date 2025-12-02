"use client";

import { Button, Input } from "antd";
import Image from "next/image";
import { FaYoutube, FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container-section ">
      <div className="flex justify-between w-full max-md:flex-col max-md:justify-center items-start gap-20">
        <div className="flex w-1/3 flex-col gap-6 justify-start max-md:w-full">
          <div className="flex items-center gap-1 ">
            <Image src={"./icon.svg"} alt="icon" className="icon-style" width={40} height={40} />
            <p className="">Estatein</p>
          </div>
          <div className="flex justify-between items-center relative">
            <Input type="text" className="!bg-inherit !border-grey-60 !outline-none !px-6 !py-3.5 placeholder:!text-grey-60"  placeholder="Enter Your Email"/>
            <Button type="text" className="dark:!text-white !text-3xl !absolute !right-0 !py-3 !h-auto !z-1"><IoIosSend/></Button>
          </div>
        </div>
        <div className="grid grid-cols-5 max-md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-4">
            <p>Home</p>
            <p className="!text-black dark:!text-white">Features</p>
            <p className="!text-black dark:!text-white">Hero Section</p>
            <p className="!text-black dark:!text-white">Properties</p>
            <p className="!text-black dark:!text-white">Testimonials</p>
            <p className="!text-black dark:!text-white">FAQ’s</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>About Us</p>
            <p className="!text-black dark:!text-white">Our Story</p>
            <p className="!text-black dark:!text-white">Our Works</p>
            <p className="!text-black dark:!text-white">How It Works</p>
            <p className="!text-black dark:!text-white">Our Team</p>
            <p className="!text-black dark:!text-white">Our Clients</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Properties</p>
            <p className="!text-black dark:!text-white">Portfolio</p>
            <p className="!text-black dark:!text-white">Categories</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Services</p>
            <p className="!text-black dark:!text-white">Valuation Mastery</p>
            <p className="!text-black dark:!text-white">Strategic Marketing</p>
            <p className="!text-black dark:!text-white">Negotiation Wizardry</p>
            <p className="!text-black dark:!text-white">Closing Success</p>
            <p className="!text-black dark:!text-white">Property Management</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Contact</p>
            <p className="!text-black dark:!text-white">Contact Form</p>
            <p className="!text-black dark:!text-white">Our Offices</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end  py-3.5 gap-2">
        <FaFacebookF />
        <FaLinkedin />
        <FaTwitter />
        <FaYoutube />
      </div>
    </div>
  );
};

export default Footer;
