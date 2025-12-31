
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check } from 'lucide-react';

const GlpProgram = () => {
  const { toast } = useToast();

  const handleLearnMore = () => {
    toast({
      description: "🚧 KonnectMD Weight Loss details coming soon! 🚀",
    });
  };

  const benefits = [
    'Affordable GLP-1 access',
    'Doctor-monitored progress',
    'Nutritional guidance included',
    'Sustainable weight management'
  ];

  return (
    <section id="glp-program" className="py-32 px-6 bg-gradient-to-b from-[#DDEBFF] via-[#F5F9FF] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-[#4169E1] tracking-widest text-sm font-semibold uppercase mb-6 block">Specialized Care</span>
             <h2 className="text-4xl md:text-6xl font-serif text-[#0F1D3A] mb-8 leading-tight">
               KonnectMD <br/>
               <span className="text-[#4169E1] italic">GLP-1 Program</span>
             </h2>
             <p className="text-lg text-[#0F1D3A]/70 leading-relaxed mb-10 font-light max-w-lg">
               Access the latest in weight management science. Our GLP-1 program pairs you with providers who understand metabolic health, offering a path to sustainable results without the stigma.
             </p>

             <div className="grid sm:grid-cols-2 gap-6 mb-12">
               {benefits.map((benefit, index) => (
                 <div key={index} className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full border border-[#4169E1] flex items-center justify-center flex-shrink-0 mt-1">
                     <Check className="w-3 h-3 text-[#4169E1]" />
                   </div>
                   <span className="text-[#0F1D3A]/80 font-light">{benefit}</span>
                 </div>
               ))}
             </div>

             <Button 
               onClick={handleLearnMore}
               className="bg-[#0F1D3A] hover:bg-[#1B355C] text-white px-10 py-7 rounded-full text-lg font-serif italic shadow-lg transition-all"
             >
               Start Program
             </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl">
               <img 
                 src="https://t4.ftcdn.net/jpg/16/05/49/73/240_F_1605497351_97ITw8oAIJUJN3KUrgA1F2RoQD7szSns.jpg" 
                 alt="Medical consultation"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D3A]/60 to-transparent" />
               <div className="absolute bottom-10 left-10 text-white">
                 <div className="text-4xl font-serif font-bold mb-2">95%</div>
                 <div className="text-sm uppercase tracking-wide opacity-90">Success Rate</div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlpProgram;
