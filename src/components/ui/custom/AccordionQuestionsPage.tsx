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
          <p className="text-[#bbb]">
            ¿En cuánto tiempo posiciono mi marca en los motores de búsqueda?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-yellow-100">
            El posicionamiento puede variar dependiendo de la competencia,
            calidad del contenido y estrategias aplicadas, normalmente para
            posicionar toma un tiempo de 4 a 6 meses optimizando el contenido y
            realizando estrategias solidas.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="2">
        <AccordionTrigger>
          <p className="text-[#bbb]">
            ¿Por qué una Landing page es más efectiva que una página web?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-yellow-100">
            Una landing page es más efectiva porque está diseñada
            específicamente para convertir visitantes en leads o clientes, esta
            realizada con un proposito, NO solo para informar.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="3">
        <AccordionTrigger>
          <p className="text-[#bbb]">
            ¿Qué me garantiza a mí, que esto puede ayudarme a facturar más?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-yellow-100">
            Nuestra experiencia y casos de éxito demuestran que las estrategias
            de marketing digital bien ejecutadas aumentan la visibilidad y las
            conversiones
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
