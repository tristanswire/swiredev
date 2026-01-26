// components/FAQ.tsx
// Minimal, clean FAQ styled to match the new hero/how-it-works sections.

import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      q: "Do I have to commit to a subscription?",
      a: "No. You can start with a one-time landing page project ($3,000) or monthly maintenance ($500/month). Subscriptions are only for clients with ongoing development needs.",
    },
    {
      q: "Can I start with just one project?",
      a: "Absolutely. The Lead Gen Landing Page package ($3,000) is perfect for trying out how we work together before committing to ongoing work.",
    },
    {
      q: "How soon can we start?",
      a: "Most projects start within 7 days of our discovery call. Subscriptions kick off the following Monday after onboarding.",
    },
    {
      q: 'What counts as a "task" in the subscription?',
      a: 'A task is a clearly defined outcome like "build a pricing page," "implement header navigation," or "fix mobile responsiveness on blog." Larger projects get broken into smaller tasks for better tracking.',
    },
    {
      q: "Do you work in JavaScript frameworks?",
      a: "I focus on WordPress development with Elementor, Gravity Forms, and standard HTML/CSS/JS. React/Vue or heavy JavaScript framework projects would need to be quoted separately.",
    },
    {
      q: "How do we communicate?",
      a: "Primarily via email with regular async updates. For subscription clients, I can add Slack for real-time communication if needed.",
    },
    {
      q: "What if I need something done urgently?",
      a: "For one-off urgent fixes, we can discuss rush pricing on our call. For subscription clients, I prioritize based on sprint planning, but critical issues get bumped to the top.",
    },
    {
      q: "Can I pause my subscription?",
      a: "Yes. Subscriptions are month-to-month, so you can cancel anytime. If you need to pause temporarily, we can discuss that on a case-by-case basis.",
    },
    {
      q: "Who owns the code and IP?",
      a: "You do. Everything I create is work-for-hire and transferred to you upon payment.",
    },
    {
      q: "Are there refunds?",
      a: "No refunds on completed work, but you can cancel subscriptions anytime before the next billing cycle.",
    },
    {
      q: "What if my project doesn't fit these packages?",
      a: "Let's talk. I can quote custom projects that fall outside these standard offerings—just book a call and we'll figure out what works best.",
    },
  ];

  return (
    <section id="faq" className="bg-brand-white border-b border-brand-black/10">
      <div className="container mx-auto px-6 pt-6 py-16 lg:py-20 lg:pt-0 max-w-6xl">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-2">
            FAQ
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl lg:text-5xl text-brand-black leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-brand-black/70">
            Quick answers to the most common questions. Still unsure?{" "}
            <Link
              href="https://cal.com/swiredev/introductory-call"
              target="_blank"
              className="underline underline-offset-2 font-semibold hover:no-underline"
            >
              Book a Call
            </Link>

          </p>
        </header>

        {/* List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map(({ q, a }, i) => (
            <details
              key={i}
              className="group rounded-xl border border-brand-black/15 bg-white px-5 py-4 open:shadow-sm transition hover:border-brand-black/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-[0.95rem] md:text-base font-semibold text-brand-black">
                  {q}
                </h3>
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full pb-[0.25rem] border border-brand-black/40 text-brand-black/80 transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="pt-3 text-brand-black/80 leading-relaxed text-sm md:text-[0.95rem]">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
