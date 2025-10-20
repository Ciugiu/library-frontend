import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * About Section Component
 *
 * Describes the purpose and mission of the Library App.
 * Features subtle scroll animations and parallax effects.
 */
const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-cream to-beige"
    >
      <motion.div style={{ opacity }} className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-dark-brown text-center mb-8"
        >
          About Our Library
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-warm-brown mx-auto mb-12"
        ></motion.div>

        {/* Content with parallax */}
        <motion.div style={{ y }} className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-warm-brown text-center leading-relaxed"
          >
            Our Library App is more than just a digital catalog—it's a gateway
            to knowledge, connecting passionate readers with the books they
            love.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-warm-brown/80 text-center leading-relaxed"
          >
            Whether you're managing book loans, exploring new titles, or
            tracking your reading journey, our platform makes it effortless.
            Built with modern technology and designed with book lovers in mind,
            we're here to enhance your literary experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-warm-brown/80 text-center leading-relaxed italic"
          >
            "A library is not a luxury but one of the necessities of life." —
            Henry Ward Beecher
          </motion.p>
        </motion.div>

        {/* Decorative book icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-9xl text-center mt-12"
        >
          📚
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
