import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FBFFF1]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Left side: Contact Info */}
        <div>
          {/* Heading */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-[#000100] mb-3">Contact Us</h1>
            <p className="text-[#444] max-w-lg">
              Reach out to us for volunteering, donations, or any queries.
            </p>
          </div>

          {/* Address */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#000100] mb-3">📍 Address</h2>
            <p className="text-[#444] leading-relaxed">
              SPAD, 1st Floor, Ramakrishna Residency <br />
              13/2, 9th Cross, Karamchnad Layout <br />
              Lingarajapuram, Bengaluru – 560 084 <br />
              Karnataka, India
            </p>
            <p className="mt-3">
              📧 Email:{" "}
              <a href="mailto:spadorgblr@gmail.com" className="text-[#0000F5] hover:underline">
                spadorgblr@gmail.com
              </a>
            </p>
          </div>

          {/* Principal Contacts */}
          <div>
            <h2 className="text-2xl font-semibold text-[#000100] mb-3">📞 Principal Contacts</h2>

            <div className="space-y-6 text-[#444]">
              <div>
                <h3 className="font-medium text-lg">President</h3>
                <p>
                  Vijay Kumar B. -{" "}
                  <a href="tel:+919448865911" className="text-[#0000F5] hover:underline">
                    9448865911
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Secretary</h3>
                <p>
                  Jeevanath Kumar -{" "}
                  <a href="tel:+919845618134" className="text-[#0000F5] hover:underline">
                    9845618134
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Treasurer</h3>
                <p>
                  Bhavanishankar KK -{" "}
                  <a href="tel:+919448202083" className="text-[#0000F5] hover:underline">
                    9448202083
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Static Image */}
        <div className="flex items-center justify-center">
          <img
            src="/logo.png"
            alt="SPAD NGO"
            className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
          />
        </div>
      </div>
    </div>
  );
}
