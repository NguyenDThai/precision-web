import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] transition-colors duration-300">
              {t('hero.title1')} <br />
              {t('hero.title2')} <span className="text-blue-600">{t('hero.title3')}</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed transition-colors duration-300">
              {t('hero.subtitle')}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2 group">
                {t('hero.startFree')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                {t('hero.learnMore')}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://picsum.photos/seed/dashboard/1200/900"
                alt="Precision Dashboard"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/10 dark:from-blue-600/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/40 rounded-full blur-3xl opacity-50 -z-10 transition-colors duration-300" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-100 dark:bg-indigo-900/40 rounded-full blur-3xl opacity-50 -z-10 transition-colors duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
