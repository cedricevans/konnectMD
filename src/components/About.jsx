import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const benefits = [
    'The Costco/Sam’s Club of healthcare access',
    'No deductibles',
    'No co-pays',
    'No exclusions for preexisting conditions',
    'No enrollment periods',
    'Zero additional cost for thousands of chronic medications',
    '12,000+ state certified licensed providers',
    '400,000+ active members',
    'Add up to 7 additional family members at no additional cost',
    'Upgrade, downgrade, or cancel at any time'
  ];

  const callouts = [
    {
      title: 'ACA Cost Comparison',
      subtitle: 'ACA premiums vs. KMD affordable access options',
      body: [
        'One membership replaces multiple layers of cost and complexity for families and employers.',
        'KonnectMD keeps access predictable even as premiums shift year to year.'
      ]
    },
    {
      title: 'One Membership Benefits',
      subtitle: 'Coverage for the entire household',
      body: [
        'A single paid KonnectMD membership covers an entire household, allowing up to eight family members to access vital virtual healthcare services and affordable medications.',
        'This helps families prioritize health without financial burden or barriers to care.'
      ]
    },
    {
      title: '2026 Affordability Cliff (If Not Extended)',
      subtitle: '2026 affordability crisis',
      body: [
        'Enhanced premium tax credit rules expire on December 31, 2025 unless Congress acts.',
        'Black families could see net premium increases of 150% to 300%.'
      ],
      list: [
        'Drop coverage',
        'Delay care',
        'Skip medication',
        'Rely on emergency rooms'
      ],
      footer:
        'This creates a health and financial crisis that will fall directly on families and on the Black church.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <span className="text-xs tracking-[0.3em] uppercase text-gray-500">
                About KonnectMD
              </span>
              <h2 className="text-[34px] uppercase font-light text-gray-900">
                Member Benefits Summary
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">
              KonnectMD delivers direct-access care designed to remove cost barriers and simplify healthcare for families and employers.
            </p>
            <ul className="grid gap-3 text-sm text-gray-700">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {callouts.map((callout, index) => (
              <motion.div
                key={callout.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 md:p-8 bg-[#F2F7FF] rounded-2xl"
              >
                <div className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
                  {callout.subtitle}
                </div>
                <div className="text-2xl font-light text-gray-900 mb-3">
                  {callout.title}
                </div>
                <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  {callout.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {callout.list ? (
                    <ul className="grid gap-2 text-sm text-gray-700">
                      {callout.list.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {callout.footer ? <p className="text-gray-700">{callout.footer}</p> : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
