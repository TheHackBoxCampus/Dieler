import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";

import { questions } from "@/helpers/questions.json";

export function AccordionQuestions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map(({ answer, id, title }, index) => (
        <AccordionItem key={index} value={`${id}`}>
          <AccordionTrigger>
              <p className="text-[#ccc] mr-3" >{title}</p>
          </AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
