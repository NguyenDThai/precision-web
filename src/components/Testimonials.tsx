import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t('testimonials.items.marcus.quote'),
      author: "Marcus Sterling",
      role: t('testimonials.items.marcus.role'),
      avatar: "https://i.pravatar.cc/150?u=marcus",
    },
    {
      quote: t('testimonials.items.elena.quote'),
      author: "Elena Rodriguez",
      role: t('testimonials.items.elena.role'),
      avatar: "https://i.pravatar.cc/150?u=elena",
    },
    {
      quote: t('testimonials.items.james.quote'),
      author: "James Chen",
      role: t('testimonials.items.james.role'),
      avatar: "https://i.pravatar.cc/150?u=james",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 block transition-colors duration-300">
              {t('testimonials.subtitle')}
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300">
              {t('testimonials.title')}
            </h2>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
              {t('testimonials.trustedBy')}
            </p>
            <div className="flex gap-1 justify-end">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600 dark:fill-blue-500 dark:text-blue-500" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600 dark:fill-blue-500 dark:text-blue-500" />
                ))}
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-8 italic leading-relaxed transition-colors duration-300">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-50 dark:border-gray-700 transition-colors duration-300"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
