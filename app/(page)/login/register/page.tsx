"use client";

import { RegisterUser, SignUpType } from "@/app/models/types/user";
import { AuthSchema } from "@/app/models/zod/AuthSchema";
import ApiClient from "@/app/services/ApiClient";
import { RangeThems } from "@/app/themes";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import z from "zod";

const Register = () => {
  const [form] = Form.useForm();

  const registerMutation = useMutation({
    mutationFn: async (formData: RegisterUser) => {
      const res = await ApiClient().register(formData);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("ثبت‌نام موفق ✅", data);
    },
    onError: (error) => {
      console.error("خطا در ثبت‌نام ❌", error);
    },
  });

  const handleFinish = async (values: SignUpType) => {
    try {
      AuthSchema.parse(values);
      registerMutation.mutate(values);
    } catch (error) {
      console.log(error);
      if (error instanceof z.ZodError) {
        const err = error.issues.map((item) => ({
          name: [item.path[0]],
          errors: [item.message],
        }));
        form.setFields(err);
      }
    }
  };

  return (
    <div className="w-full min-h-[100vh]  flex justify-center items-center p-6">
      <div className="w-full absolute top-0 flex justify-end items-center p-8 ">
        <RangeThems />
      </div>
      <Form
        form={form}
        size="large"
        layout="vertical"
        className="!flex !flex-col drop-shadow-xs drop-shadow-grey-60 shadow-md shadow-grey-60 !justify-center !items-center !py-6 !px-10 rounded-lg border border-grey-60 "
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        onFinishFailed={() => {
          console.log("fild");
        }}
      >
        <Form.Item<SignUpType> className="!w-full" label={<span className="text-black dark:text-white">Email</span>} name="email" rules={[{ required: true, message: "Please input your username!" }]}>
          <Input className="!bg-inherit shadow-xs shadow-grey-60 dark:!text-white !text-black" autoComplete="off" />
        </Form.Item>
        <Form.Item<SignUpType>
          className="!w-full"
          label={<span className="text-black dark:text-white">Username</span>}
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input className="!bg-inherit shadow-xs shadow-grey-60 dark:!text-white !text-black" autoComplete="off" />
        </Form.Item>

        <Form.Item<SignUpType> label={<span className="text-black dark:text-white">Password</span>} name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password
            autoComplete="new-password"
            className="!bg-inherit shadow-xs shadow-grey-60 dark:!text-white !text-black"
            iconRender={(visible) => (visible ? <FaRegEye /> : <FaRegEyeSlash />)}
          />
        </Form.Item>

        <Form.Item label={null} className="!w-full">
          <div className="w-full flex flex-col gap-2 ">
            <Button type="primary" htmlType="submit" className="!w-full">
              Sign Up
            </Button>
            <Button href="./login" type="link" className="!border !w-full !border-blue-700">
              Login
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
