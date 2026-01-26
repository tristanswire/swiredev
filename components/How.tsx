// components/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    {
      title: "Schedule a Call",
      body:
        "We discuss your project, goals, and timeline to make sure we're a good fit.",
    },
    {
      title: "Choose Your Service",
      body:
        "Pick the package that fits—maintenance, a landing page build, or ongoing development.",
    },
    {
      title: "Get Started",
      body:
        "Work begins within 7 days. You'll get regular updates and production-ready code on schedule.",
    },
  ];

  return (
    <section id="how" className="bg-brand-white">
      <div className="container mx-auto px-6 py-12 lg:py-20">
        {/* Section Header (matches hero vibe: clean, light-weight type) */}
        <header className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-2">
            How it works
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl lg:text-5xl text-brand-black leading-tight">
            Simple Steps. Serious Output.
          </h2>
          <p className="mt-3 text-brand-black/70">
            From first call to final delivery—here&apos;s how we work together.
          </p>
        </header>

        {/* Steps */}
        <ol className="mt-10 max-w-7xl mx-auto text-center grid gap-4 md:gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={i}
              className="rounded-xl border border-brand-black/10 bg-white p-6 hover:border-brand-black/20 transition"
            >

              <span className="h-7 w-7 mb-4 m-auto rounded-full border-brand-yellow bg-brand-yellow text-brand-black flex items-center justify-center text-[12px] font-semibold">
                {i + 1}
              </span>
              <div className="flex justify-center items-center gap-3">
                <h3 className="font-sans text-brand-black text-lg md:text-xl font-medium">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-brand-black/80 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>

        {/* Tiny reassurance line (optional, keeps the minimal/clean feel) */}
        <p className="mt-8 text-center text-sm text-brand-black/55">
          Month-to-month subscriptions. One-time projects welcome. No long-term contracts.
        </p>
      </div>
    </section>
  );
}
