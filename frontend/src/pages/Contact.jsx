// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const infoColumnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const infoItemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#FBFFF1] text-[#000100]">
      {/* Wrapper to center all content on the page */}
      <div className="max-w-[1100px] mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <motion.header
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "Roboto, system-ui" }}
          >
            Get in <span className="text-[#0000F5]">Touch</span>
          </h1>
          <p className="mt-3 text-lg text-[#444]">
            We're here to help and answer any questions. Reach us via email,
            phone, or send a message using the form.
          </p>
        </motion.header>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT: Info column (staggered) */}
          <motion.div
            variants={infoColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* The info section now has a transparent background and no shadow */}
            <div className="p-8 md:p-10">
              <div className="space-y-10">
                {/* Email container with no background or shadow */}
                <motion.div variants={infoItemVariants} className="p-0">
                  <h2 className="text-2xl font-semibold mb-3">📧 Email</h2>
                  <p className="text-[#444]">
                    e-Mail us directly at{" "}
                    <a
                      href="mailto:spadorgblr@gmail.com"
                      className="text-[#0000F5] hover:text-[#3D59F5] underline-offset-2"
                    >
                      spadorgblr@gmail.com
                    </a>
                    .
                  </p>
                </motion.div>
                {/* Key contacts */}
                <motion.div variants={infoItemVariants}>
                  <h2 className="text-2xl font-semibold mb-4">📞 Key Contacts</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-[#000100]">
                        Vijay Kumar B.
                      </div>
                      <div className="text-sm text-[#444] mb-1">President</div>
                      <a
                        href="tel:+919448865911"
                        className="text-[#0000F5] hover:text-[#3D59F5]"
                      >
                        +91 94488 65911
                      </a>
                    </div>
                    <div>
                      <div className="font-semibold text-[#000100]">
                        Jeevanath Kumar
                      </div>
                      <div className="text-sm text-[#444] mb-1">Secretary</div>
                      <a
                        href="tel:+919845618134"
                        className="text-[#0000F5] hover:text-[#3D59F5]"
                      >
                        +91 98456 18134
                      </a>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="font-semibold text-[#000100]">
                        Bhavanishankar KK
                      </div>
                      <div className="text-sm text-[#444] mb-1">Treasurer</div>
                      <a
                        href="tel:+919448202083"
                        className="text-[#0000F5] hover:text-[#3D59F5]"
                      >
                        +91 94482 02083
                      </a>
                    </div>
                  </div>
                </motion.div>
                {/* Address + map */}
                <motion.div variants={infoItemVariants}>
                  <h2 className="text-2xl font-semibold mb-3">📍 Our Office</h2>
                  <p className="text-[#444] leading-relaxed mb-4">
                    <span className="font-semibold block">
                      SOCIETY FOR PEOPLE'S ACTION FOR DEVELOPMENT (SPAD)
                    </span>
                    SPAD, 1st Floor, Ramakrishna Residency
                    <br />
                    13/2, 9th Cross, Karamchand Layout
                    <br />
                    Lingarajapuram, Bengaluru - 560 084
                    <br />
                    Karnataka, India
                  </p>
                  <div className="rounded-2xl overflow-hidden border border-gray-200 h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3732742137186!2d77.61958157992565!3d13.011885254579678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171c7d4aa071%3A0x2ccbc0fa42e3e700!2s10th%20Cross%20Rd%2C%20Karamchand%20Layout%2C%20Kariyannapalya%2C%20Lingarajapuram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1757698127932!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="SPAD Location"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form card */}
          <motion.div
            variants={infoItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl shadow-lg p-8 md:p-10 bg-white"
          >
            <h2 className="text-3xl font-bold mb-2">
              Send a <span className="text-[#0000F5]">Message</span>
            </h2>
            <p className="text-[#444] mb-6">
              Fill out the form below and we'll get back to you soon.
            </p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="apikey"
                value="a6672672-f7de-4dd3-809a-c59e71c394b6"
              />
              <input
                type="hidden"
                name="subject"
                value="New Contact Us Submission from SPAD Website"
              />
              <input
                type="hidden"
                name="redirect"
                value="http://localhost:5173/thanks"
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#000100] mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B4C5E4] focus:border-[#0000F5] transition"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#000100] mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B4C5E4] focus:border-[#0000F5] transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#000100] mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B4C5E4] focus:border-[#0000F5] transition"
                  placeholder="+91 12345 67890"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#000100] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B4C5E4] focus:border-[#0000F5] transition"
                  placeholder="Your message here..."
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-tr from-[#0000F5] to-[#3D59F5] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0000F5]/30 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}