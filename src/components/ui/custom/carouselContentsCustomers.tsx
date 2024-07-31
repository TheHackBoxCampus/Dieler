import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselContentsCustomers = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl"
    >
      <CarouselContent className="w-full h-full flex justify-start gap-5">
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-1-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-2-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-3-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-4-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-5-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-6-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-7-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-8-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-2-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <picture>
            <img
              src="/src/assets/images/resultado-2-contenidos.png"
              alt=""
              className="rounded-xl max-w-full"
            />
          </picture>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
