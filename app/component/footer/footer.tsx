"use client";

import { Button, Input } from "antd";
import Image from "next/image";
import { FaYoutube, FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col container mx-auto w-full">
      <div className="flex justify-between max-md:flex-col max-md:justify-center items-start gap-10">
        <div className="flex w-1/4 flex-col gap-6 justify-start max-md:w-full">
          <div className="flex items-center gap-1 ">
            <Image src={"./icon.svg"} alt="icon" className="icon-style" width={40} height={40} />
            <p className="">Estatein</p>
          </div>
          <div>
            <Input type="text" className="!bg-inherit" />
            <Button type="text"></Button>
          </div>
        </div>
        <div className="grid grid-cols-5 max-md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-4">
            <p>Home</p>
            <p className="!text-white">Hero Section</p>
            <p className="!text-white">Features</p>
            <p className="!text-white">Properties</p>
            <p className="!text-white">Testimonials</p>
            <p className="!text-white">FAQ’s</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>About Us</p>
            <p className="!text-white">Our Story</p>
            <p className="!text-white">Our Works</p>
            <p className="!text-white">How It Works</p>
            <p className="!text-white">Our Team</p>
            <p className="!text-white">Our Clients</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Properties</p>
            <p className="!text-white">Portfolio</p>
            <p className="!text-white">Categories</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Services</p>
            <p className="!text-white">Valuation Mastery</p>
            <p className="!text-white">Strategic Marketing</p>
            <p className="!text-white">Negotiation Wizardry</p>
            <p className="!text-white">Closing Success</p>
            <p className="!text-white">Property Management</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Contact</p>
            <p className="!text-white">Contact Form</p>
            <p className="!text-white">Our Offices</p>
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
