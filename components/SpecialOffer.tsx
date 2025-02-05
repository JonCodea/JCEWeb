"use client"

import { motion } from "framer-motion"

export default function SpecialOffer() {
  return (
    <section className="py-20 bg-purple-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Special Offer for First Clients
        </motion.h2>
        <motion.div
          className="text-2xl md:text-3xl font-semibold mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          First <span className="text-purple-300">5 Clients</span> Get <span className="text-purple-300">20% Off</span>{" "}
          – Let's Build Your Website Today!
        </motion.div>
        <motion.button
          className="px-8 py-3 bg-white text-purple-900 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Claim Your Discount
        </motion.button>
      </div>
      <div className="absolute inset-0 bg-purple-800 opacity-50 animate-pulse"></div>
    </section>
  )
}

