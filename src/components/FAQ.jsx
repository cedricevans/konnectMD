
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is KonnectMD?',
      answer: 'KonnectMD is a membership-based healthcare solution providing 24/7 access to board-certified doctors, prescription savings, and medical bill advocacy for one low monthly fee. It is not insurance, but a way to access care directly.'
    },
    {
      question: 'Are there really $0 visit fees?',
      answer: 'Yes! For our members, virtual urgent care visits are completely free ($0). You can speak with a provider as often as needed without worrying about copays or deductibles.'
    },
    {
      question: 'How do I access Vet Services?',
      answer: 'Our Family plans include access to 24/7 virtual veterinary professionals. You can get advice for your cats and dogs regarding behavior, nutrition, and non-emergency health concerns anytime.'
    },
    {
      question: 'Is KonnectMD suitable for businesses?',
      answer: 'Absolutely. We offer tailored plans for employers starting at just $24.99/employee/month. It includes an employer dashboard for easy management and provides a high-value benefit to attract and retain talent.'
    },
    {
      question: 'Do I need insurance to join?',
      answer: 'No insurance is required to join KonnectMD. Our membership is open to everyone regardless of insurance status or medical history. It works great as a standalone service or alongside a high-deductible plan.'
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-gradient-to-b from-[#F5F9FF] via-white to-[#EAF2FF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F1D3A] mb-6">
            Common <span className="italic text-[#4169E1]">Questions</span>
          </h2>
          <p className="text-lg text-[#0F1D3A]/70 font-light">
            Everything you need to know about your KonnectMD membership.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="border-b border-[#DDEBFF]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-serif transition-colors duration-300 ${openIndex === index ? 'text-[#4169E1]' : 'text-[#0F1D3A] group-hover:text-[#4169E1]'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-[#9BB5FF]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-[#0F1D3A]/70 text-lg font-light leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
