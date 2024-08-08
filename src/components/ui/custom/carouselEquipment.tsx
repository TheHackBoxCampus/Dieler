import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselEquipment = () => {
  return (
    <Carousel className="flex w-1/2 max-h-auto">
      <CarouselContent className="w-full h-full flex justify-start gap-5">
        <CarouselItem className="flex w-2/3 h-auto rounded-3xl justify-center">
          <img src="/src/assets/images/equipo/diego.png" className="w-full h-full" alt="" />
        </CarouselItem>
        <CarouselItem className="flex w-2/3 h-auto rounded-3xl justify-center">
          <img src="/src/assets/images/equipo/daniel.png" className="w-full h-full" alt="" />
        </CarouselItem>
        <CarouselItem className="flex w-2/3 h-auto rounded-3xl justify-center">
          <img src="/src/assets/images/equipo/miller.png" className="w-full h-full" alt="" />
        </CarouselItem>
        <CarouselItem className="flex w-2/3 h-auto rounded-3xl justify-center">
          <img src="/src/assets/images/equipo/sofia.png" className="w-full h-full" alt="" />
        </CarouselItem>
        <CarouselItem className="flex w-2/3 h-auto rounded-3xl justify-center">
          <img src="/src/assets/images/equipo/mojica.png" className="w-full h-full" alt="" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
