"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero({ id }: { id?: string }) {
  const [text, setText] = useState("")
  const fullText = "Cuustom Websites Designed to Elevate Your Brand"

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)

    return () => clearInterval(typingEffect)
  }, [])

  const highlightWords = ["Cuustom", "Designed", "Elevate", "Brand"]

  const getWordClass = (word: string, index: number) => {
    const isHighlighted = highlightWords.includes(word)
    const wordStart = fullText.split(" ").slice(0, index).join(" ").length
    const typedChars = text.length - wordStart

    if (isHighlighted) {
      return `text-purple-600 ${typedChars > 0 ? "transition-all duration-100" : ""}`
    }
    return ""
  }

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4 font-playfair"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {fullText.split(" ").map((word, index) => (
            <span key={index} className={getWordClass(word, index)}>
              {text.slice(
                fullText.split(" ").slice(0, index).join(" ").length,
                fullText
                  .split(" ")
                  .slice(0, index + 1)
                  .join(" ").length,
              )}
            </span>
          ))}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-black dark:text-white mb-8 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Beautiful, <span className="text-purple-600">responsive</span>, and{" "}
          <span className="text-purple-600">high-performing</span> websites built just for you.
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          whileHover={{ boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => {
            const contactForm = document.getElementById("contact")
            if (contactForm) {
              contactForm.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          Get a Free Consultation
        </motion.button>
      </div>
    </section>
  )
}

