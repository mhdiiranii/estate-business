import { Button, Card } from "antd";
import Image from "next/image";
import { BsShop } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoSunnySharp } from "react-icons/io5";
import { TbBuildingEstate } from "react-icons/tb";
import Cta from "../../(block)/cta";

const Services = () => {
  return (
    <div className=" px-4 flex flex-col max-lg:py-20 pt-32  pb-40 max-lg:gap-20 gap-40">
      <section className="flex flex-col gap-5">
        <div className="w-full border rounded-xl pt-40 pb-24 border-grey-15 dark:bg-linear-[-77deg,rgba(38,38,38,0)_5%,rgba(38,38,38,0.4)_53%,rgba(38,38,38,0.6)_99%] ">
          <div className="mx-auto container  w-4/5 flex flex-col gap-3.5">
            <h2>Elevate Your Real Estate Experience</h2>
            <p>Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full  gap-2.5 2xl:gap-5">
          <Card className="!px-3.5 max-lg:col-span-2 !min-h-full !py-5 lg:!px-4 lg:!py-7 2xl:!px-5 !w-full 2xl:!py-10 dark:!bg-grey-10 border !border-grey-15 relative">
            <Button type="text" className="!absolute !bg-inherit !p-0 !right-2 !top-0 !text-grey-30 !text-2xl ">
              <FiArrowUpRight />
            </Button>
            <div className="flex justify-center">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <BsShop className="rotate-45" />
                </div>
              </div>
            </div>
            <h6 className="dark:text-white">Find Your Dream Home</h6>
          </Card>
          <Card className="!px-3.5 max-lg:col-span-2 !min-h-full !py-5 lg:!px-4 lg:!py-7 2xl:!px-5 !w-full 2xl:!py-10 dark:!bg-grey-10 border !border-grey-15 relative">
            <Button type="text" className="!absolute !bg-inherit !p-0 !right-2 !top-0 !text-grey-30 !text-2xl ">
              <FiArrowUpRight />
            </Button>
            <div className="flex justify-center">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <FaCameraRetro className="rotate-45" />
                </div>
              </div>
            </div>
            <h6 className="dark:text-white">Unlock Property Value</h6>
          </Card>
          <Card className="!px-3.5 max-lg:col-span-2 !min-h-full !py-5 lg:!px-4 lg:!py-7 2xl:!px-5 !w-full 2xl:!py-10 dark:!bg-grey-10 border !border-grey-15 relative">
            <Button type="text" className="!absolute !bg-inherit !p-0 !right-2 !top-0 !text-grey-30 !text-2xl ">
              <FiArrowUpRight />
            </Button>
            <div className="flex justify-center">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <TbBuildingEstate className="rotate-45" />
                </div>
              </div>
            </div>
            <h6 className="dark:text-white">Effortless Property Management</h6>
          </Card>
          <Card className="!px-3.5 max-lg:col-span-2 !min-h-full !py-5 lg:!px-4 lg:!py-7 2xl:!px-5 !w-full 2xl:!py-10 dark:!bg-grey-10 border !border-grey-15 relative">
            <Button type="text" className="!absolute !bg-inherit !p-0 !right-2 !top-0 !text-grey-30 !text-2xl ">
              <FiArrowUpRight />
            </Button>
            <div className="flex justify-center">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <IoSunnySharp className="rotate-45" />
                  {/* <Image alt="social" src={Social} width={10} height={10} className="rotate-45" /> */}
                </div>
              </div>
            </div>
            <div className="flex max-lg:flex-wrap justify-center gap-4 items-center dark:text-white">
              <h6>Smart Investments, Informed Decisions</h6>
            </div>
          </Card>
        </div>
      </section>
      <section className="mx-auto container flex flex-col w-full gap-10 md:gap-14 xl:gap-20">
        <div className="flex flex-col gap-3.5 ">
          <h2>Unlock Property Value</h2>
          <p className="w-3/4">
            Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you
            get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <Card className="max-lg:col-span-3 !p-6 md:!p-10 xl:!p-[50px] !min-h-full !w-full dark:!bg-grey-10 border !border-grey-15 relative">
            <div className="flex items-center gap-4 w-full">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <BsShop className="rotate-45" />
                </div>
              </div>
              <h6 className="dark:text-white">Find Your Dream Home</h6>
            </div>
            <p>Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.</p>
          </Card>
          <Card className="max-lg:col-span-3 !p-6 md:!p-10 xl:!p-[50px] !min-h-full !w-full dark:!bg-grey-10 border !border-grey-15 relative">
            <div className="flex items-center gap-4 w-full">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <BsShop className="rotate-45" />
                </div>
              </div>
              <h6 className="dark:text-white">Find Your Dream Home</h6>
            </div>
            <p>Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.</p>
          </Card>
          <Card className="max-lg:col-span-3 !p-6 md:!p-10 xl:!p-[50px] !min-h-full !w-full dark:!bg-grey-10 border !border-grey-15 relative">
            <div className="flex items-center gap-4 w-full">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <BsShop className="rotate-45" />
                </div>
              </div>
              <h6 className="dark:text-white">Find Your Dream Home</h6>
            </div>
            <p>Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.</p>
          </Card>
          <Card className="max-lg:col-span-3 !p-6 md:!p-10 xl:!p-[50px] !min-h-full !w-full dark:!bg-grey-10 border !border-grey-15 relative">
            <div className="flex items-center gap-4 w-full">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <BsShop className="rotate-45" />
                </div>
              </div>
              <h6 className="dark:text-white">Find Your Dream Home</h6>
            </div>
            <p>Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.</p>
          </Card>
          <Card className="max-lg:col-span-3  col-span-2 !p-6 md:!p-10 xl:!p-[50px] !min-h-full !w-full dark:!bg-grey-10 border !border-grey-15 relative">
            <div className="z-10 flex max-md:flex-col justify-between items-center gap-4 w-full">
              <h3 className="dark:text-white">Unlock the Value of Your Property Today</h3>
              <Button
                type="text"
                className="dark:!bg-grey-08 !bg-white !h-auto !w-full md:!w-auto !py-3.5 md:!px-5 xl:!py-[18px] !text-lg !rounded-2xl xl:!px-6 !border !border-grey-15 dark:!text-white"
              >
                Learn More
              </Button>
            </div>
            <p>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
            <Image src={"/myservices/card.png"} className="-z-0 w-full h-full absolute left-0 top-0 right-0 bottom-0" width={400} height={400} alt="card" />
          </Card>
        </div>
      </section>
      <section className="flex max-lg:flex-col mx-auto container md:justify-between gap-10 md:gap-12 xl:gap-[60px]">
        <div className="flex flex-col justify-between gap-12">
          <div className="flex flex-col">
            <h3>Smart Investments, Informed Decisions</h3>
            <p>Building a real estate portfolio requires a strategic approach. Estatein&apos;s Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
          </div>
          <Card className="max-lg:col-span-3 !mb-4 dark:!mb-0 col-span-2 !p-6 md:!p-10 xl:!p-[50px] !w-full dark:!bg-grey-10 border !border-grey-15 relative">
            <div className="z-10 flex max-md:flex-col justify-between items-center gap-4 w-full">
              <h5 className="dark:text-white">Unlock Your Investment Potential</h5>
            </div>
            <p>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
            <Image src={"/myservices/card-two.png"} className="-z-0 w-full h-full absolute left-0 top-0 right-0 bottom-0" width={400} height={400} alt="card" />
            <Button
              type="text"
              className="dark:!bg-grey-08 !bg-white !h-auto !w-full !py-3.5 md:!px-5 xl:!py-[18px] !text-lg !rounded-2xl xl:!px-6 !border !border-grey-15 dark:!text-white"
            >
              Learn More
            </Button>
          </Card>
        </div>
        <div className="grid grid-cols-2 p-4 dark:bg-grey-10 gap-2.5 rounded-lg">
          <Card className="max-lg:col-span-3 !p-6 md:!p-10 xl:!p-[50px] !w-full dark:!bg-grey-08 border !border-grey-15 relative">
            <div className="flex items-center gap-4 w-full">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <BsShop className="rotate-45" />
                </div>
              </div>
              <h6 className="dark:text-white">Market Insight</h6>
            </div>
            <p>Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions</p>
          </Card>
          <Card className="max-lg:col-span-3 !p-6 md:!p-10 xl:!p-[50px]  !w-full dark:!bg-grey-08 border !border-grey-15 relative">
            <div className="flex items-center gap-4 w-full">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <BsShop className="rotate-45" />
                </div>
              </div>
              <h6 className="dark:text-white">ROI Assessment</h6>
            </div>
            <p>Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments</p>
          </Card>
          <Card className="max-lg:col-span-3 !p-6 md:!p-10 xl:!p-[50px]  !w-full dark:!bg-grey-08 border !border-grey-15 relative">
            <div className="flex items-center gap-4 w-full">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <BsShop className="rotate-45" />
                </div>
              </div>
              <h6 className="dark:text-white">Customized Strategies</h6>
            </div>
            <p>Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs</p>
          </Card>
          <Card className="max-lg:col-span-3 !p-6 md:!p-10 xl:!p-[50px]  !w-full dark:!bg-grey-08 border !border-grey-15 relative">
            <div className="flex items-center gap-4 w-full">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <BsShop className="rotate-45" />
                </div>
              </div>
              <h6 className="dark:text-white">Diversification Mastery</h6>
            </div>
            <p>Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations</p>
          </Card>
        </div>
      </section>
      <Cta/>
    </div>
  );
};

export default Services;
