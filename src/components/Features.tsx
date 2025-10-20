import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Feature Card Component
 * Individual card for each feature with icon, title, and description
 */
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
  index: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  delay,
  index,
}: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for each card
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 - index * 20, -100 + index * 20]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(101, 67, 33, 0.2)",
      }}
      className="bg-parchment p-8 rounded-2xl shadow-lg border-2 border-light-brown/30 hover:border-warm-brown transition-all duration-300"
    >
      <div className="text-6xl mb-6 text-center">{icon}</div>
      <h3 className="text-2xl font-bold text-dark-brown mb-4 text-center">
        {title}
      </h3>
      <p className="text-warm-brown text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

/**
 * Features Section Component
 *
 * Showcases the main features of the Library App.
 * Each card has different parallax speeds for dynamic effect.
 */
const Features = () => {
  const features = [
    {
      icon: "🔍",
      title: "Search Books",
      description:
        "Quickly find any book in our extensive catalog with advanced search and filter options.",
    },
    {
      icon: "📖",
      title: "Manage Loans",
      description:
        "Easily borrow and return books, track due dates, and renew loans with just a few clicks.",
    },
    {
      icon: "📊",
      title: "Track Progress",
      description:
        "Monitor your reading history, set goals, and discover personalized book recommendations.",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-beige via-cream to-parchment">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-dark-brown text-center mb-8"
        >
          What You Can Do
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-warm-brown mx-auto mb-16"
        ></motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 * (index + 1)}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-7xl"
        >
          ✨
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
