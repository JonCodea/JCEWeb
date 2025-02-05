"use client"

import { motion } from "framer-motion"
import { FaCog, FaSearch, FaPalette } from "react-icons/fa"
import LiveBackground from "./LiveBackground"

export default function AboutUs({ id }: { id?: string }) {
  const features = [
    {
      icon: FaCog,
      title: "Fast & Responsive",
      description: "Lightning-fast load times and smooth responsiveness across all devices.",
      highlights: ["Lightning-fast", "smooth responsiveness"],
    },
    {
      icon: FaSearch,
      title: "SEO Optimized",
      description: "Built-in SEO best practices to help your site rank higher in search results.",
      highlights: ["SEO best practices", "rank higher"],
    },
    {
      icon: FaPalette,
      title: "Custom Design",
      description: "Unique designs tailored to your brand's personality and goals.",
      highlights: ["Unique designs", "brand's personality"],
    },
  ]

  return (
    <section id={id} className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden">
      <LiveBackground />
      <div className="container mx-auto px-4 flex-grow flex flex-col justify-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900 dark:text-white font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center bg-white dark:bg-white dark:bg-opacity-10 backdrop-blur-lg rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <feature.icon className="text-5xl text-purple-600 dark:text-purple-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-white font-playfair">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 font-poppins">
                {feature.description.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      feature.highlights.some((highlight) => highlight.includes(word))
                        ? "text-purple-600 dark:text-purple-300"
                        : ""
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

