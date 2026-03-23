import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-4rem-20rem)] py-32 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-2xl mx-auto"
      >
        <h1 className="text-8xl sm:text-9xl font-extrabold text-blue-600 dark:text-blue-500 tracking-tight drop-shadow-sm">
          404
        </h1>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl transition-colors duration-300">
          {t('notfound.title')}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-lg mx-auto transition-colors duration-300">
          {t('notfound.subtitle')}
        </p>
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            {t('notfound.button')}
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}
