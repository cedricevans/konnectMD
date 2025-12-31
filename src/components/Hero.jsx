
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { toast } = useToast();
  const avatarImages = [
    "https://as1.ftcdn.net/v2/jpg/05/67/67/64/1000_F_567676429_HwWopCB3vgPeBn6IDUCtQJliortFQkVA.jpg",
    "https://t3.ftcdn.net/jpg/06/31/89/22/240_F_631892212_Btjk6KWd9F9EPJtgYR3qTttu4yruTJGZ.jpg",
    "https://t4.ftcdn.net/jpg/16/05/49/73/240_F_1605497351_97ITw8oAIJUJN3KUrgA1F2RoQD7szSns.jpg"
  ];

  const handleCTA = () => {
    toast({
      description: "🚧 Membership portals are opening soon. Join the waitlist! 🚀",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-[#F5F9FF] via-white to-[#E7F1FF]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-br from-[#DDEBFF] to-white rounded-bl-[100px] -z-10 opacity-70" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#9BB5FF]/25 rounded-tr-[150px] -z-10" />
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[10%] w-64 h-64 bg-[#4169E1]/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 relative z-10"
          >
            <span className="inline-block px-4 py-1 border border-[#0F1D3A]/20 rounded-full text-[#0F1D3A] text-sm tracking-widest uppercase font-medium bg-white/50 backdrop-blur-sm">
              Healthcare for Everyone
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0F1D3A] leading-[1.1]">
              <span className="text-[#4169E1] italic">$0 Visit Fees</span>. $0 Prescription Costs.
            </h1>

            <p className="text-lg md:text-xl text-[#0F1D3A]/70 leading-relaxed font-light max-w-lg">
              Join KonnectMD for 24/7 affordable virtual healthcare. Access 4000+ board-certified providers and see a 60% reduction in unnecessary doctor office visits.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                onClick={handleCTA}
                className="bg-[#0F1D3A] hover:bg-[#1D3A66] text-[#F5F9FF] px-10 py-7 text-lg rounded-full shadow-xl transition-all hover:scale-105 font-serif italic"
              >
                For Individuals
              </Button>
              <Button 
                onClick={handleCTA}
                variant="ghost"
                className="text-[#0F1D3A] hover:text-[#4169E1] hover:bg-transparent px-8 py-7 text-lg group font-medium"
              >
                For Employers
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-sm text-[#0F1D3A]/60 font-medium">
               <div className="flex -space-x-3">
                 {avatarImages.map((src, index) => (
                   <div key={src} className="w-10 h-10 rounded-full border-2 border-[#F5F9FF] bg-[#DDEBFF] flex items-center justify-center text-xs overflow-hidden">
                     <img alt={`Member portrait ${index + 1}`} className="w-full h-full object-cover" src={src} />
                   </div>
                 ))}
               </div>
               <span>Trusted by Home Helpers, Alaska Farm Bureau, State Teachers Assn & City Services</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            {/* Organic Image Mask */}
            <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
              <img 
                className="w-full h-full object-cover" 
                alt="Telehealth consultation"
                src="https://amscardiology.com/wp-content/uploads/2023/08/shutterstock_1678229836-scaled.jpg" 
              />
              <div className="absolute inset-0 bg-[#0F1D3A]/10 mix-blend-multiply" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-20 -right-8 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-w-xs"
            >
              <h3 className="font-serif text-xl text-[#0F1D3A] mb-1">4000+ Providers</h3>
              <p className="text-sm text-[#9BB5FF]">Board-certified & ready.</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 -left-8 bg-[#9BB5FF] p-6 rounded-2xl shadow-xl text-white max-w-xs"
            >
              <h3 className="font-serif text-xl mb-1 italic">Save 60%</h3>
              <p className="text-sm opacity-90">On office visits & time.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
