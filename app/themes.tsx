"use client";
import { useState, useEffect } from "react";
import { Button, ConfigProvider, Tooltip } from "antd";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Themes = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === "dark") {
    return (
      <div className="flex items-center  rounded-lg hover:bg-white hover:text-black  dark:hover:bg-black dark:hover:text-white">
        <ConfigProvider
          button={{ className: "" }}
          theme={{
            components: {
              Button: {
                textTextColor:"#fff",
                textHoverBg: "#fff",
                textTextHoverColor: "#000",
              },
            },
          }}
        >
          <Tooltip title={"light"} color="pink">
            <Button type="text" variant="text" style={{ height: "auto", padding: "14px 24px" }} onClick={() => setTheme("light")}>
              <MdOutlineLightMode size={20} />
            </Button>
          </Tooltip>
        </ConfigProvider>
      </div>
    );
  }

  return (
    <div className="flex items-center  rounded-lg hover:bg-black hover:text-white  dark:hover:bg-white dark:hover:text-black">
      <ConfigProvider
        button={{ className: "" }}
        theme={{
          components: {
            Button: {
              textHoverBg: "#000",
              textTextHoverColor: "#fff",
            },
          },
        }}
      >
        <Tooltip title={"dark"} color="pink">
          <Button type="text" variant="text" style={{ height: "auto", padding: "14px 24px" }} onClick={() => setTheme("dark")}>
            <MdDarkMode size={20} />
          </Button>
        </Tooltip>
      </ConfigProvider>
    </div>
  );
};

export default Themes;
