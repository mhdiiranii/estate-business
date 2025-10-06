"use client";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { Card } from "antd";

const achievements = [
  {
    id: 1,
    title: "3+ Years of Excellence",
    descriptions: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    id: 2,
    title: "Happy Clients",
    descriptions: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    id: 3,
    title: "Industry Recognition",
    descriptions: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

const navigating = [
  {
    id: 1,
    head: "Step 01",
    title: "Discover a World of Possibilities",
    descriptions:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    id: 2,
    head: "Step 02",
    title: "Narrowing Down your Choices",
    descriptions: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    id: 3,
    head: "Step 03",
    title: "Personalized Guidance",
    descriptions: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    id: 4,
    head: "Step 04",
    title: "See It For Yourself",
    descriptions: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    id: 5,
    head: "Step 05",
    title: "Making Informed Decisions",
    descriptions:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    id: 6,
    headr: "Step 06",
    title: "Getting the Best Deal",
    descriptions: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

const About = () => {
  return (
    <div className="mx-auto container mt-32 flex flex-col gap-14 lg:gap-36">
      <section className="flex max-laptop:flex-col-reverse w-full max-2xl:gap-10 justify-between items-center px-4">
        <div className="flex flex-col  justify-between items-start gap-10 w-full">
          <div className="flex flex-col justify-start items-start max-2xl:w-full w-3/4 gap-2.5">
            <h2>Our Journey</h2>
            <p>
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the
              years, we ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
            </p>
          </div>
          <div className="flex justify-between items-center max-2xl:w-full 2xl:w-3/4 max-2xl:flex-warp">
            <div className="sub-container max-laptop:flex-[48%]">
              <h3>200+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="sub-container max-laptop:flex-[48%]">
              <h3>200+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="sub-container max-laptop:flex-[48%]">
              <h3>200+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center max-laptop:justify-center">
          <Image src={"./about/svg/one.svg"} alt="image" width={200} height={200} className="w-full lg:w-2/4 xl:w-4/5 2xl:w-5/6" />
        </div>
      </section>
      <section className="flex max-lg:flex-col px-4 gap-10 lg:gap-14 xl:gap-20">
        <div className="flex flex-col justify-center  gap-3.5">
          <h2>Our Values</h2>
          <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>
        <div className="flex flex-col lg:p-10 xl:p-[60px] rounded-xl gap-5 lg:gap-16 bg-grey-08 border border-grey-15 shadow-[0_0_0_10px_rgba(#191919)]">
          <div className="flex justify-between max-lg:flex-col  lg:items-center gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="text-purple-75 border border-purple-60 p-3.5 md:4 lg:p-5 rounded-full">
                  <FaStar size={16} />
                </div>
                <h5>trust</h5>
              </div>
              <p>Trust is the cornerstone of every successful real estate transaction.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="text-purple-75 border border-purple-60 p-3.5 md:4 lg:p-5  rounded-full">
                  <Image src={"./about/svg/graduate.svg"} alt="graduate" width={16} height={16} />
                </div>
                <h5>Excellence</h5>
              </div>
              <p>We set the bar high for ourselves. From the properties we list to the services we provide.</p>
            </div>
          </div>
          <div className="flex justify-between max-lg:flex-col lg:items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="text-purple-75 border border-purple-60 p-3.5 md:4 lg:p-5  rounded-full">
                  <Image src={"./about/svg/community.svg"} alt="community" width={16} height={16} />
                </div>
                <h5>Client-Centric</h5>
              </div>
              <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="text-purple-75 border border-purple-60 p-3.5 md:4 lg:p-5  rounded-full">
                  <FaStar size={16} />
                </div>
                <h5>Our Commitment</h5>
              </div>
              <p>We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-14 px-4">
        <div className="flex flex-col items-start gap-3.5 w-full">
          <h2>Our Achievements</h2>
          <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>
        <div className="flex gap-10">
          {achievements.map((item) => (
            <Card key={item.id} className="!bg-inherit border !p-12 dark:!border-grey-15" classNames={{ title: "dark:text-white text-black", header: "!px-0" }} title={item.title}>
              <p>{item.descriptions}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-start gap-3.5 w-full px-4">
        <div className="flex flex-col items-start gap-3.5 w-full">
          <h2>Navigating the Estatein Experience</h2>
          <p>
            Navigating the Estatein Experience At Estatein, we ve designed a straightforward process to help you find and purchase your dream property with ease. Here s a step-by-step guide to how it
            all works.
          </p>
        </div>
        <div className="flex flex-wrap gap-10">
          {navigating.map((item) => (
            <Card
              key={item.id}
              className="!bg-inherit !w-full lg:!w-1/4 grow-3 !min-h-max  border !p- dark:!border-grey-15"
              classNames={{
                body: "navigating-body",
                title: "dark:text-white text-black",
                header: "!px-0 relative after:absolute !border-none after:w-[1px] after:h-full after:bg-purple-60 after:-left-[2px] !py-4 !px-5 ",
              }}
              title={item.head}
            >
              <h5 className="dark:text-white text-black after:absolute relative">{item.title}</h5>
              <p>{item.descriptions}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
