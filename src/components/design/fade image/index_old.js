'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import offer1 from '/public/images/crp.jpg'
import offer2 from '/public/images/sn.jpg'
import offer3 from '/public/images/blog1.png'
import offer4 from '/public/images/blog2.png'

const carousels = [
  { id: 1, images: [offer1, offer2], interval: 3000 },
  { id: 2, images: [offer3, offer4], interval: 4000 },
]

const EmblaCarouselMultiple = () => {
  return (
    <div>
      {carousels.map((carousel) => (
        <CarouselBox key={carousel.id} images={carousel.images} interval={carousel.interval} />
      ))}
    </div>
  )
}

const CarouselBox = ({ images, interval }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Fade(), Autoplay({ delay: interval })])

  return (
    <div className="embla my-5">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, idx) => (
            <div className="embla__slide" key={idx}>
              <Image className="embla__slide__img" src={img} alt={`Slide ${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarouselMultiple
