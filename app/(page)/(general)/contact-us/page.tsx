"use client";

import { Button, Card, Col, ConfigProvider, Form, Input, Row, Select, Tag } from "antd";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import Social from "@/public/contact/social.svg";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Cta from "@/app/(page)/(block)/cta";

const items = [
  {
    icon: <MdOutlineEmail />,
    title: "info@estatein.com",
  },
  {
    icon: <FaPhone />,
    title: "+1 (123) 456-7890",
  },
  {
    icon: <IoLocationSharp />,
    title: "Main Headquarters",
  },
  {
    icon: Social,
    title: "",
  },
];

const Contact = () => {
  return (
    <div className="mx-auto container px-4 flex flex-col max-lg:py-20 py-40 max-lg:gap-20 gap-40">
      <section className="flex flex-col gap-24">
        <div className="px-4 flex flex-col gap-3.5 ">
          <h2>Get in Touch with Estatein</h2>
          <p>
            Welcome to Estatein&apos;s Contact Us page. We&apos;re here to assist you with any inquiries, requests, or feedback you may have. Whether you&apos;re looking to buy or sell a property,
            explore investment opportunities, or simply want to connect, we&apos;re just a message away. Reach out to us, and let&apos;s start a conversation.
          </p>
        </div>
        <div className="flex w-full flex-wrap px-4 gap-2.5 2xl:gap-5 justify-center items-center">
          <Card className="!px-3.5 basis-xs !min-h-full !py-5 lg:!px-4 lg:!py-7 2xl:!px-5 !w-full 2xl:!py-10 dark:!bg-grey-10 border !border-grey-15 relative">
            <Button type="text" className="!absolute !bg-inherit !p-0 !right-2 !top-0 !text-grey-30 !text-2xl ">
              <FiArrowUpRight />
            </Button>
            <div className="flex justify-center">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <MdEmail className="rotate-45" />
                </div>
              </div>
            </div>
            <h6 className="dark:text-white">info@estatein.com</h6>
          </Card>
          <Card className="!px-3.5 basis-xs !min-h-full !py-5 lg:!px-4 lg:!py-7 2xl:!px-5 !w-full 2xl:!py-10 dark:!bg-grey-10 border !border-grey-15 relative">
            <Button type="text" className="!absolute !bg-inherit !p-0 !right-2 !top-0 !text-grey-30 !text-2xl ">
              <FiArrowUpRight />
            </Button>
            <div className="flex justify-center">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <FaPhone className="rotate-45" />
                </div>
              </div>
            </div>
            <h6 className="dark:text-white">+1 (123) 456-7890</h6>
          </Card>
          <Card className="!px-3.5 basis-xs !min-h-full !py-5 lg:!px-4 lg:!py-7 2xl:!px-5 !w-full 2xl:!py-10 dark:!bg-grey-10 border !border-grey-15 relative">
            <Button type="text" className="!absolute !bg-inherit !p-0 !right-2 !top-0 !text-grey-30 !text-2xl ">
              <FiArrowUpRight />
            </Button>
            <div className="flex justify-center">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  <IoLocationSharp className="rotate-45" />
                </div>
              </div>
            </div>
            <h6 className="dark:text-white">Main Headquarters</h6>
          </Card>
          <Card className="!px-3.5 basis-xs !min-h-full !py-5 lg:!px-4 lg:!py-7 2xl:!px-5 !w-full 2xl:!py-10 dark:!bg-grey-10 border !border-grey-15 relative">
            <Button type="text" className="!absolute !bg-inherit !p-0 !right-2 !top-0 !text-grey-30 !text-2xl ">
              <FiArrowUpRight />
            </Button>
            <div className="flex justify-center">
              <div className="rounded-full p-2.5 border-r border-l border-purple-75 -rotate-45">
                <div className="rounded-full p-2.5 border-t border-b border-purple-75 text-purple-75">
                  {/* <MdEmail className="rotate-45" /> */}
                  <Image alt="social" src={Social} width={10} height={10} className="rotate-45" />
                </div>
              </div>
            </div>
            <div className="flex max-lg:flex-wrap justify-center gap-4 items-center dark:text-white">
              <h6>Instagram</h6>
              <h6>LinkedIn</h6>
              <h6>Facebook</h6>
            </div>
          </Card>
        </div>
      </section>
      <section className="flex flex-col gap-20 ">
        <div className="flex flex-col gap-3.5 ">
          <h2>Let&apos;s Connect</h2>
          <p></p>
          We&apos;re excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you&apos;re a prospective client, partner, or
          simply curious about our services, we&apos;re here to answer your questions and provide the assistance you need.
        </div>{" "}
        <Form wrapperCol={{ span: 24 }} labelCol={{ span: 24 }} className="!px-5 !py-5 rounded-lg  !border !border-grey-15">
          <Row gutter={[16, 16]} className=" !px-4">
            <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item layout="vertical" name={"first-name"} label={<p className="dark:!text-white">First Name</p>}>
                <Input placeholder="Enter First Name" classNames={{ input: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
              </Form.Item>
            </Col>
            <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item layout="vertical" name={"last-name"} label={<p className="dark:!text-white">Last Name</p>}>
                <Input placeholder="Enter First Name" classNames={{ input: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
              </Form.Item>
            </Col>
            <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item layout="vertical" name={"email"} label={<p className="dark:!text-white">Email</p>}>
                <Input placeholder="Enter your Email" classNames={{ input: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
              </Form.Item>
            </Col>
            <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
              <Form.Item layout="vertical" name={"phone"} label={<p className="dark:!text-white">Phone</p>}>
                <Input placeholder="Phone" classNames={{ input: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
              </Form.Item>
            </Col>
            <ConfigProvider
              theme={{
                token: {
                  colorBorder: "#262626",
                  controlHeight: 45,
                },
                components: {
                  Select: {
                    activeBorderColor: "#262626",
                    hoverBorderColor: "#262626",
                    colorTextPlaceholder: "#666666",
                    colorText: "#666666",
                  },
                },
              }}
            >
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <Form.Item layout="vertical" name={"type"} label={<p className="dark:!text-white">Inquiry Type</p>}>
                  <Select className="select" variant="outlined" size="large" placeholder="Select Inquiry Type">
                    <Select.Option value="1">hello</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <Form.Item layout="vertical" name={"how"} label={<p className="dark:!text-white">How Did You Hear About Us?</p>}>
                  <Select className="select" variant="outlined" size="large" placeholder="Select">
                    <Select.Option value="1">hello</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </ConfigProvider>
            <Col className="" xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
              <Form.Item layout="vertical" name={"message"} label={<p className="dark:!text-white">Message</p>}>
                <Input.TextArea placeholder="Enter your Message here.." classNames={{ textarea: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
              </Form.Item>
            </Col>
            <Col className="!flex !justify-end md:!justify-center lg:!justify-end" xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
              <Form.Item className="!w-full md:!w-fit" layout="vertical" label={null}>
                <Button type="default" className="!w-full !bg-purple-60 !h-auto !py-3.5 !px-8 xl:!py-4 xl:!px-12 !border-none dark:!text-white">
                  Send Your Message
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </section>
      <section className="flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h2>Discover Our Office Locations</h2>
          <p>
            Estatein is here to serve you across multiple locations. Whether you&apos;re looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices
            conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex gap-2.5 w-1/4 justify-between dark:bg-grey-10 p-2.5 rounded-xl">
            <Button size="large" type="text" className="dark:!bg-grey-08 w-full !border-grey-15 !border rounded-lg dark:!text-white">
              All
            </Button>
            <Button size="large" type="text" className=" dark:!bg-grey-08 w-full !border-grey-15 !border rounded-lg dark:!text-white">
              Regional
            </Button>
            <Button size="large" type="text" className=" dark:!bg-grey-08 w-full !border-grey-15 !border rounded-lg dark:!text-white">
              International
            </Button>
          </div>
          <div>
            <Row gutter={[16, 16]} className="">
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }}>
                <Card className="!h-full !min-h-max dark:!bg-grey-08 border !border-grey-15 !p-6 md:!p-11 xl:!p-12 ">
                  <div className="flex flex-col gap-2.5">
                    <h6 className="flex justify-start ">Main Headquarters</h6>
                    <h3>123 Estatein Plaza, City Center, Metropolis</h3>
                    <p>
                      Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation
                      that define us.
                    </p>
                  </div>
                  <div className="flex my-3 justify-start items-center w-full flex-wrap gap-1.5">
                    <Col span={6}>
                      <Tag
                        icon={<MdEmail size={15} />}
                        className="!flex !items-center !gap-1.5 !border !border-grey-15 dark:!bg-grey-10 dark:!text-white !px-4 !py-2.5 xl:!px-5 xl:!py-3.5 !rounded-3xl"
                      >
                        info@estatein.com
                      </Tag>
                    </Col>
                    <Col span={6}>
                      <Tag
                        icon={<FaPhoneAlt size={15} />}
                        className="!flex !items-center !gap-1.5 !border !border-grey-15 dark:!bg-grey-10 dark:!text-white !px-4 !py-2.5 xl:!px-5 xl:!py-3.5 !rounded-3xl"
                      >
                        +1 (123) 456-7890
                      </Tag>
                    </Col>
                    <Col span={6}>
                      <Tag
                        icon={<IoLocationSharp size={15} />}
                        className="!flex !items-center !gap-1.5 !border !border-grey-15 dark:!bg-grey-10 dark:!text-white !px-4 !py-2.5 xl:!px-5 xl:!py-3.5 !rounded-3xl"
                      >
                        Metropolis
                      </Tag>
                    </Col>
                  </div>
                  <Button type="text" size="large" className="!w-full !bg-purple-60 !text-white">
                    Get Direction
                  </Button>
                </Card>
              </Col>
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }}>
                <Card className="dark:!bg-grey-08 border !border-grey-15 !p-6 md:!p-11 xl:!p-12 ">
                  <div className="flex flex-col gap-2.5">
                    <h6 className="flex justify-start ">Regional Offices</h6>
                    <h3>456 Urban Avenue, Downtown District, Metropolis</h3>
                    <p>
                      Estatein&apos;s presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the
                      nuances of their respective markets.
                    </p>
                  </div>
                  <div className="flex my-3 justify-start items-center w-full flex-wrap gap-1.5">
                    <Col span={6}>
                      <Tag
                        icon={<MdEmail size={15} />}
                        className="!flex !items-center !gap-1.5 !border !border-grey-15 dark:!bg-grey-10 dark:!text-white !px-4 !py-2.5 xl:!px-5 xl:!py-3.5 !rounded-3xl"
                      >
                        info@estatein.com
                      </Tag>
                    </Col>
                    <Col span={6}>
                      <Tag
                        icon={<FaPhoneAlt size={15} />}
                        className="!flex !items-center !gap-1.5 !border !border-grey-15 dark:!bg-grey-10 dark:!text-white !px-4 !py-2.5 xl:!px-5 xl:!py-3.5 !rounded-3xl"
                      >
                        +1 (123) 456-7890
                      </Tag>
                    </Col>
                    <Col span={6}>
                      <Tag
                        icon={<IoLocationSharp size={15} />}
                        className="!flex !items-center !gap-1.5 !border !border-grey-15 dark:!bg-grey-10 dark:!text-white !px-4 !py-2.5 xl:!px-5 xl:!py-3.5 !rounded-3xl"
                      >
                        Metropolis
                      </Tag>
                    </Col>
                  </div>
                  <Button type="text" size="large" className="!w-full !bg-purple-60 !text-white">
                    Get Direction
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-5">
          <Image className="w-full" src={"/contact/1.png"} width={500} height={500} alt="#" />
          <Image className="w-full" src={"/contact/2.png"} width={500} height={500} alt="#" />
          <Image className="w-full" src={"/contact/3.png"} width={500} height={500} alt="#" />
          <div className="grid grid-cols-2 gap-5">
            <Image className="w-full" src={"/contact/4.png"} width={500} height={500} alt="#" />
            <Image className="w-full" src={"/contact/5.png"} width={500} height={500} alt="#" />
          </div>
          <div className="flex flex-col max-md:col-span-2 gap-3.5 justify-center h-full min-h-max">
            <h2>Explore Estatein&apos;s World</h2>
            <p>
              Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know
              us better.
            </p>
          </div>
          <Image className="w-full max-md:col-span-2 " src={"/contact/6.png"} width={500} height={500} alt="#" />
        </div>
      </section>
      <Cta/>
    </div>
  );
};

export default Contact;
