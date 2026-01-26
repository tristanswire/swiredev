import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { TrackEvent } from "@/app/lib/TrackEvent";

export default function HeroHeader() {
  const primaryCtaClicked = () => {
    TrackEvent({
      action: "cta_click",
      category: "engagement",
      label: "Hero Primary CTA",
    });
  };

  const secondaryCtaClicked = () => {
    TrackEvent({
      action: "cta_click",
      category: "engagement",
      label: "Hero Secondary Pricing",
    });
  };

  const logos = [
    { src: "/images/magnetic-logo.png", alt: "magnetic creative" },
    { src: "/images/rangr-box-logo.png", alt: "rangr" },
    { src: "/images/featherfuel.png", alt: "feather fuel" },
    { src: "/images/lightning.png", alt: "lightning" },
    { src: "/images/reliava.png", alt: "reliava" },
  ];

  return (
    <section className="relative bg-brand-white text-brand-black px-6 py-18 md:py-24 lg:py-36 border-b border-brand-black/10">
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 text-center max-w-2xl m-auto lg:text-left lg:max-w-none lg:grid-cols-12 lg:gap-10 items-center">
          {/* Left: Copy + CTAs */}
          <div className="md:col-span-7">
            {/* Headline (thin) */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="pb-3 font-sans font-light tracking-tight text-4xl md:text-5xl lg:text-6xl leading-tight lg:w-[90%]"
            >
              Reliable Development.<br />
              No surprises.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="pb-6 max-w-2xl md:text-lg text-brand-black/70 font-light"
            >
              WordPress development and technical consulting for designers, agencies, and businesses who want reliable expertise -- without the headache of onboarding.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mx-auto pb-8 lg:pb-20 flex flex-wrap md:flex-nowrap max-w-xs md:max-w-[26rem] lg:m-0 sm:flex-row items-center gap-3 justify-center lg:justify-left"
            >
              <a
                href="https://cal.com/swiredev/introductory-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={primaryCtaClicked}
                className="border-2 border-black text-sm md:text-[1rem] inline-flex justify-center items-center rounded-md bg-brand-yellow text-brand-black px-6 py-3 font-semibold tracking-wide hover:bg-brand-yellow hover:text-brand-black hover:brightness-90 transition duration-300 w-full"
              >
                Book a Call
              </a>
              <Link
                href="#services"
                onClick={secondaryCtaClicked}
                className="text-sm md:text-[1rem] inline-flex justify-center items-center rounded-md border-2 border-brand-black bg-transparent text-brand-black px-6 py-3 font-semibold tracking-wide hover:bg-brand-black hover:text-brand-white transition duration-300 w-full"
              >
                See Services
              </Link>
            </motion.div>


            {/* Trusted By strip */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35 }}
            >
              <div className="flex justify-center lg:justify-normal items-center gap-6 md:gap-8 flex-wrap">
                <h4 className="text-xs uppercase font-bold tracking-wide text-brand-black/80">TRUSTED BY:</h4>
                {logos.map(({ src, alt }, i) => (
                  <div key={i} className="opacity-50 md:w-auto grayscale-100 hover:grayscale-0 hover:opacity-100 transition duration-350">
                    <Image
                      src={src}
                      alt={alt}
                      width={120}
                      height={28}
                      className="h-3 lg:h-4 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Minimal side card (optional visual, no giant image) */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="md:col-span-5"
          >
            <div className="hidden lg:block relative rounded-2xl overflow-hidden">
              <img
                src="http://tristanswire.com/swire-dev-hero.png"
                alt=""
                className="w-full h-full object-cover grayscale-15"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFEC51]/25 to-[#FFEC51]/10 " />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
