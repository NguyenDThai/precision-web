import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { cn } from "@/src/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  
  const navLinks = [
    { name: t('navbar.home'), href: "#" },
    { name: t('navbar.features'), href: "#features" },
    { name: t('navbar.pricing'), href: "#pricing" },
    { name: t('navbar.contact'), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">{t('navbar.brand')}</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <button className="hidden sm:block text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              {t('navbar.login')}
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm">
              {t('navbar.getStarted')}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
