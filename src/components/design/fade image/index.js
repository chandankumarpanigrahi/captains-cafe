'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import styles from "./style.module.css"

import offer1 from '../../../../public/images/crp.jpg'
import offer2 from '../../../../public/images/sn.jpg'
import offer3 from '../../../../public/images/blog1.png'
import offer4 from '../../../../public/images/blog2.png'

const CarouselBox = ({ images, interval = 3000, height = 'h-64', width = 'w-full' }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Fade(), Autoplay({ delay: interval })])

  return (
    <div className={`embla ${width}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((img, idx) => (
            <div className={`${styles.embla__slide} relative ${width} ${height}`} key={idx}>
              <Image
                src={img}
                alt={`Slide ${idx}`}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



// Main Component
const MultipleCarousels = () => {
  return (
    <div className="flex items-center w-full h-full flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-full flex flex-col">
        <div className="p-2 w-full h-full flex">
          <CarouselBox images={[offer1, offer2]} interval={3000} height="h-[400px]" width="w-full" />
        </div>
        <div className="p-2 w-full h-full flex justify-end">
          <CarouselBox images={[offer3, offer4]} interval={4000} height="h-[300px]" width="w-full lg:w-2/3" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col">
        <div className="p-2 w-full h-full flex">
          <CarouselBox images={[offer1, offer3]} interval={5000} height="h-[300px]" width="w-full lg:w-2/3" />
        </div>
        <div className="p-2 w-full h-full flex">
          <CarouselBox images={[offer2, offer4]} interval={3500} height="h-[200px]" width="w-full lg:w-1/2" />
        </div>
      </div>
    </div>
  )
}

export default MultipleCarousels
