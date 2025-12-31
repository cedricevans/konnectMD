
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Building2, Users, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BusinessBenefits = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      description: "🚧 Employer portal demo coming soon! 🚀",
    });
  };

  const benefits = [
    'Starting at $24.99/employee/month',
    'Unlimited provider access',
    'No insurance required',
    'HIPAA-compliant portals',
    'Flexible enrollments',
    'Predictable pricing model'
  ];

  return (
    <section id="business" className="py-32 px-6 bg-gradient-to-br from-[#0F1D3A] via-[#152B4D] to-[#0B1A33] text-[#F5F9FF] relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#1B355C] to-[#142B4A] -skew-x-12 transform translate-x-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#7EA0FF] tracking-widest text-sm font-semibold uppercase mb-6 block">For Employers</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Empower Your <span className="italic text-[#DDEBFF]">Workforce</span>
            </h2>
            <p className="text-lg text-[#F5F9FF]/80 leading-relaxed mb-8 font-light max-w-lg">
              Give your team the gift of health without breaking the bank. KonnectMD offers a robust, scalable healthcare solution that requires no insurance, simplifying benefits for everyone.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4169E1] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-light text-[#F5F9FF]/90">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleContact}
              className="bg-[#F5F9FF] text-[#0F1D3A] hover:bg-[#DDEBFF] px-10 py-7 rounded-full text-lg font-serif italic shadow-lg transition-all"
            >
              Get Employer Quote
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="bg-[#F5F9FF]/10 backdrop-blur-sm p-8 rounded-3xl border border-[#F5F9FF]/10 hover:bg-[#F5F9FF]/20 transition-all">
              <Building2 className="w-10 h-10 text-[#4169E1] mb-4" />
              <h3 className="text-xl font-serif mb-2">Flexible Implementation</h3>
              <p className="text-sm text-[#F5F9FF]/70 font-light">Whether you have 5 or 5,000 employees, our system adapts to your payroll and enrollment cycle effortlessly.</p>
            </div>
            
            <div className="bg-[#F5F9FF]/10 backdrop-blur-sm p-8 rounded-3xl border border-[#F5F9FF]/10 hover:bg-[#F5F9FF]/20 transition-all ml-0 lg:ml-12">
              <ShieldCheck className="w-10 h-10 text-[#9BB5FF] mb-4" />
              <h3 className="text-xl font-serif mb-2">Compliance & Security</h3>
              <p className="text-sm text-[#F5F9FF]/70 font-light">Full HIPAA compliance and secure portals ensure your company data and employee health information are protected.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
