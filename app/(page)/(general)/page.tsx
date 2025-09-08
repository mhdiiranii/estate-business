"use client";
import Properties from "@/app/component/home-layout/properties";
import HeroSection from "../../component/home-layout/heroSection";
import Cta from "@/app/component/home-layout/cta";

export default function Home() {
  
  return (
    <div className="flex flex-col gap-36">
      <HeroSection/>
      <Properties/>
      <Cta/>
    </div>
  )
}
