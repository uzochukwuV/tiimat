import { ChevronRight } from "lucide-react"
import { Accordion, AccordionContent,AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { motion } from "framer-motion"
function Faq() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-4"
    >
<Accordion type="single" collapsible className=" ">
        <AccordionItem value="one" className="border-b">
            <AccordionTrigger className="flex justify-between items-center py-8 w-full">
              <motion.p 
          className="text-[#222] font-medium text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
              >
          Discover and Learn
              </motion.p>
              <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
              >
          <ChevronRight className="AccordionChevron" />
              </motion.div>
            </AccordionTrigger>
            <AccordionContent className="AccordionContent">
          <div className="pb-2">
            <motion.p
              className="text-[#333] font-medium md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We don't just teach—we empower. Explore career paths in tech, business, design, and beyond. With hands-on learning, mentorship, and real-world projects, you'll gain the skills and confidence to pursue the future you want.</motion.p>
          </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem  value="two" className="border-b">
            <AccordionTrigger className=" flex justify-between items-center py-8 w-full  ">
                <motion.p 
                className=" text-[#222] font-medium text-xl md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                Upskill and Connect
                </motion.p>
              <ChevronRight className="AccordionChevron" />
            </AccordionTrigger>
            <AccordionContent className="AccordionContent">
                <div className=" pb-2">
                    <motion.p 
                    className=" text-[#333] font-medium md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                  Stay ahead of the curve with industry-relevant courses and programs tailored to your goals. At Tiimat, you’ll join a thriving community of learners, creators, and professionals—connect, collaborate, and grow together. </motion.p>
                </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem  value="three" className="border-b">
            <AccordionTrigger className=" flex justify-between items-center py-8 w-full  ">
              <p className=" text-[#222] font-medium text-xl md:text-2xl">Grow , Build and Monetize</p>
              <ChevronRight className="AccordionChevron" />
            </AccordionTrigger>
            <AccordionContent className="AccordionContent">
                <div className=" pb-2">
                  {/* <p className=" text-[#333] font-medium md:text-lg">Lets build the future together..........</p> */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className=" text-[#333] font-medium md:text-lg"
                >
                  Turn your knowledge into income. Whether you're launching a startup, freelancing, or landing your dream job, we’ll help you build practical skills and show you how to monetize your expertise in today’s digital economy.
                </motion.p>
                </div>
            </AccordionContent>
        </AccordionItem>
        
       
    </Accordion>

    </motion.div>
  )
}

export default Faq