
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { toast } = useToast();

  const handleSelectPlan = () => {
    toast({
      description: "🚧 Plan selection coming soon! 🚀",
    });
  };

  const plans = [
    {
      name: 'Silver',
      price: '29.99',
      description: 'Less than $1 per day.',
      features: [
        'Spouses and dependents included for free',
        'Virtual urgent care with $0 visit fees for unlimited visits',
        '$0 cost acute prescription formulary and discounts on all other medications'
      ],
      highlight: false
    },
    {
      name: 'Gold',
      price: '59.99',
      description: 'Less than $2 per day.',
      features: [
        'Includes all Silver benefits',
        'Virtual counseling and on-demand talk therapy',
        'Message a doctor for second opinions and medical advice'
      ],
      highlight: true
    },
    {
      name: 'Platinum',
      price: '89.99',
      description: 'Less than $3 per day.',
      features: [
        'Includes all Gold benefits',
        'Virtual primary care, weight loss, and men’s health with $25 visit',
        'Virtual dermatology with three $0 visits',
        '$5 cost for chronic medications'
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-white via-[#F5F9FF] to-[#EAF2FF] text-[#0F1D3A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F1D3A] mb-6">
            Become a Member &amp; Gain <span className="text-[#4169E1] italic">Access</span>
          </h2>
          <p className="text-lg text-[#0F1D3A]/70 max-w-2xl mx-auto font-light">
            One-time enrollment fee of $29.99. Immediate access. Easy monthly subscription. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-[2.5rem] p-8 md:p-10 transition-all ${
                plan.highlight 
                  ? 'bg-[#0F1D3A] text-[#F5F9FF] shadow-2xl scale-105 z-10' 
                  : 'bg-gradient-to-br from-[#DDEBFF] to-white text-[#0F1D3A] border border-[#0F1D3A]/5 hover:from-[#CFE0F7] hover:to-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-[#7EA0FF] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-serif mb-2">
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 opacity-70`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl opacity-60">$</span>
                  <span className="text-5xl font-serif">
                    {plan.price}
                  </span>
                  <span className="opacity-60 text-sm">/mo</span>
                </div>
              </div>

              <div className={`h-px w-full mb-8 ${plan.highlight ? 'bg-[#F5F9FF]/10' : 'bg-[#0F1D3A]/10'}`} />

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlight ? 'bg-[#F5F9FF]/20 text-[#F5F9FF]' : 'bg-[#0F1D3A]/10 text-[#0F1D3A]'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm opacity-80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={handleSelectPlan}
                className={`w-full py-7 rounded-full text-lg font-serif italic transition-all ${
                  plan.highlight 
                    ? 'bg-[#4169E1] hover:bg-[#3559C7] text-white' 
                    : 'bg-[#0F1D3A] hover:bg-[#1D3A66] text-[#F5F9FF]'
                }`}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
