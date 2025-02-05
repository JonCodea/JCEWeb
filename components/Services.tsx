"use client"

import { motion } from "framer-motion"
import { Code, FileCode, ShoppingBag, Globe, Pencil } from "lucide-react"

export default function Services({ id }: { id?: string }) {
  const services = [
    {
      title: "Custom Web Design",
      description: "Tailored websites that perfectly represent your brand and engage your audience.",
    },
    {
      title: "No Code Solutions",
      description: "Powerful websites built with intuitive no-code platforms for rapid development.",
      tools: [
        { name: "Wix", icon: Globe },
        { name: "WordPress", icon: Pencil },
        { name: "Shopify", icon: ShoppingBag },
      ],
    },
    {
      title: "Code Solutions",
      description: "Custom-coded websites and web applications for ultimate flexibility and performance.",
      tools: [
        { name: "Next.js", icon: FileCode },
        { name: "React", icon: Code },
        { name: "HTML/CSS/JS", icon: Globe },
      ],
    },
  ]

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center py-24 bg-purple-50 dark:bg-purple-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex-grow flex flex-col justify-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-purple-800 dark:text-purple-200 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-purple-900 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-purple-800 dark:text-purple-200 font-playfair">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 font-poppins">
                {service.description}
              </p>
              {service.tools && (
                <div className="w-full overflow-hidden">
                  <div className="flex animate-scroll">
                    {[...service.tools, ...service.tools, ...service.tools].map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex flex-col items-center mx-3 sm:mx-4 flex-shrink-0">
                        <tool.icon className="text-2xl sm:text-3xl text-purple-600 dark:text-purple-400 mb-1 sm:mb-2" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

