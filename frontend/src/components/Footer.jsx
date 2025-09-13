import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000100] text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Column 1: About */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">About SPAD</h3>
          <p className="text-sm leading-relaxed">
            SPAD is a non-profit registered society established in 1993,
            dedicated to advancing HIV/AIDS prevention, child development,
            health, and social justice.
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#0000F5] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-[#0000F5] transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/impact" className="hover:text-[#0000F5] transition-colors">
                Our Impact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#0000F5] transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/donate" className="hover:text-[#0000F5] transition-colors">
                Donate
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Column 3: Contact & Social */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:spadorgblr@gmail.com" className="hover:text-[#0000F5] transition-colors">
              spadorgblr@gmail.com
            </a>
          </p>
          <p className="text-sm mt-2">
            Phone:{" "}
            <a href="tel:+919448865911" className="hover:text-[#0000F5] transition-colors">
              +91 94488 65911
            </a>
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-6 text-lg">
            <a href="#" className="hover:text-[#0000F5] transition-colors" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#0000F5] transition-colors" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#0000F5] transition-colors" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#0000F5] transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SPAD NGO. All rights reserved.
      </div>
    </footer>
  );
}
