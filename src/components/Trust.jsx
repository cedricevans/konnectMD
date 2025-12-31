
import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
  const testimonials = [
    {
      name: 'Home Helpers',
      role: 'Corporate Partner',
      content: "KonnectMD has transformed our employee benefits package. The enrollment was seamless and our team loves the $0 visit fees.",
      image: "https://t3.ftcdn.net/jpg/04/79/76/74/240_F_479767497_ouqT6wdA2ujOj4PcpXzgS5497PY7330N.jpg"
    },
    {
      name: 'State Teachers Association',
      role: 'Education Partner',
      content: 'Telemedicine access keeps our educators healthy and in the classroom with convenient care and quick follow-ups.',
      image: "https://t3.ftcdn.net/jpg/03/42/67/20/240_F_342672001_CeH6VBkX0vesOYSwXIeC8breKwLQ6gb8.jpg"
    },
    {
      name: 'Alaska Farm Bureau',
      role: 'Association Member',
      content: 'Access to care in remote areas is crucial. KonnectMD delivers reliable, high-quality virtual healthcare where others couldn\'t.',
      image: "https://t3.ftcdn.net/jpg/15/69/74/94/240_F_1569749439_At1HsBgKXHEjnAp7dUDHmQdEa9RMdnEB.jpg"
    },
    {
      name: 'City Public Works',
      role: 'Civil Services Partner',
      content: 'Our crews get fast, reliable virtual care that fits demanding schedules and keeps projects moving.',
      image: "https://t3.ftcdn.net/jpg/17/25/63/92/240_F_1725639251_dPzHYLZqBioIFRQ7KDANo7Q9gmvx7lEC.jpg"
    },
    {
      name: 'Pulmonary & Internal Medicine',
      role: 'Medical Partner',
      content: 'A fantastic supplement to traditional care. Their 24/7 availability reduces strain on our office and keeps patients healthier.',
      image: "https://as1.ftcdn.net/v2/jpg/05/67/67/64/1000_F_567676429_HwWopCB3vgPeBn6IDUCtQJliortFQkVA.jpg"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#DDEBFF] via-[#F5F9FF] to-white relative overflow-hidden">
        {/* Soft gradient orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#4169E1] tracking-widest text-sm font-semibold uppercase mb-4 block">Trusted Partners</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F1D3A]">
            Stories of <span className="italic">Impact</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 bg-[#4169E1] rounded-full opacity-20 blur-lg transform translate-y-2" />
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full border-4 border-[#F5F9FF] shadow-lg relative z-10"
                />
              </div>
              
              <p className="text-xl font-serif italic text-[#0F1D3A] mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-bold text-[#0F1D3A] tracking-wide uppercase text-sm mb-1">{testimonial.name}</div>
                <div className="text-xs text-[#9BB5FF] uppercase tracking-wider">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 pt-12 border-t border-[#0F1D3A]/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-60">
            <div className="font-serif text-xl text-[#0F1D3A]">HIPAA Compliant</div>
            <div className="font-serif text-xl text-[#0F1D3A]">4000+ Providers</div>
            <div className="font-serif text-xl text-[#0F1D3A]">Nationwide Access</div>
            <div className="font-serif text-xl text-[#0F1D3A]">No Hidden Fees</div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
