"use client";

import Image from "next/image";
import Link from "next/link";
import { CiLogin, CiLogout } from "react-icons/ci";
import { Button, Tooltip } from "antd";
import Themes from "@/app/themes";
import { signOut, useSession } from "next-auth/react";

const route = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About us",
    href: "/about-us",
  },
  {
    id: 3,
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    id: 4,
    title: "Services",
    href: "/services",
  },
];

export const AuthBtn = () => {
  const { status } = useSession();

  if (status === "unauthenticated") {
    return (
      <Tooltip title={"login"} color={"pink"} arrow>
        <Link href={"./login"} className="flex items-center px-6 py-3.5  rounded-lg hover:bg-black hover:text-white  dark:hover:bg-white dark:hover:text-black">
          <CiLogin size={20} />
        </Link>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={"logout"} color={"pink"} arrow>
      <Button type="text" onClick={()=>signOut()} className="!flex !h-auto !items-center !px-6 !py-3.5 !rounded-lg dark:!text-white hover:!bg-black hover:!text-white  dark:hover:!bg-white dark:hover:!text-black">
        <CiLogout  size={20} />
      </Button>
    </Tooltip>
  );
};

const Nav = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 w-full z-20 bg-white  dark:bg-black py-8 px-10">
      <div className="flex items-center gap-1">
        <Image src={"./icon.svg"} alt="icon" className="icon-style" width={40} height={40} />
        <p className="">Estatein</p>
      </div>
      <div className="flex items-center">
        {route.map((item) => (
          <Link key={item.id} href={item.href} className="duration-300 text-lg hover:bg-black hover:text-white  dark:hover:bg-white dark:hover:text-black px-6 py-3.5 rounded-lg">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-1">
        <AuthBtn/>
        <Themes />
      </div>
    </div>
  );
};

export default Nav;
