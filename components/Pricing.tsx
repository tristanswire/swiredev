import Link from "next/link";

export default function Services() {
  const services = [
    {
      name: "Site Maintenance",
      subheading: "For ongoing site upkeep",
      priceAmount: "$500",
      pricePeriod: "/month",
      description:
        "Maintenance includes monthly updates, backups, security monitoring, and 2 hours of support for small fixes or tweaks.",
      includes: [
        "Monthly WordPress core and plugin updates",
        "Automated daily backups",
        "Security monitoring and malware scanning",
        "2 hours/month for small fixes, content updates, or tweaks",
        "Priority email support (24-48 hour response)",
      ],
      perfectFor:
        "Businesses who need reliable site upkeep without hiring a developer full-time.",
    },
    {
      name: "Lead Gen Landing Page",
      subheading: "One-time project",
      priceAmount: "$3,000",
      pricePeriod: "/one-time",
      popular: true,
      description:
        "Custom landing page with multi-step conditional forms that deliver personalized content based on user responses.",
      includes: [
        "Custom landing page design in Elementor",
        "Multi-step conditional form (Gravity Forms)",
        "PDF delivery based on user responses",
        "Mobile-responsive design",
        "SEO optimization",
        "2-week delivery",
      ],
      perfectFor:
        "Businesses running lead gen campaigns, product launches, or personalized customer experiences.",
    },
    {
      name: "Dev Subscription",
      subheading: "For consistent development needs",
      priceAmount: "$6,000",
      pricePeriod: "/month",
      description:
        "40 hours per month in 2-week sprints. Flexible scope, predictable pricing, priority support for agencies and businesses.",
      includes: [
        "40 hours of development per month",
        "Structured 2-week sprint cycles",
        "WordPress theme development and customization",
        "Elementor page building",
        "Gravity Forms integration and conditional logic",
        "WooCommerce customization",
        "Plugin development and troubleshooting",
        "Async updates via email (Slack available)",
        "Priority support with 24-hour response time",
      ],
      perfectFor:
        "Agencies with ongoing client work or teams who need a reliable dev partner on demand.",
    },
  ];

  return (
    <section id="services" className="bg-brand-white border-b border-brand-black/10 mb-20">
      <div className="container mx-auto px-6 py-[70px] max-w-8xl">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-2">
            pricing
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl lg:text-5xl text-brand-black leading-tight">
            Pricing
          </h2>
          <p className="mt-3 text-brand-black/70">
            All work is WordPress-focused, responsive and delivered on time.
          </p>
        </header>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative rounded-[16px] border border-[#e5e5e5] bg-white px-10 py-12 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              {/* Popular tag */}
              {service.popular && (
                <span className="absolute -top-5 -left-2 z-[2] px-3 py-1.5 text-[12px] uppercase font-bold tracking-wide rounded-md bg-[#FFEC51] border-2 border-black">
                  Most Popular
                </span>
              )}

              {/* Service Name */}
              <h3 className="text-[24px] font-semibold text-[#1a1a1a] mb-0">
                {service.name}
              </h3>

              {/* Subheading */}
              <p className="text-[14px] font-normal text-[#6b6b6b] mb-6">
                {service.subheading}
              </p>

              {/* Price - Hero Element */}
              <div className="mb-7">
                <span className="text-[52px] font-bold text-[#1a1a1a] leading-none tracking-tighter">
                  {service.priceAmount}
                </span>
                {service.pricePeriod && (
                  <span className="text-[14px] font-normal text-[#6b6b6b]">
                    {service.pricePeriod}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[16px] font-normal text-[#1a1a1a] leading-[1.6] mb-8">
                {service.description}
              </p>

              <hr className="mb-8" />

              {/* What's Included */}
              <p className="text-[14px] font-semibold text-[#1a1a1a] uppercase tracking-[0.5px] mb-4">
                What&apos;s Included:
              </p>
              <ul className="space-y-2 mb-8 flex-grow">
                {service.includes.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-[15px] text-[#1a1a1a] leading-[1.8]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1a1a1a] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <hr className="mb-8" />

              {/* Perfect for */}
              <p className="text-[14px] text-[#1a1a1a] mb-7">
                <span className="font-semibold text-[#1a1a1a]">Perfect for: </span>
                {service.perfectFor}
              </p>

              {/* CTA Button */}
              <Link
                href="https://cal.com/swiredev/introductory-call"
                target="_blank"
                className="border-2 border-black hidden md:inline-block px-6 py-2 lg:py-3 lg:px-8 rounded-md bg-brand-yellow text-brand-black text-sm md:text-md font-semibold hover:bg-brand-yellow hover:text-brand-black hover:brightness-90 duration-350 transition text-center"
              >
                Book a Call
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="mt-10 text-center text-[14px] text-[#6b6b6b]">
          Not sure which package fits?{" "}
          <Link
            href="https://cal.com/swiredev/introductory-call"
            target="_blank"
            className="underline hover:text-[#1a1a1a] transition"
          >
            Let&apos;s talk
          </Link>{" "}
          about your project.
        </p>
      </div>
    </section>
  );
}
