"use client";

import { LogInType } from "@/app/models/types/user";
import { LogInSchema } from "@/app/models/zod/LogIn";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import z from "zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { RangeThems } from "@/app/themes";

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
    <div className="w-full min-h-[100vh]  flex flex-col justify-center items-center p-6">
      <div className="w-full absolute top-0 flex justify-end items-center p-8 ">
        <RangeThems />
      </div>
      <Form
        form={form}
        size="large"
        layout="vertical"
        className="!flex drop-shadow-xs max-lg:h-[60vh] drop-shadow-grey-60 !flex-col !justify-center !items-center !py-6 !px-10 rounded-lg border border-grey-60 shadow-md shadow-grey-60 "
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
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input className="!bg-inherit shadow-xs shadow-grey-60 dark:!text-white !text-black" autoComplete="off" />
        </Form.Item>

        <Form.Item<LogInType> label={<span className="text-black dark:text-white">Password</span>} name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password
            autoComplete="new-password"
            className="!bg-inherit shadow-xs shadow-grey-60 dark:!text-white !text-black"
            iconRender={(visible) => (visible ? <FaRegEye /> : <FaRegEyeSlash />)}
          />
        </Form.Item>

        <Form.Item label={null} className="!w-full">
          <div className="w-full flex flex-col gap-2 ">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <Button href="./login/register" type="link" className="!border !border-blue-700">
              Sign Up
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogeIn;
