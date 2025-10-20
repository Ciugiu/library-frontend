import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Contact Section Component
 *
 * Features a contact form and footer with social links.
 * Includes form validation and submission handling.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-cream via-beige to-light-brown">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-dark-brown text-center mb-8"
        >
          Get in Touch
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-warm-brown mx-auto mb-16"
        ></motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-parchment p-8 rounded-2xl shadow-xl border-2 border-warm-brown/30"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-dark-brown mb-2">
                Thank You!
              </h3>
              <p className="text-warm-brown">We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-dark-brown font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream border-2 border-light-brown rounded-lg focus:outline-none focus:border-warm-brown transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-dark-brown font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream border-2 border-light-brown rounded-lg focus:outline-none focus:border-warm-brown transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-dark-brown font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-cream border-2 border-light-brown rounded-lg focus:outline-none focus:border-warm-brown transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-dark-brown text-cream font-bold text-lg rounded-lg shadow-lg hover:bg-warm-brown transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Social Links / Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-warm-brown mb-6">
            Connect with us on social media
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {/* Social Icons */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-4xl hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              📘
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-4xl hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              🐦
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-4xl hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              📷
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-4xl hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              📧
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="border-t-2 border-warm-brown/30 pt-6">
            <p className="text-warm-brown/70 text-sm">
              © 2025 Library App. All rights reserved.
            </p>
            <p className="text-warm-brown/70 text-sm mt-2">
              Built with ❤️ for book lovers everywhere
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
