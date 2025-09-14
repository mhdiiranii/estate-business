"use client";

import { LogInType, RegisterUser } from "@/app/models/types/user";
import { LogInSchema } from "@/app/models/zod/LogIn";
import ApiClient from "@/app/services/ApiClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
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

  const handleFinish = async (values: RegisterUser) => {
    registerMutation.mutate(values);
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
        <Form.Item<RegisterUser> className="!w-full" label="Email" name="email" rules={[{ required: true, message: "Please input your username!" }]}>
          <Input className="!bg-inherit" autoComplete="off" />
        </Form.Item>
        <Form.Item<RegisterUser> className="!w-full" label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
          <Input className="!bg-inherit" autoComplete="off" />
        </Form.Item>

        <Form.Item<RegisterUser> label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
