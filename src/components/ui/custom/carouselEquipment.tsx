import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselEquipment = () => {
  return (
    <Carousel className="w-[60%] max-h-64">
      <CarouselContent className="w-full h-full flex justify-start gap-5">
        <CarouselItem className="flex items-center h-64 rounded-3xl justify-center">
          <span className="text-3xl font-bold border border-white w-3/4 h-full text-center rounded-3xl leading-[250px]">1</span>
        </CarouselItem>
        <CarouselItem className="flex items-center h-64 rounded-3xl justify-center">
        <span className="text-3xl font-bold border border-white w-3/4 h-full text-center rounded-3xl leading-[250px]">2</span>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
