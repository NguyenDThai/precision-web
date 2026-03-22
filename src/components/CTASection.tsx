import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-blue-600 px-8 py-24 text-center text-white shadow-2xl shadow-blue-200"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
              Start your free trial today
            </h2>
            <p className="text-xl text-blue-50 mb-12 leading-relaxed opacity-90">
              Join the future of high-precision workflow management. <br />
              No credit card required.
            </p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
