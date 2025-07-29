"use client";
import Image from 'next/image';
import pattern from '../../../assets/images/hero.png';
import HeroSection from '@/app/ui/hero';

const SlidingBackground = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 flex w-[200%] animate-slide-infinite">
                <div className="w-full h-full relative">
                    <Image
                        src={pattern}
                        alt="Background pattern"
                        fill
                        className="object-cover select-none"
                        unoptimized
                    />
                </div>
                <div className="w-full h-full relative">
                    <Image
                        src={pattern}
                        alt="Background pattern"
                        fill
                        className="object-cover select-none"
                        unoptimized
                    />
                </div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <HeroSection />
            </div>
        </div>
    );
};

export default SlidingBackground