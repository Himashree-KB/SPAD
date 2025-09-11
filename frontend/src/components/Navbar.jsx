import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    function handleDocClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    }
    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Impact", to: "/impact" },
    { label: "Get Involved", to: "/involved" },
    { label: "Contact", to: "/contact" },
  ];

  function toggleMobile(e) {
    e.stopPropagation();
    setIsMobileMenuOpen((s) => !s);
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBFFF1]/90 backdrop-blur-md shadow-md"
          : "bg-[#FBFFF1]/70 backdrop-blur-sm"
      } rounded-full border border-[#B4C5E4]/50`}
      style={{ padding: 12 }}
    >
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Home"
            >
              <img
                src="/logo.png"
                alt="NGO Logo"
                className="w-18 h-10 object-contain bg-transparent"
              />
            </Link>
            <span
              className="font-bold text-[#000100] hidden sm:block"
              style={{ fontFamily: "Roboto, system-ui" }}
            >
              SPAD
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-[#000100]/80 hover:text-[#0000F5] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/donate"
              className="bg-gradient-to-tr from-[#0000F5] to-[#3D59F5] hover:opacity-90 text-white px-4 py-2 rounded-full shadow"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile toggle (ensure high z-index so it's clickable) */}
          <button
            className="md:hidden p-2 text-[#000100] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B4C5E4]"
            onClick={toggleMobile}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            style={{ zIndex: 60 }}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile panel - use max-height + overflow to avoid layout issues */}
        <div
          id="mobile-menu"
          className={`absolute left-0 right-0 top-full mt-3 rounded-2xl p-4 shadow-lg border border-[#B4C5E4]/50 bg-[#FBFFF1]/95 backdrop-blur-sm transition-all duration-250 overflow-hidden`}
          style={{
            maxHeight: isMobileMenuOpen ? 420 : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
            pointerEvents: isMobileMenuOpen ? "auto" : "none",
          }}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-3 rounded-md text-[#000100]/90 hover:text-[#0000F5] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <Link
                to="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-tr from-[#0000F5] to-[#3D59F5] hover:opacity-90 text-white px-4 py-3 rounded-full"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
