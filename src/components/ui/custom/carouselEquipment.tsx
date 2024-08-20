// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// const pluggin = () => {
//   const [ eblaRef ] = useEmblaCarousel({ loop: true }, [Autoplay()])
// };

export const CarouselEquipment = ({
  persons,
}: {
  persons: Array<ImageMetadata>;
}) => {
  return (
    <Carousel className="flex xxs:w-[95%] sm:w-4/5 xl:w-1/2 max-h-auto">
      <CarouselContent className="w-full h-full gap-5">
        {persons.map((person, index) => (
          <CarouselItem
            key={index}
            className="flex w-full h-max rounded-3xl m-auto flex-col items-center"
          >
            <img src={person.src} className="w-full h-full ms-5" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
