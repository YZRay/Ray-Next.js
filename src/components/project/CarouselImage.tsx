"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from "@nextui-org/react";

const CarouselImage: React.FC<{ img: string[] }> = ({ img }) => {
  const preventRightClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {img.map((item) => (
          <CarouselItem className="md:basis-1/2" key={item}>
            <Image
              isBlurred
              width={800}
              src={item}
              alt={item}
              className="max-w-full"
              onContextMenu={preventRightClick}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselImage;
