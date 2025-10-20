import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Hero Section Component
 *
 * The landing section with parallax effects and a call-to-action button.
 * Features:
 * - Parallax scrolling on background elements
 * - Animated title and tagline
 * - "Enter Library" button with scroll behavior
 */
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for different layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleEnterLibrary = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Layer 1 - Slowest */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-beige via-parchment to-cream opacity-90"></div>
        {/* Book shelf illustration effect */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-light-brown/20 to-transparent"></div>
      </motion.div>

      {/* Decorative floating books */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-20 left-10 text-8xl opacity-20 animate-float"
      >
        📚
      </motion.div>
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-40 right-20 text-7xl opacity-20 animate-float"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        📖
      </motion.div>
      <motion.div
        style={{ y: backgroundY }}
        className="absolute bottom-40 left-1/4 text-6xl opacity-15 animate-float"
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        📕
      </motion.div>

      {/* Main Content - Faster parallax */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-dark-brown mb-6 tracking-tight"
        >
          Welcome to Our Library
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-3xl text-warm-brown mb-12 font-light tracking-wide"
        >
          Discover. Borrow. Learn.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(101, 67, 33, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleEnterLibrary}
          className="px-12 py-4 bg-dark-brown text-cream text-lg font-semibold rounded-full shadow-lg hover:bg-warm-brown transition-colors duration-300"
        >
          Enter Library
        </motion.button>
      </motion.div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
