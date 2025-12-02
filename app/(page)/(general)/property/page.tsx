"use client";

import { Button, Card, Col, ConfigProvider, Form, Input, Row, Select, Tag } from "antd";
import { IoIosSearch } from "react-icons/io";
import Filters from "./(block)/filter";
import Slider from "@/app/component/slider/slider";
import Cta from "@/app/(page)/(block)/cta";

const Property = () => {
  return (
    <div className="flex flex-col pb-40 gap-10 md:gap-20 xl:gap-40">
      <section className="mt-28 border-b flex flex-col items-center border-grey-15 dark:bg-linear-[-77deg,rgba(38,38,38,0)_5%,rgba(38,38,38,0.4)_53%,rgba(38,38,38,0.6)_99%]">
        <div className="flex flex-col max-md:w-full w-3/4 justify-center gap-4 py-40 ">
          <h2>Find Your Dream Property</h2>
          <p>
            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to
            redefine your life. With categories to suit every dreamer, your journey
          </p>
        </div>
        <div className="flex flex-col items-center gap-3.5 w-full mx-auto container">
          <div className="flex justify-between gap-12 w-4xl items-center p-5 dark:bg-grey-08 border border-grey-15 rounded-lg">
            <input className="bg-inherit w-full py-[18px] px-3.5 border-none outline-none" placeholder="Search For A Property" type="text" />
            <Button type="text" className="!bg-purple-60 !py-[18px] !h-auto !text-white" icon={<IoIosSearch />}>
              Find Property
            </Button>
          </div>
          <div className="flex justify-center items-center w-full py-10">
            <Filters />
          </div>
        </div>
      </section>
      <section>
        <Slider
          query="properti"
          viewBtn={false}
          head="Discover a World of Possibilities"
          title="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
        />
      </section>
      <section className="flex flex-col gap-20 mx-auto container ">
        <div className="flex flex-col gap-3.5 ">
          <h2>Let&apos;s Make it Happen</h2>
          <p></p>
          Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don&apos;t wait; let&apos;s
          embark on this exciting journey together.
        </div>{" "}
        <Form wrapperCol={{ span: 24 }} labelCol={{ span: 24 }} className="!px-5 !py-5 rounded-lg  !border !border-grey-15">
          <Row gutter={[16, 16]} className=" !px-4">
            <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
              <Form.Item layout="vertical" name={"first-name"} label={<p className="dark:!text-white">First Name</p>}>
                <Input placeholder="Enter First Name" classNames={{ input: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
              </Form.Item>
            </Col>
            <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
              <Form.Item layout="vertical" name={"last-name"} label={<p className="dark:!text-white">Last Name</p>}>
                <Input placeholder="Enter First Name" classNames={{ input: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
              </Form.Item>
            </Col>
            <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
              <Form.Item layout="vertical" name={"email"} label={<p className="dark:!text-white">Email</p>}>
                <Input placeholder="Enter your Email" classNames={{ input: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
              </Form.Item>
            </Col>
            <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
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
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item layout="vertical" name={"location"} label={<p className="dark:!text-white">Preferred Location</p>}>
                  <Select className="select" variant="outlined" size="large" placeholder="Select Location">
                    <Select.Option value="1">hello</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item layout="vertical" name={"type"} label={<p className="dark:!text-white">Property Type</p>}>
                  <Select className="select" variant="outlined" size="large" placeholder="Select Property Type">
                    <Select.Option value="1">hello</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item layout="vertical" name={"bathrooms"} label={<p className="dark:!text-white">No. of Bathrooms</p>}>
                  <Select className="select" variant="outlined" size="large" placeholder="Select no. of Bedrooms">
                    <Select.Option value="1">hello</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item layout="vertical" name={"bathrooms"} label={<p className="dark:!text-white">No. of Bedrooms</p>}>
                  <Select className="select" variant="outlined" size="large" placeholder="Select no. of Bedrooms">
                    <Select.Option value="1">hello</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                <Form.Item layout="vertical" name={"budget"} label={<p className="dark:!text-white">Budget</p>}>
                  <Select className="select" variant="outlined" size="large" placeholder="Select Budget">
                    <Select.Option value="1">hello</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item layout="vertical" name={"preferred-phone"} label={<p className="dark:!text-white">Preferred Contact Method</p>}>
                  <Input placeholder="Enter Your Number" classNames={{ input: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
                </Form.Item>
              </Col>
              <Col className="" xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item layout="vertical" name={"preferred-email"} label={<p className="dark:!text-white"></p>}>
                  <Input placeholder="Enter Your Email" classNames={{ input: "dark:!bg-grey-10 !px-5 !py-4 placeholder:!text-grey-40 !border-grey-15 !text-grey-40" }} />
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
      <Cta/>
    </div>
  );
};

export default Property;
