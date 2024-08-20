// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";

// state
import { useState } from "react";

// data
import { questions } from "@/helpers/questions.json";

export function AccordionQuestions() {
  const [ openAccordion, setOpenAccordion ] = useState<string>("1")
  return (
    <Accordion value={openAccordion} onValueChange={setOpenAccordion} type="single" collapsible className="w-full">
      {questions.map(({ answer, id, title }, index) => (
        <AccordionItem key={index} value={`${id}`} >
          <AccordionTrigger>
              <p className="text-[#ccc] mr-3 xxs:text-sm sm:text-lg text-start" >{title}</p>
          </AccordionTrigger>
          <AccordionContent><p className="xxs:text-xs xs:text-sm sm:text-md">{answer}</p></AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
