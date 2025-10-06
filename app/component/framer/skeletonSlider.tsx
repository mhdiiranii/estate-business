'use client'

import { ConfigProvider, Flex, Skeleton, theme } from "antd";
import { useTheme } from "next-themes";

interface FrameType {
  height: string;
  column?: number | null;
}

const SkeletonSlider = ({ height, column }: FrameType) => {

  const {  resolvedTheme } = useTheme();



  return (
    <div className={`w-full col-span-full min-h-[${height}] rounded-2xl flex gap-4 p-4 `}>
      {Array.from({ length: column as number }).map((iten, index) => (
        <div key={index} className="w-full flex flex-col gap-6">
          <ConfigProvider
            theme={{
              algorithm: resolvedTheme == 'light'? theme.defaultAlgorithm : theme.darkAlgorithm,
            }}
          >
            <Skeleton.Image active className="!w-full !min-h-[40vh]" />
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
};

export default SkeletonSlider;
