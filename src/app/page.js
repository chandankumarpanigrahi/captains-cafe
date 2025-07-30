import Image from "next/image";
import styles from "./page.module.css";
import MainHeader from "./components/header";
import SlidingBackground from "./components/animatedBackground";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="container fixed z-20">
        <MainHeader />
      </div>
      <div className="hero_section w-full flex items-center lg:justify-center">
        <div className={`${styles.hero_section} w-full h-full`}>
          <SlidingBackground/>
        </div>
      </div>
    </main>
  );
}


