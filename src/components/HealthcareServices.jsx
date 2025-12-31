
import React from 'react';
import { motion } from 'framer-motion';

const HealthcareServices = () => {
  const services = [
    {
      title: 'Telehealth & Urgent Care',
      description: '24/7/365 access to board-certified doctors for non-emergency conditions. No waiting rooms, no hidden fees.',
      color: 'bg-gradient-to-br from-[#DDEBFF] to-white'
    },
    {
      title: 'Virtual Primary Care',
      description: 'Build a relationship with a provider who knows your history. Continuity of care for long-term health.',
      color: 'bg-gradient-to-br from-[#F2F7FF] to-white'
    },
    {
      title: 'Behavioral Health',
      description: 'Confidential mental health support and counseling available from the privacy of your own home.',
      color: 'bg-gradient-to-br from-[#DDEBFF] to-white'
    },
    {
      title: 'Rx Savings (Up to 70%)',
      description: 'Significant discounts on prescriptions at thousands of pharmacies nationwide. $0 cost options available.',
      color: 'bg-gradient-to-br from-[#F2F7FF] to-white'
    },
    {
      title: 'Dermatology',
      description: 'Upload photos and receive a diagnosis and treatment plan for skin conditions within 24 hours.',
      color: 'bg-gradient-to-br from-[#DDEBFF] to-white'
    },
    {
      title: 'Medical Bill Advocacy',
      description: 'Expert negotiators work to lower your out-of-pocket medical expenses and resolve billing errors.',
      color: 'bg-gradient-to-br from-[#F2F7FF] to-white'
    },
    {
      title: 'Vet Services',
      description: '24/7 virtual care for your furry family members. Expert advice for cats and dogs anytime.',
      color: 'bg-gradient-to-br from-[#DDEBFF] to-white'
    },
    {
      title: 'In-Person Discounts',
      description: 'Save on dental, vision, chiropractic, labs, and MRI services at participating providers.',
      color: 'bg-gradient-to-br from-[#F2F7FF] to-white'
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-b from-white via-[#F5F9FF] to-[#EAF2FF]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F1D3A] mb-6">
            Individual <span className="text-[#9BB5FF] italic">Access</span>
          </h2>
          <p className="text-lg text-[#0F1D3A]/70 max-w-2xl mx-auto font-light">
            Comprehensive care that covers every aspect of your life, from urgent needs to long-term wellness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Telemed from anywhere',
              src: 'https://t3.ftcdn.net/jpg/17/25/63/92/240_F_1725639251_dPzHYLZqBioIFRQ7KDANo7Q9gmvx7lEC.jpg',
              alt: 'Telemedicine visit on tablet'
            },
            {
              title: 'Care team on screen',
              src: 'https://as1.ftcdn.net/v2/jpg/05/67/67/64/1000_F_567676429_HwWopCB3vgPeBn6IDUCtQJliortFQkVA.jpg',
              alt: 'Care team consultation'
            },
            {
              title: 'Fast follow-ups',
              src: 'https://t3.ftcdn.net/jpg/06/31/89/22/240_F_631892212_Btjk6KWd9F9EPJtgYR3qTttu4yruTJGZ.jpg',
              alt: 'Follow-up care session'
            }
          ].map((image) => (
            <div key={image.title} className="relative overflow-hidden rounded-[2rem] shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D3A]/70 via-[#0F1D3A]/10 to-transparent" />
              <div className="absolute bottom-4 left-5 text-white font-serif text-lg">
                {image.title}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`${service.color} p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 group`}
            >
              <h3 className="text-xl font-serif text-[#0F1D3A] mb-3 group-hover:text-[#4169E1] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#0F1D3A]/70 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareServices;
