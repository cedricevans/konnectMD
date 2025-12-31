
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0C1730] to-[#0A142A] text-[#DDEBFF] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#4169E1] rounded-full flex items-center justify-center text-white font-serif font-bold italic">
                K
              </div>
              <span className="text-2xl font-serif font-bold text-[#F5F9FF]">KonnectMD</span>
            </div>
            <p className="text-[#DDEBFF]/60 leading-relaxed max-w-md font-light">
              Revolutionizing access to healthcare. 24/7 virtual care, $0 visit fees, and reduced medical costs for families and businesses nationwide.
            </p>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#4169E1] mb-6 block">Company</span>
            <ul className="space-y-4 font-light text-[#DDEBFF]/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Individuals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#4169E1] mb-6 block">Legal</span>
            <ul className="space-y-4 font-light text-[#DDEBFF]/80">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimers</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#DDEBFF]/10 flex flex-col items-center text-center gap-6">
           <p className="text-[#DDEBFF]/40 text-xs max-w-3xl font-light leading-relaxed">
             Disclaimer: KonnectMD is a direct healthcare membership and is NOT health insurance. We provide access to discounted healthcare services and telemedicine. We do not make payments to providers. Members are obligated to pay for all healthcare services but will receive a discount from those healthcare providers who have contracted with the discount plan organization.
           </p>
          <p className="text-[#DDEBFF]/40 text-sm font-light">
            © 2019-2025 KonnectMD. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-[#DDEBFF]/60 hover:text-[#4169E1] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-[#DDEBFF]/60 hover:text-[#4169E1] transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-[#DDEBFF]/60 hover:text-[#4169E1] transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
