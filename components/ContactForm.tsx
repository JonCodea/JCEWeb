"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactForm({ id }: { id?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a967bba9-4274-4d03-9307-8c45d96ecc7a",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
      const result = await response.json()
      if (result.success) {
        console.log(result)
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id={id} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black dark:text-white">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black dark:text-white font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-black dark:text-white bg-white dark:bg-gray-700 border border-purple-300 dark:border-purple-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
                required
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black dark:text-white font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-black dark:text-white bg-white dark:bg-gray-700 border border-purple-300 dark:border-purple-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
                required
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-black dark:text-white font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 text-black dark:text-white bg-white dark:bg-gray-700 border border-purple-300 dark:border-purple-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
                required
                placeholder="Enter Message"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </motion.button>
          </form>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-600 dark:text-red-400 text-center">Error sending message. Please try again.</p>
          )}
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-gray-800 dark:to-gray-700 z-0"></div>
    </section>
  )
}

