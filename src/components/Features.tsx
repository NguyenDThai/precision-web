import { motion } from "motion/react";
import { Zap, BarChart3, Settings2 } from "lucide-react";

const features = [
  {
    title: "Scalability",
    description: "Infrastructure that grows with your vision, handling millions of requests with zero latency.",
    icon: Zap,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Real-time Analytics",
    description: "Live data streams processed instantly. Make decisions based on now, not yesterday.",
    icon: BarChart3,
    color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  {
    title: "Smart Automation",
    description: "Intelligent workflows that learn from your patterns to eliminate repetitive tasks.",
    icon: Settings2,
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 block transition-colors duration-300">
            Engineered for Performance
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300">
            Architected for Speed.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl hover:border-blue-100 dark:hover:border-gray-700 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
