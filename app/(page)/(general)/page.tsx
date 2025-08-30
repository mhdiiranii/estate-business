"use client";

import Properties from "@/app/component/home-layout/properties";
import HeroSection from "../../component/home-layout/heroSection";

export default function Home() {
  
  return (
    <div className="flex flex-col gap-36">
      <HeroSection/>
      <Properties/>
    </div>
  )
}
