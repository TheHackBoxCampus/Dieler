import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";

export const AccordionQuestionsPage = () => {
  return (
    <Accordion type="single" collapsible className="w-1/2 m-auto my-10">
      <AccordionItem value="1">
        <AccordionTrigger>
          <p className="text-[#ccc]">
            ¿En cuánto tiempo posiciono mi marca en los motores de búsqueda?
          </p>
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>

      <AccordionItem value="2">
        <AccordionTrigger>
          <p className="text-[#ccc]">
            ¿Por qué una Landing page es más efectiva que una página web?
          </p>
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>

      <AccordionItem value="3">
        <AccordionTrigger>
          <p className="text-[#ccc]">¿Qué me garantiza a mí, que esto puede ayudarme a facturar más?</p>
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
