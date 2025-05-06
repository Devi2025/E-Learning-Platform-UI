import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-400 to-purple-500 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔵 Background pattern (optional) */}
      <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-10 z-0" />

      {/* 🔵 Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Optional tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm md:text-lg mb-4 tracking-wide text-blue-100"
        >
          Empowering learners worldwide
        </motion.p>

        {/* Animated heading */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500 drop-shadow-lg"
        >
          Welcome to Our E-Learning Platform
        </motion.h1>

        {/* Animated subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl mb-8"
        >
          Learn new skills and boost your career with us!
        </motion.p>

        {/* Fancy animated button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-xl hover:bg-blue-100 transition transform hover:scale-105"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
