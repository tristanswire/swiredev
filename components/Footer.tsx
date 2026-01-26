import Link from "next/link";
import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="bg-brand-white">
        <div className="container mx-auto px-10 py-20 max-w-[800px] text-center">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-2">
            Let&apos;s Go
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl lg:text-5xl text-brand-black leading-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-3 text-brand-black/70 mb-6">
            Book a 30-minute discovery call and let&apos;s talk about your project.
          </p>
          <Link
            href="https://cal.com/swiredev/introductory-call"
            target="_blank"
            className="border-2 border-black hidden md:inline-block px-6 py-2 lg:py-3 lg:px-8 rounded-md bg-brand-yellow text-brand-black text-sm md:text-md font-semibold hover:bg-brand-yellow hover:text-brand-black hover:brightness-90 duration-350 transition"
          >
            Book a Call
          </Link>
          <p className="mt-3 text-[12px] text-[#6b6b6b]">
            Not ready for a call?{" "}
            <a
              href="mailto:tristan@swiredev.com"
              className="underline hover:text-[#1a1a1a] transition"
            >
              Email me
            </a>{" "}
            with your project details.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-white text-brand-black border-t border-brand-black/10">
        <div className="container mx-auto px-2 py-4 max-w-6xl text-center">
          {/* Social / contact */}
          <div className="mb-3 flex justify-center flex-wrap items-center gap-4 text-sm">
            <a
              href="mailto:tristan@swiredev.com"
              aria-label="Email Swire Dev"
              className="inline-flex items-center gap-2 hover:text-brand-black/60 transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://www.instagram.com/swiredev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Swire Dev on Instagram"
              className="inline-flex items-center gap-2 hover:text-brand-black/60 transition-colors"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>

          {/* Legal */}
          <div className="flex justify-center flex-wrap gap-2 text-xs items-center mb-1">
            <Link
              className="relative pb-1 hover:text-brand-black/70 transition-colors
                after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-brand-black/30
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              href="/terms-of-service"
              target="_blank"
            >
              Terms of Service
            </Link>
            <Link
              className="relative pb-1 hover:text-brand-black/70 transition-colors
                after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-brand-black/30
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              href="/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </div>
          {/* Copyright */}
          <p className="text-[11px] text-brand-black/70">
            © {new Date().getFullYear()} <span className="font-semibold">Swire Dev</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
