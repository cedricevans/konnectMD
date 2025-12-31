
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: 'Predictable Pricing',
      description: 'No hidden fees or surprise bills. Just straightforward, affordable access to premium care starting day one.',
      image: "https://t3.ftcdn.net/jpg/04/79/76/74/240_F_479767497_ouqT6wdA2ujOj4PcpXzgS5497PY7330N.jpg"
    },
    {
      number: "02",
      title: 'Flexible Enrollments',
      description: 'Whether for an individual or an entire workforce, enrollment is seamless, fast, and requires no insurance checks.',
      image: "https://t3.ftcdn.net/jpg/03/42/67/20/240_F_342672001_CeH6VBkX0vesOYSwXIeC8breKwLQ6gb8.jpg"
    },
    {
      number: "03",
      title: 'Tailored Solutions',
      description: 'From virtual primary care to specialized behavioral health, our ecosystem adapts to your unique health needs.',
      image: "https://t3.ftcdn.net/jpg/15/69/74/94/240_F_1569749439_At1HsBgKXHEjnAp7dUDHmQdEa9RMdnEB.jpg"
    },
    {
      number: "04",
      title: 'Advanced Portals',
      description: 'Dedicated, HIPAA-compliant portals for both employers and employees to manage health effortlessly.',
      image: "https://t3.ftcdn.net/jpg/17/25/63/92/240_F_1725639251_dPzHYLZqBioIFRQ7KDANo7Q9gmvx7lEC.jpg"
    }
  ];

  return (
    <section id="why-choose" className="py-32 px-6 bg-gradient-to-b from-[#F5F9FF] via-white to-[#EDF4FF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:text-center"
        >
          <span className="text-[#4169E1] tracking-widest text-sm font-semibold uppercase mb-4 block">Our Promise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F1D3A]">
            Why Choose <span className="italic">KonnectMD</span>?
          </h2>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0F1D3A]/10" />
                </div>
                {/* Decorative circle behind */}
                <div className={`absolute -z-10 w-full h-full top-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} bg-gradient-to-br from-[#DDEBFF] to-white rounded-[2rem]`} />
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <div className="text-6xl md:text-8xl font-serif text-[#DDEBFF] font-bold opacity-80 leading-none">
                  {step.number}
                </div>
                <h3 className="text-3xl font-serif text-[#0F1D3A]">{step.title}</h3>
                <p className="text-lg text-[#0F1D3A]/70 leading-relaxed font-light">
                  {step.description}
                </p>
                <div className="h-px w-20 bg-[#4169E1]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
