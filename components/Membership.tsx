export default function About() {
  return (
    <section id="about" className="bg-brand-white border-brand-black/10 border-t border-b">
      <div className="container mx-auto px-10 py-20 max-w-[900px]">
        {/* Two column layout: image left, text right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left column: Circular headshot placeholder */}
          <div className="flex-shrink-0">
            <div
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-brand-black/10"
              style={{ backgroundColor: "#f5f3ed" }}
            />
          </div>

          {/* Right column: Text content */}
          <div className="text-center md:text-left">
            <h2 className="font-sans font-bold text-[32px] text-brand-black mb-5">
              Meet Tristan
            </h2>
            <p className="text-[18px] leading-[1.6] text-brand-black/60">
              I run Swire Dev, offering subscription-based WordPress development and technical consulting for designers and agencies. After years of working as a software engineer on web applications and digital products, I saw the need for consistent, expert development work without the hassle of managing contractors or full-time hires. When I&apos;m not coding, I&apos;m a husband and father of three, building forts and running around the yard with my kids.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
