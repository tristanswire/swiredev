import Link from "next/link";

export default function Services() {
  const services = [
    {
      name: "Site Maintenance",
      price: "$500/month",
      description:
        "Keep your WordPress site secure, updated, and running smoothly. Includes monthly updates, backups, security monitoring, and 2 hours of support for small fixes or tweaks.",
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
      price: "$3,000",
      popular: true,
      description:
        "High-converting landing page with multi-step conditional forms and smart logic to deliver the right content based on user answers. Perfect for businesses capturing leads with personalized experiences.",
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
      name: "Development Subscription",
      price: "Starting at $8,000/month",
      description:
        "Ongoing WordPress development for agencies and businesses with consistent needs. 40 hours per month delivered in structured 2-week sprints. Flexible scope, predictable pricing, priority support.",
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
        "Agencies with ongoing client work, businesses scaling their WordPress sites, or teams who need a reliable dev partner on demand.",
    },
  ];

  return (
    <section id="services" className="bg-brand-white">
      <div className="container mx-auto px-6 py-[70px] max-w-7xl">
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
              className="rounded-xl border border-[#e5e5e5] bg-white p-10 flex flex-col"
            >
              {/* Popular tag */}
              {service.popular && (
                <span className="inline-block self-start mb-4 px-3 py-1.5 text-[12px] uppercase font-bold tracking-wide rounded-md bg-[#faf9f6] border border-[#e5ddd1]">
                  Most Popular
                </span>
              )}

              {/* Service Name */}
              <h3 className="text-[28px] font-light text-[#1a1a1a]">
                {service.name}
              </h3>

              {/* Price */}
              <p className="text-[36px] font-extrabold text-[#1a1a1a] mb-4">
                {service.price}
              </p>

              {/* Description */}
              <p className="text-[16px] text-[#6b6b6b] leading-[1.6] mb-6">
                {service.description}
              </p>

              {/* What's Included */}
              <p className="text-[14px] font-semibold text-[#1a1a1a] mb-3">
                What&apos;s Included:
              </p>
              <ul className="space-y-2 mb-6 flex-grow">
                {service.includes.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-[14px] text-[#6b6b6b]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6b6b6b] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Perfect for */}
              <p className="text-[14px] italic text-[#6b6b6b] mb-6">
                <span className="font-semibold not-italic">Perfect for: </span>
                {service.perfectFor}
              </p>

              {/* CTA Button */}
              <Link
                href="https://cal.com/swiredev/introductory-call"
                target="_blank"
                className="block text-center w-full px-8 py-3.5 rounded-md bg-[#ffd966] text-[#1a1a1a] text-[16px] font-bold hover:bg-[#ffcd33] transition duration-300"
              >
                Schedule a Call
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="mt-10 text-center text-[16px] text-[#6b6b6b]">
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
