"use client"

import { motion } from "framer-motion"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  const socialIcons = [
    { Icon: FaFacebookF, href: "#" },
    {
      Icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/jce-websites-88ab10317?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDRsneWGeR%2BK0FUdLi9ekYw%3D%3D",
    },
  ]

  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold">JCEWebsites</h3>
            <p className="mt-2">Building amazing websites since 2024</p>
          </motion.div>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {socialIcons.map(({ Icon, href }, index) => (
              <a key={index} href={href} className="text-white hover:text-purple-300 transition-colors duration-300">
                <Icon className="text-2xl" />
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} JCEWebsites. All rights reserved.</p>
          <p className="mt-2">
            <a
              href="mailto:jcewebsites@gmail.com"
              className="text-purple-300 hover:text-purple-100 transition-colors duration-300"
            >
              jcewebsites@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

