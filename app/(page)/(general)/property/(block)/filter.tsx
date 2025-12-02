"use client";

import { Col, ConfigProvider, Row, Select } from "antd";
import { IoLocationSharp, IoCube } from "react-icons/io5";
import { HiHomeModern } from "react-icons/hi2";
import { useEffect, useState } from "react";
import ApiClient from "@/app/services/ApiClient";
import { FaRegCalendar } from "react-icons/fa6";
import { DefaultOptionType } from "antd/es/select";

const Filters = () => {
  const [locations, setLocations] = useState<string[]>();
  const [type, setType] = useState<string[]>();
  const [send, setSend] = useState({});

  useEffect(() => {
    ApiClient()
      .filtersItem()
      .then((item) => {
        setLocations(item.data.data.city);
        setType(item.data.data.property_type);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSelect = (value: string, option?: DefaultOptionType | DefaultOptionType[]) => {
    const opt = Array.isArray(option) ? option[0] : option;
    setSend((prev) => ({
      ...prev,
      [opt?.label as string]: value,
    }));
  };


  return (
    <Row gutter={100} justify={"space-between"} className=" !w-full">
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
        <Col className="!p-0 " xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4.8 }}>
          <Select
            className="!w-full select "
            variant="outlined"
            onChange={onSelect}
            allowClear
            size="large"
            placeholder={
              <div className="flex items-center gap-1 text-grey-60 ">
                {" "}
                <IoLocationSharp />
                <span>Location</span>{" "}
              </div>
            }
          >
            {locations?.map((item, index) => (
              <Select.Option key={index} value={item} label={"location"}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col className="!p-0" xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4.8 }}>
          <Select
            className="!w-full select"
            variant="outlined"
            size="large"
            onChange={onSelect}
            allowClear
            placeholder={
              <div className="flex items-center gap-1">
                {" "}
                <HiHomeModern />
                <span>Property Type</span>{" "}
              </div>
            }
          >
            {type?.map((item, index) => (
              <Select.Option key={index} value={item} label={"type"}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col className="!p-0" xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4.8 }}>
          <Select
            className="!w-full select"
            variant="outlined"
            size="large"
            allowClear
            placeholder={
              <div className="flex items-center gap-1">
                {" "}
                <HiHomeModern />
                <span>Pricing Range</span>{" "}
              </div>
            }
          />
        </Col>
        <Col className="!p-0" xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4.8 }}>
          <Select
            className="!w-full select"
            variant="outlined"
            size="large"
            allowClear
            placeholder={
              <div className="flex items-center gap-1">
                {" "}
                <IoCube />
                <span>Property Size</span>{" "}
              </div>
            }
          />
        </Col>
        <Col className="!p-0" xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4.8 }}>
          <Select
            className="!w-full select"
            variant="outlined"
            size="large"
            allowClear
            placeholder={
              <div className="flex items-center gap-1">
                {" "}
                <FaRegCalendar />
                <span>Build Year</span>{" "}
              </div>
            }
          />
        </Col>
      </ConfigProvider>
    </Row>
  );
};

export default Filters;
