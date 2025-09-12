import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FBFFF1]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        {/* Animated Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold leading-tight text-[#000100] mb-12 text-center md:text-left"
          style={{ fontFamily: "Roboto, system-ui" }}
        >
          Contact <span className="text-[#0000F5]">Us</span>
        </motion.h1>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Email, Address, Contacts */}
          <div className="space-y-10">
            {/* Email */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-[#000100] mb-2">📧 Email</h2>
              <p className="text-[#444]">
                e-Mail us directly at:{" "}
                <a
                  href="mailto:spadorgblr@gmail.com"
                  className="text-[#0000F5] hover:underline hover:text-[#3D59F5] transition-colors"
                >
                  spadorgblr@gmail.com
                </a>
              </p>
            </motion.div>

            {/* Address + Map */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-[#000100] mb-2">📍 Address</h2>
              <p className="text-[#444] leading-relaxed">
                SPAD, 1st Floor, Ramakrishna Residency <br />
                13/2, 9th Cross, Karamchand Layout <br />
                Lingarajapuram, Bengaluru – 560 084 <br />
                Karnataka, India
              </p>

              <div className="mt-4 rounded-2xl overflow-hidden shadow-md w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3732742137186!2d77.61958157992565!3d13.011885254579678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171c7d4aa071%3A0x2ccbc0fa42e3e700!2s10th%20Cross%20Rd%2C%20Karamchand%20Layout%2C%20Kariyannapalya%2C%20Lingarajapuram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1757698127932!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="SPAD Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Principal Contacts */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-[#000100] mb-3">📞 Principal Contacts</h2>
              <div className="space-y-4 text-[#444]">
                <div>
                  <h3 className="font-medium text-lg">President</h3>
                  <p>
                    Vijay Kumar B. -{" "}
                    <a
                      href="tel:+919448865911"
                      className="text-[#0000F5] hover:underline hover:text-[#3D59F5] transition-colors"
                    >
                      +91 9448865911
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Secretary</h3>
                  <p>
                    Jeevanath Kumar -{" "}
                    <a
                      href="tel:+919845618134"
                      className="text-[#0000F5] hover:underline hover:text-[#3D59F5] transition-colors"
                    >
                      +91 9845618134
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Treasurer</h3>
                  <p>
                    Bhavanishankar KK -{" "}
                    <a
                      href="tel:+919448202083"
                      className="text-[#0000F5] hover:underline hover:text-[#3D59F5] transition-colors"
                    >
                      +91 9448202083
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Styled Google Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-lg overflow-hidden p-6 bg-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#000100] mb-4">
              Send a <span className="text-[#0000F5]">Message</span>
            </h2>
            <p className="text-[#444] mb-6">
              Fill out the form below to reach out to us. We’ll get back to you as soon as possible.
            </p>

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSecX7PDnBbwTZmfRP0TALAaaeCGGCFD0etkEiEfkjU6YDmjYg/viewform?embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Send a Message"
              className="hover:scale-[1.01] transition-transform duration-300"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
