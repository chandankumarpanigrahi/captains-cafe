"use client"
import Image from "next/image";
import styles from "./page.module.css";
// import MainHeader from "./components/header";
import PromoModal from "../components/common/PromoModal";
import SlidingBackground from "../components/common/animatedBackground";
import Counters from "../components/design/counters";
import Intro from "../components/design/intro";
import WhyChooseUs from "../components/design/why choose us";
import HomeCta from "@/components/design/home cta";
import Featured from "@/components/design/featured";
import PopularMenu from "@/components/design/popular menu";
import TrendyMenu from "@/components/design/trendy dish";
import Services from "@/components/design/our services";
import Testimonials from "@/components/design/testimonials";
import Blogs from "@/components/design/our blogs";
import BottomBG from "@/components/design/bottom background";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className={`${styles.hero_section} w-full flex items-center lg:justify-center`}>
        <div className={`${styles.inner_hero_contents} w-full h-full`}>
          <SlidingBackground />
        </div>

        {/* Light mode */}
        <div className={`${styles.hero_bg_bottom} block dark:hidden`}></div>
        {/* Dark mode */}
        <div className={`${styles.hero_bg_bottom_dark} hidden dark:block`}></div>

      </div>
      <Counters />
      <Intro />
      <WhyChooseUs />
      <HomeCta />
      <Featured />
      <PopularMenu />
      <TrendyMenu />
      <Services />
      <Testimonials />
      <Blogs />
      <BottomBG />
      <PromoModal />
    </main>
  );
}