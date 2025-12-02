"use client";
import Slider from "@/app/component/slider/slider";
import Cta from "../(block)/cta";
import HeroSection from "./(block)/heroSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-20">
      <HeroSection />
      <Slider
        query="properti"
        head="Featured Properties"
        title="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more
            information."
      />
      <Cta />
    </div>
  );
}
