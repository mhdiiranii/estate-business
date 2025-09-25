"use client";

import { LogInType } from "@/app/models/types/user";
import { LogInSchema } from "@/app/models/zod/LogIn";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import z from "zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";

const LogeIn = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleFinish = async (values: LogInType) => {
    try {
      LogInSchema.parse(values);
      const result = await signIn("credentials", { ...values, redirect: false, callbackUrl: "/" });
      if (result?.error) {
        form.setFields([
          {
            name: "username",
            errors: ["نام کاربری یا رمز عبور اشتباه است."],
          },
          {
            name: "password",
            errors: ["نام کاربری یا رمز عبور اشتباه است."],
          },
        ]);
      } else {
        console.log("ورود موفق");
        router.push("/");
      }
    } catch (error) {
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
        initialValues={{}}
        onFinish={handleFinish}
        onFinishFailed={() => {
          console.log("fild");
        }}
      >
        <Form.Item<LogInType>
          className="!w-full text-red-500"
          label={<span className="text-black dark:text-white">Username</span>}
          name="username"
          rules={[{required:true , message: "Please input your username!" }]}
          
        >
          <Input className="!bg-inherit dark:!text-white !text-black" autoComplete="off" />
        </Form.Item>

        <Form.Item<LogInType> label={<span className="text-black dark:text-white">Password</span>} name="password" rules={[{required:true , message: "Please input your password!" }]}>
          <Input.Password autoComplete="new-password" className="!bg-inherit dark:!text-white !text-black" iconRender={(visible) => (visible ? <FaRegEye /> : <FaRegEyeSlash />)} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Button href="./login/register" type="link" className="!border !border-blue-700 !ml-4">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogeIn;
