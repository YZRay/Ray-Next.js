import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from "@nextui-org/react";

const CarouselImage = ({ img }: { img: string[] }) => {
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
