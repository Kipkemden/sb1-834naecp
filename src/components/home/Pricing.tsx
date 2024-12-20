import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: 'KES 2,999',
    description: 'Perfect for small property owners',
    features: [
      'Up to 5 properties',
      'Basic tenant screening',
      'M-Pesa integration',
      'Maintenance tracking',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: 'KES 7,999',
    description: 'For growing property portfolios',
    features: [
      'Up to 20 properties',
      'Advanced tenant screening',
      'M-Pesa integration',
      'Maintenance tracking',
      'Priority support',
      'Financial analytics',
      'Document storage',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large property management companies',
    features: [
      'Unlimited properties',
      'Advanced tenant screening',
      'Custom M-Pesa integration',
      'Advanced maintenance system',
      '24/7 phone support',
      'Advanced analytics',
      'API access',
      'Custom features',
    ],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  {tier.name !== 'Enterprise' && <span className="text-base font-medium text-gray-500">/month</span>}
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
                >
                  Get started
                </a>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;