"use client";

import Image from "next/image";
import Link from "next/link";
import { CiLogin, CiLogout } from "react-icons/ci";
import { Button, Drawer, Menu, MenuProps, MenuTheme, Tooltip } from "antd";
import { RangeThems, Themes } from "@/app/themes";
import { signOut, useSession } from "next-auth/react";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { useTheme } from "next-themes";
import { useMenuClose, useSetMenuClose } from "@/app/Store/useStore";
import { useEffect, useState } from "react";

const route = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Property",
    href: "/property",
  },
  {
    id: 3,
    title: "About us",
    href: "/about-us",
  },
  {
    id: 4,
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    id: 5,
    title: "Services",
    href: "/my-services",
  },
];

export const AuthBtn = () => {
  const { status } = useSession();

  if (status === "unauthenticated") {
    return (
      <Tooltip title={"login"} color={"pink"} arrow>
        <Link
          href={"./login"}
          className="hover:!bg-inherit !h-full !flex lg:!h-auto items-center lg:!px-6 lg:!py-3.5 lg:!rounded-lg lg:dark:!text-white lg:hover:!bg-black lg:hover:!text-white  lg:dark:hover:!bg-white lg:dark:hover:!text-black !text-inherit"
        >
          <CiLogin size={20} />
        </Link>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={"logout"} color={"pink"} arrow>
      <Button
        type="text"
        onClick={() => signOut()}
        className="hover:!bg-inherit !h-full !flex lg:!h-auto items-center lg:!px-6 lg:!py-3.5 lg:!rounded-lg lg:dark:!text-white lg:hover:!bg-black lg:hover:!text-white  lg:dark:hover:!bg-white lg:dark:hover:!text-black !text-inherit"
      >
        <CiLogout size={20} />
      </Button>
    </Tooltip>
  );
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link href={"/"} className="">
        Home
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href={"/about-us"} className="">
        About Us
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link href={"/contact-us"} className="">
        Contact Us
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link href={"/properti"} className="">
        Properties
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link href={"/services"} className="">
        Services
      </Link>
    ),
  },
  { key: "6", label: <AuthBtn /> },
  { key: "7", label: <RangeThems /> },
];

const CustomNav = () => {
  const { resolvedTheme } = useTheme();
  const setMenuClose = useSetMenuClose();
  const menuClose = useMenuClose();

  return (
    <div>
      <Menu onClick={(e) => (e.key == "7" ? "" : setMenuClose(!menuClose))} selectable={false} theme={resolvedTheme as MenuTheme} items={items} mode="vertical" className="dark:!bg-black" />
    </div>
  );
};

const Nav = () => {
  const setMenuClose = useSetMenuClose();
  const menuClose = useMenuClose();
  const { status } = useSession();
  const [mount, setMount] = useState(true);

  const authUser = () => {
    if (status === "authenticated") {
      return route.map((item) => (
        <Link key={item.id} href={item.href} className="duration-300 text-lg hover:bg-black hover:text-white  dark:hover:bg-white dark:hover:text-black px-6 py-3.5 rounded-lg">
          {item.title}
        </Link>
      ));
    } else {
      return route.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`${item.id == 2 && "hidden"} duration-300 text-lg hover:bg-black hover:text-white  dark:hover:bg-white dark:hover:text-black px-6 py-3.5 rounded-lg`}
        >
          {item.title}
        </Link>
      ));
    }
  };
  useEffect(() => {
    setMount(false);
  }, []);

  if (mount) {
    return null;
  }

  return (
    <div className="flex justify-between items-center fixed top-0 w-full z-20 bg-white  dark:bg-black py-8 px-10">
      <div className="flex items-center gap-1">
        <Image src={"./icon.svg"} alt="icon" className="icon-style" width={40} height={40} />
        <p className="">Estatein</p>
      </div>
      <div className="flex items-center max-lg:hidden">{authUser()}</div>
      <div className="flex items-center gap-1 max-lg:hidden">
        <AuthBtn />
        <Themes />
      </div>
      <div className="block lg:hidden">
        <Button type="text" onClick={() => setMenuClose(!menuClose)} className="dark:!bg-black !bg-white dark:!text-white !text-black">
          <TiThMenu size={20} />
        </Button>
        <Drawer
          closeIcon={
            <span className="dark:text-white text-black">
              <IoMdClose />
            </span>
          }
          classNames={{ mask: "block lg:!hidden" }}
          className="dark:!bg-black block lg:!hidden  !text-white !border dark:!border-white rounded-tl-2xl rounded-bl-2xl"
          open={menuClose}
          onClose={() => setMenuClose(!menuClose)}
          closable={true}
        >
          <CustomNav />
        </Drawer>
      </div>
    </div>
  );
};

export default Nav;
