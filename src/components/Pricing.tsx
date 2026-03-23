import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.plans.basic.name'),
      description: t('pricing.plans.basic.description'),
      price: "0",
      features: t('pricing.plans.basic.features', { returnObjects: true }) as string[],
      cta: t('pricing.plans.basic.cta'),
      popular: false,
    },
    {
      name: t('pricing.plans.pro.name'),
      description: t('pricing.plans.pro.description'),
      price: "29",
      features: t('pricing.plans.pro.features', { returnObjects: true }) as string[],
      cta: t('pricing.plans.pro.cta'),
      popular: true,
    },
    {
      name: t('pricing.plans.premium.name'),
      description: t('pricing.plans.premium.description'),
      price: "99",
      features: t('pricing.plans.premium.features', { returnObjects: true }) as string[],
      cta: t('pricing.plans.premium.cta'),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6 transition-colors duration-300">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {t('pricing.subtitle')}
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
                  ? "bg-white dark:bg-gray-900 border-blue-600 shadow-2xl scale-105 z-10" 
                  : "bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-gray-700 hover:shadow-xl"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {t('pricing.mostPopular')}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">${plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">{t('pricing.perMonth')}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    <Check className="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0 transition-colors duration-300" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-4 rounded-xl text-base font-bold transition-all",
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-blue-900/20"
                    : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
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
