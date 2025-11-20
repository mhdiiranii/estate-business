"use client";

import { ConfigProvider, Flex, Skeleton, theme } from "antd";
import { useTheme } from "next-themes";

interface FrameType {
  column?: number | null;
  component: "properti" | "companies";
}

const SkeletonSlider = ({ column, component }: FrameType) => {
  const { resolvedTheme } = useTheme();

  if (component == "properti") {
    return (
      <div className={`w-full col-span-full min-h-fit rounded-2xl flex gap-4 p-4 `}>
        {Array.from({ length: column as number }).map((iten, index) => (
          <div key={index} className="w-full flex flex-col gap-6">
            <ConfigProvider
              theme={{
                algorithm: resolvedTheme == "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
              }}
            >
              <Skeleton.Image active className="!w-full !min-h-f" />
              <Skeleton active paragraph={{ rows: 2, width: "100%" }} />
              <Flex gap={"middle"}>
                {Array.from({ length: 3 }).map((Item, index) => (
                  <Skeleton.Button key={index} active />
                ))}
              </Flex>
              <Flex className="" justify="space-between">
                <Skeleton rootClassName="!w-1/4" active title={false} paragraph={{ rows: 2, width: "100%" }} />
                <Skeleton.Button className="!h-[54px] !w-[15vh]" active size="large" />
              </Flex>
            </ConfigProvider>
          </div>
        ))}
      </div>
    );
  }

  if (component == "companies") {
    return (
      <div className={`w-full col-span-full min-h-fit  rounded-2xl flex gap-5 desktop:gap-7 p-4 `}>
        {Array.from({ length: column as number }).map((iten, index) => (
          <div key={index} className="w-full border border-grey-60 dark:border-grey-15 rounded-lg  flex flex-col gap-10 p-6 laptop:p-10 desktop:p-12 ">
            <ConfigProvider
              theme={{
                algorithm: resolvedTheme == "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
              }}
            >
              <div className="flex justify-between items-center">
                <div className="w-full flex flex-col gap-2">
                  <Skeleton rootClassName="!w-1/6" active title={false} paragraph={{ rows: 1, width: "100%" }} />
                  <Skeleton rootClassName="!w-3/6" active title={false} paragraph={{ rows: 1, width: "100%" }} />
                </div>
                <Skeleton.Button className="!h-[54px] !w-[15vh]" active size="small" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex w-full flex-col gap-2">
                  <Skeleton rootClassName="!w-2/6" active title={false} paragraph={{ rows: 1, width: "100%" }} />
                  <Skeleton rootClassName="!w-4/6" active title={false} paragraph={{ rows: 1, width: "100%" }} />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Skeleton rootClassName="!w-2/6" active title={false} paragraph={{ rows: 1, width: "100%" }} />
                  <Skeleton rootClassName="!w-4/6" active title={false} paragraph={{ rows: 1, width: "100%" }} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Skeleton rootClassName="!w-1/6" active title={false} paragraph={{ rows: 1, width: "100%" }} />
                <Skeleton className="!pl-2" rootClassName="!w-2/7" active title={false} paragraph={{ rows: 1, width: "100%" }} />
                <Skeleton className="!pl-4" rootClassName="!w-full" active title={false} paragraph={{ rows: 2, width: "100%" }} />
              </div>
            </ConfigProvider>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default SkeletonSlider;
