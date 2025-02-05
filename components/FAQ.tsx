"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

export default function FAQ({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What services does JCEWeb offer?",
      answer:
        "JCEWeb offers custom web design, UI/UX design, and performance optimization services to create beautiful, functional, and fast websites for our clients.",
    },
    {
      question: "How long does it take to design and develop a custom website?",
      answer:
        "The timeline for a custom website varies depending on the project's complexity. Typically, it can range from 4 to 12 weeks. We'll provide a more accurate estimate after discussing your specific requirements.",
    },
    {
      question: "What is included in your UI/UX design service?",
      answer:
        "Our UI/UX design service includes creating intuitive user interfaces, designing user-friendly navigation, optimizing user flows, and ensuring a cohesive visual design that aligns with your brand identity.",
    },
    {
      question: "How do you optimize website performance?",
      answer:
        "We optimize website performance through various techniques, including code optimization, image compression, caching strategies, and leveraging content delivery networks (CDNs) to ensure your website loads quickly and efficiently.",
    },
  ]

  return (
    <section id={id} className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900 dark:text-purple-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-purple-900 dark:text-purple-300">{faq.question}</span>
                {activeIndex === index ? (
                  <FaMinus className="text-purple-600" />
                ) : (
                  <FaPlus className="text-purple-600" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-700 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

