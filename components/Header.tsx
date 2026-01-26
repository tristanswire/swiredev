"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hideNav = pathname === "/terms-of-service" || pathname === "/privacy-policy";

  const navItems = [
    { label: "About", target: "about" },
    { label: "Services", target: "services" },
    { label: "How It Works", target: "how" },
    { label: "FAQ", target: "faq" },
  ];

  return (
    <header className="bg-brand-white p-4 border-b border-brand-black/10 z-50 relative">
      <div className={`relative container mx-auto flex items-center m-0 p-0 max-w-7xl ${ hideNav ? 'justify-center' : 'justify-between' }`} >
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center text-brand-black font-semibold text-lg lg:text-xl xl:text-2xl pb-1
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-1/4 after:bg-brand-purple-dk
            after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-brand-purple-dk"
        >
          SwireDev
        </Link>


        {!hideNav && (
          <nav className="hidden md:flex gap-12">
            {navItems.map(({ label, target }, i) => (
              <a
                key={i}
                href={`#${target}`}
                className="relative font-medium text-md transition-all duration-300 font-sans text-brand-black pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-brand-purple-dk after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-brand-purple-dk"
              >
                {label}
              </a>
            ))}
          </nav>

        )}

        {!hideNav && (
          <Link
            href="https://cal.com/swiredev/introductory-call"
            target="_blank"
            className="hidden md:inline-block px-6 py-2 lg:py-3 lg:px-8 rounded-md bg-brand-yellow text-brand-black text-sm md:text-md font-semibold hover:bg-brand-yellow hover:text-brand-black hover:brightness-90 duration-350 transition border-2 border-black"
          >
            Book a Call
          </Link>
        )}

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl text-brand-black cursor-pointer"
          aria-label="Open menu"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-brand-white z-50 text-white flex flex-col"
          >
            <div className="flex justify-between items-center justify-center pb-0 pt-12">
              <span className="text-brand-black text-3xl font-semibold">SwireDev</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-brand-black cursor-pointer position absolute right-[1rem] top-[1rem]"
                aria-label="Close menu"
              >
                <HiOutlineX />
              </button>
            </div>

            <nav className="flex flex-col items-center mt-10 space-y-6">
              {navItems.map(({ label, target }, i) => (
                <a
                  key={i}
                  href={`#${target}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-light text-brand-black hover:text-brand-purple-dk transition"
                >
                  {label}
                </a>
              ))}
              <Link
                href="https://cal.com/swiredev/introductory-call"
                onClick={() => setIsOpen(false)}
                className="border-2 border-black mt-6 inline-block px-6 py-2 bg-brand-yellow font-semibold text-black rounded-md hover:text-brand-white hover:bg-brand-purple-dk hover:border-brand-purple-dk transition"
              >
                Book a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
