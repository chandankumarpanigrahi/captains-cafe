import * as React from "react"
import image1 from '../../../assets/images/logo.png'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

function CarouselSize() {
    const data = [
        {
            name : "Deepu",
            class : "MCA",
            image : image1,
        },
        {
            name : "Naman",
            class : "MCA",
            image : image1
        },
        {
            name : "Raju",
            class : "MCA",
            image : image1
        },
        {
            name : "Somu",
            class : "MCA",
            image : image1
        },
    ]
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                {data.map((para, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                                    <div>{para.name}</div>
                                    <div>{para.class}</div>
                                    <Image src={para.image} alt="" height={300} width={300}/>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselSize
