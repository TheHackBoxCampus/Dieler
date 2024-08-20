import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselBrands = ({
  brands,
}: {
  brands: Array<ImageMetadata>;
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full md:hidden max-w-5xl"
    >
      <CarouselContent className="w-full h-full">
        {brands.map((brand, index) => (
          <CarouselItem
            key={index}
            className="xxs:basis-1/2 sm:basis-1/3 flex items-center justify-center"
          >
            <picture>
              <img src={brand.src} className="max-w-full"/>
            </picture>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
