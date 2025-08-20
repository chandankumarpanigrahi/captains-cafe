"use client"
import Image from "next/image";
import styles from "./page.module.css";
// import MainHeader from "./components/header";
import SlidingBackground from "../components/common/animatedBackground";
import Counters from "../components/design/counters";
import Intro from "../components/design/intro";
import WhyChooseUs from "../components/design/why choose us";
import HomeCta from "@/components/design/home cta";
import MaintenancePage from "@/components/design/maintenance";
import Featured from "@/components/design/featured";
import PopularMenu from "@/components/design/popular menu";
import TrendyMenu from "@/components/design/trendy dish";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      {/* <div className={`${styles.hero_section} w-full flex items-center lg:justify-center`}>
        <div className={`${styles.inner_hero_contents} w-full h-full`}>
          <SlidingBackground />
        </div>
        <div className={styles.hero_bg_bottom}></div>
      </div>
      <Counters />
      <Intro />
      <WhyChooseUs/>
      <HomeCta/>
      <Featured/>
      <PopularMenu/>
      <TrendyMenu/> */}
      <MaintenancePage/>
    </main>
  );
}


