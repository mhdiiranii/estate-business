interface FrameType {
  height: string;
  column?: number| null;
}

const Framer = ({ height, column }: FrameType) => {
  switch (column) {
    case 1:
      return (
        <div className={`w-full min-h-[${height}] rounded-2xl flex gap-4 p-4 `}>
          <div className="w-full  min-h-max rounded-2xl bg-grey-50 animate-pulse"></div>
        </div>
      );
    case 2:
      return (
        <div className={`w-full min-h-[${height}] rounded-2xl flex gap-4 p-4 `}>
          <div className="w-full  min-h-max rounded-2xl bg-grey-50 animate-pulse"></div>
          <div className="w-full  min-h-max rounded-2xl bg-grey-50 animate-pulse"></div>
        </div>
      );
    case 3:
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
