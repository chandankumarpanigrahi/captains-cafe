"use client"
import Image from "next/image";
import styles from "./page.module.css";
import MainHeader from "./components/header";
import SlidingBackground from "./components/animatedBackground";
import Counters from "./ui/counters";
import Intro from "./ui/intro";
import WhyChooseUs from "./ui/why choose us";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="container fixed z-50">
        <MainHeader activeTab="Home" />
      </div>
      <div className={`${styles.hero_section}  w-full flex items-center lg:justify-center`}>
        <div className={`w-full h-full`}>
          <SlidingBackground />
        </div>
        <div className={styles.hero_bg_bottom}></div>
      </div>
      <Counters />
      <Intro />
      <WhyChooseUs/>
    </main>
  );
}


