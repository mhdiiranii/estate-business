interface FrameType {
  height: string;
  column: "one" | "two" | "three";
}

const Framer = ({ height, column }: FrameType) => {
  switch (column) {
    case "one":
      return (
        <div className={`w-full min-h-[${height}] rounded-2xl flex gap-4 p-4 `}>
          <div className="w-full  min-h-max rounded-2xl bg-grey-50 animate-pulse"></div>
        </div>
      );
    case "two":
      return (
        <div className={`w-full min-h-[${height}] rounded-2xl flex gap-4 p-4 `}>
          <div className="w-full  min-h-max rounded-2xl bg-grey-50 animate-pulse"></div>
          <div className="w-full  min-h-max rounded-2xl bg-grey-50 animate-pulse"></div>
        </div>
      );
    case "three":
      return (
        <div className={`w-full min-h-[${height}] rounded-2xl flex gap-4 p-4 `}>
          <div className="w-full min-h-max rounded-2xl bg-grey-50 animate-pulse"></div>
          <div className="w-full min-h-max rounded-2xl bg-grey-50 animate-pulse"></div>
          <div className="w-full min-h-max rounded-2xl bg-grey-50 animate-pulse"></div>
        </div>
      );
  }
};

export default Framer;
