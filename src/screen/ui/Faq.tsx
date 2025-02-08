import { ChevronRight } from "lucide-react"
import { Accordion, AccordionContent,AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { motion } from "framer-motion"
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
                  
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className=" text-[#333] font-medium md:text-lg">Discover your talent at TIIMAT Solutions</p>
                  </motion.div>
                </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem  value="two" className="border-b">
            <AccordionTrigger className=" flex justify-between items-center py-8 w-full  ">
                <motion.p 
                className=" text-[#222] font-medium text-xl md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                Collaborate
                </motion.p>
              <ChevronRight className="AccordionChevron" />
            </AccordionTrigger>
            <AccordionContent className="AccordionContent">
                <div className=" pb-2">
                    <motion.p 
                    className=" text-[#333] font-medium md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                    Collaborate with teams of talented students and hone your skill
                    </motion.p>
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
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className=" text-[#333] font-medium md:text-lg"
                >
                  Lets build the future together........
                </motion.p>
                </div>
            </AccordionContent>
        </AccordionItem>
        
       
    </Accordion>
  )
}

export default Faq