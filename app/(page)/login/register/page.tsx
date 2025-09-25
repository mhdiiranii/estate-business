"use client";

import { LogInType, RegisterUser, SignUpType } from "@/app/models/types/user";
import { AuthSchema } from "@/app/models/zod/AuthSchema";
import { LogInSchema } from "@/app/models/zod/LogIn";
import ApiClient from "@/app/services/ApiClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
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
      <Form
        form={form}
        size="large"
        layout="vertical"
        className="!flex !flex-col  !justify-center !items-center !py-6 !px-10 rounded-lg border border-grey-60 shadow-xl"
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        onFinishFailed={() => {
          console.log("fild");
        }}
      >
        <Form.Item<SignUpType> className="!w-full" label={<span className="text-black dark:text-white">Email</span>} name="email" rules={[{ message: "Please input your username!" }]}>
          <Input className="!bg-inherit dark:!text-white !text-black" autoComplete="off" />
        </Form.Item>
        <Form.Item<SignUpType> className="!w-full" label={<span className="text-black dark:text-white">Username</span>} name="username" rules={[{ message: "Please input your username!" }]}>
          <Input className="!bg-inherit dark:!text-white !text-black" autoComplete="off" />
        </Form.Item>

        <Form.Item<SignUpType> label={<span className="text-black dark:text-white">Password</span>} name="password" rules={[{ message: "Please input your password!" }]}>
          <Input.Password autoComplete="new-password" className="!bg-inherit dark:!text-white !text-black" iconRender={(visible) => (visible ? <FaRegEye /> : <FaRegEyeSlash />)} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
