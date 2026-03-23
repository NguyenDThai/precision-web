import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const benefits = t('whyChooseUs.benefits', { returnObjects: true }) as string[];

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/meeting/1000/1200"
                alt="Our Team"
                className="w-full h-auto object-cover aspect-4/5"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-blue-600 dark:bg-blue-700 p-8 rounded-2xl text-white shadow-xl transition-colors duration-300">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-sm font-medium opacity-90">
                  {t('whyChooseUs.uptime_desc')}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 block transition-colors duration-300">
              {t('whyChooseUs.subtitle')}
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8 transition-colors duration-300">
              {t('whyChooseUs.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed transition-colors duration-300">
              {t('whyChooseUs.text')}
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-base font-semibold text-gray-900 dark:text-gray-200 transition-colors duration-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
