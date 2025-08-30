import { Button } from "antd";

const Properties = () => {
  return ( 
    <section className="container mx-auto flex flex-col justify-center items-center">
      <h2 className="w-full text-left">
        Featured Properties
      </h2>
      <div className="flex justify-between gap-10 mt-3.5 mb-20">
        <p className="w-2/3">
          Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information.
        </p>
        <Button type="text" className="my-btn dark:!text-white dark:!bg-grey-10">
          View All Properties
        </Button>
      </div>
    </section>
   );
}
 
export default Properties;