import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-[#fff1df]">
      {/* Background image */}
      <Image
        src="/hero-bg-clean.png"
        alt="Sounds Good live jazz atmosphere"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex min-h-screen flex-col px-5 py-7 md:px-14 md:py-10">
        {/* Header */}
        <header className="flex items-start justify-between gap-8">
          <div className="relative w-[260px] md:w-[420px] lg:w-[500px]">
            <Image
              src="/logo-sounds-good-v2.png"
              alt="Sounds Good!"
              width={1200}
              height={700}
              priority
              className="h-auto w-full drop-shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div className="flex items-center gap-8 pt-2">
            <nav className="hidden items-center gap-9 text-sm font-black uppercase tracking-[0.12em] text-[#fff1df]/85 md:flex">
              <a href="#experience" className="transition hover:text-[#ff4b00]">
                Experience
              </a>
              <a href="#services" className="transition hover:text-[#ff4b00]">
                Services
              </a>
              <a href="#film" className="transition hover:text-[#ff4b00]">
                Film
              </a>
              <a href="#gallery" className="transition hover:text-[#ff4b00]">
                Gallery
              </a>
              <a href="#contact" className="transition hover:text-[#ff4b00]">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className="border-2 border-[#ff4b00] bg-black/30 px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-[#ff4b00] transition hover:bg-[#ff4b00] hover:text-[#111111] md:px-7 md:text-sm"
            >
              Book an event →
            </a>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-1 items-center pt-10 md:pt-0">
          <div className="max-w-4xl">
            <h1
              className="text-6xl font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#fff1df] sm:text-7xl md:text-8xl lg:text-[8.8rem]"
              style={{
                fontFamily: "var(--font-inter), Arial, Helvetica, sans-serif",
              }}
            >
              The art of
              <br />
              live jazz
              <span className="text-[#ff4b00]">.</span>
            </h1>

            <p
              className="mt-7 text-2xl font-black uppercase leading-none tracking-[-0.04em] text-[#ff4b00] md:text-4xl"
              style={{
                fontFamily: "var(--font-inter), Arial, Helvetica, sans-serif",
              }}
            >
              Music, Taste &amp; Emotion
            </p>

            <div className="mt-7 h-[4px] w-[70px] bg-[#ff4b00]" />

            <p className="mt-8 max-w-md text-lg font-medium leading-7 text-[#fff1df]/72 md:text-xl md:leading-8">
              Jazz live sur mesure pour hôtels, événements privés et moments
              d’exception.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#film"
                className="bg-[#ff4b00] px-8 py-4 text-sm font-black uppercase tracking-[0.09em] text-[#111111] transition hover:bg-[#fff1df] md:px-10 md:py-5 md:text-base"
              >
                Watch the film ▶
              </a>

              <a
                href="#contact"
                className="border-2 border-[#fff1df]/60 bg-black/20 px-8 py-4 text-sm font-black uppercase tracking-[0.09em] text-[#fff1df] transition hover:border-[#ff4b00] hover:text-[#ff4b00] md:px-10 md:py-5 md:text-base"
              >
                Contact ↗
              </a>
            </div>
          </div>
        </main>

        {/* Bottom line */}
        <div className="relative z-10 pb-2">
          <p className="border-t border-[#fff1df]/20 pt-5 text-xs font-black uppercase tracking-[0.18em] text-[#fff1df]/55">
            Good music. Good people.{" "}
            <span className="text-[#ff4b00]">Good vibes.</span>
          </p>
        </div>
      </div>
    </section>
  );
}