import { ChevronRight } from "lucide-react"
import { Accordion, AccordionContent,AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

function Faq() {
  return (
    <Accordion type="single" collapsible className=" ">
        <AccordionItem  value="one" className="border-b">
            <AccordionTrigger className=" flex justify-between items-center py-8 w-full  ">
              <p className=" text-[#222] font-medium text-xl md:text-2xl">Discover</p>
              <ChevronRight className="AccordionChevron" />
            </AccordionTrigger>
            <AccordionContent className="AccordionContent">
                <div className=" pb-2">
                  <p className=" text-[#333] font-medium md:text-lg">Discover your talent at TIIMAT Solutions</p>
                </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem  value="two" className="border-b">
            <AccordionTrigger className=" flex justify-between items-center py-8 w-full  ">
              <p className=" text-[#222] font-medium text-xl md:text-2xl">Collaborate</p>
              <ChevronRight className="AccordionChevron" />
            </AccordionTrigger>
            <AccordionContent className="AccordionContent">
                <div className=" pb-2">
                  <p className=" text-[#333] font-medium md:text-lg">Collaborate with teams of talented students and hone your skill</p>
                </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem  value="three" className="border-b">
            <AccordionTrigger className=" flex justify-between items-center py-8 w-full  ">
              <p className=" text-[#222] font-medium text-xl md:text-2xl">Build</p>
              <ChevronRight className="AccordionChevron" />
            </AccordionTrigger>
            <AccordionContent className="AccordionContent">
                <div className=" pb-2">
                  <p className=" text-[#333] font-medium md:text-lg">Lets build the future together..........</p>
                </div>
            </AccordionContent>
        </AccordionItem>
        
       
    </Accordion>
  )
}

export default Faq