"use client"

import { motion } from "framer-motion"

export default function CallToAction() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-purple-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Elevate Your Online Presence?
        </motion.h2>
        <motion.div
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's create a website that truly represents your brand and drives results.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-3 bg-white text-purple-900 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
            onClick={scrollToContact}
          >
            Get in Touch Now
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-purple-800 opacity-50 animate-pulse"></div>
    </section>
  )
}

