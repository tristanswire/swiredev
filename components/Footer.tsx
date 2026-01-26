import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="bg-brand-white">
        <div className="container mx-auto px-10 py-20 max-w-[800px] text-center">
          <h2 className="font-sans font-bold text-[36px] text-[#1a1a1a] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[18px] text-[#6b6b6b] leading-[1.6] mb-8">
            Book a 30-minute discovery call and let&apos;s talk about your project.
          </p>
          <Link
            href="https://cal.com/swiredev/introductory-call"
            target="_blank"
            className="inline-block px-12 py-4 rounded-lg bg-[#FFEC51] text-[#1a1a1a] text-[18px] font-semibold hover:bg-[#FFE01A] transition-all duration-200 ease-out"
          >
            Schedule Your Call
          </Link>
          <p className="mt-6 text-[16px] text-[#6b6b6b]">
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
      <footer className="bg-[#f5f3ed] border-t border-[#e5e5e5]">
        <div className="container mx-auto px-10 py-15 text-center">
          {/* Row 1 - Branding */}
          <div className="mb-6">
            <p className="text-[20px] font-bold text-[#1a1a1a]">Swire Dev</p>
            <p className="text-[14px] text-[#6b6b6b] mt-1">
              WordPress development and technical consulting.
            </p>
          </div>

          {/* Row 2 - Social Links */}
          <div className="mb-6 text-[14px] text-[#6b6b6b]">
            <a
              href="mailto:tristan@swiredev.com"
              className="hover:text-[#1a1a1a] transition"
            >
              Email
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://instagram.com/tristanswire"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a1a1a] transition"
            >
              Instagram
            </a>
          </div>

          {/* Row 3 - Legal Links */}
          <div className="mb-4 text-[14px] text-[#6b6b6b]">
            <Link
              href="/terms-of-service"
              className="hover:text-[#1a1a1a] transition"
            >
              Terms of Service
            </Link>
            <span className="mx-2">|</span>
            <Link
              href="/privacy-policy"
              className="hover:text-[#1a1a1a] transition"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Row 4 - Copyright */}
          <p className="text-[12px] text-[#6b6b6b]">
            © 2025 Swire Dev. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
