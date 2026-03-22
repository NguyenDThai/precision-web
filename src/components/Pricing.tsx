import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/src/lib/utils";

const plans = [
  {
    name: "Basic",
    description: "For individuals and experiments.",
    price: "0",
    features: ["Up to 3 projects", "Community support", "Basic analytics"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams and startups.",
    price: "29",
    features: ["Unlimited projects", "Priority email support", "Advanced analytics", "Custom integrations"],
    cta: "Get Started Pro",
    popular: true,
  },
  {
    name: "Premium",
    description: "For global scale enterprises.",
    price: "99",
    features: ["Everything in Pro", "24/7 dedicated support", "Custom SLA & Security"],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that matches your growth trajectory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-10 rounded-3xl border transition-all duration-300",
                plan.popular 
                  ? "bg-white border-blue-600 shadow-2xl scale-105 z-10" 
                  : "bg-gray-50 border-gray-100 hover:border-blue-200 hover:shadow-xl"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-500 font-medium">/mo</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-4 rounded-xl text-base font-bold transition-all",
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                    : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
