import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff8ed] text-[#17110d]">
      {/* Background image */}
      <Image
        src="/hero-bg-clean.png"
        alt="Sounds Good live jazz atmosphere"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Warm clarity overlay */}
      <div className="absolute inset-0 bg-[#17110d]/4" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,5,4,0.62) 0%, rgba(6,5,4,0.36) 36%, rgba(6,5,4,0) 68%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(6,5,4,0.54) 0%, rgba(6,5,4,0.24) 30%, rgba(6,5,4,0) 64%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,248,237,0) 0%, rgba(255,248,237,0) 58%, rgba(255,248,237,0.18) 82%, rgba(255,248,237,0.38) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,248,237,0.1) 0%, rgba(255,248,237,0.06) 38%, rgba(255,248,237,0) 75%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col px-4 py-7 md:px-14 md:py-10">
        {/* Header */}
        <header className="flex items-start justify-between gap-2 md:gap-8">
          <div className="relative w-[52vw] min-w-[164px] max-w-[225px] shrink-0 origin-left -rotate-3 sm:w-[315px] sm:max-w-none md:w-[560px] lg:w-[610px]">
            <Image
              src="/logo-sounds-good-v2.png"
              alt="Sounds Good!"
              width={1200}
              height={700}
              priority
              className="h-auto w-full"
            />
          </div>

          <div className="flex shrink-0 items-center gap-8 pt-1 md:pt-2">
            <nav className="hidden items-center gap-9 text-sm font-black uppercase tracking-[0.12em] text-[#fff8ed] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:flex">
              <a href="#experience" className="transition hover:text-[#ff5a1f]">
                Experience
              </a>
              <a href="#services" className="transition hover:text-[#ff5a1f]">
                Services
              </a>
              <a href="#film" className="transition hover:text-[#ff5a1f]">
                Film
              </a>
              <a href="#gallery" className="transition hover:text-[#ff5a1f]">
                Gallery
              </a>
              <a href="#contact" className="transition hover:text-[#ff5a1f]">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className="whitespace-nowrap border-2 border-[#ff5a1f] bg-[#fff8ed] px-2 py-2 text-[0.58rem] font-black uppercase tracking-[0.07em] text-[#ff5a1f] transition hover:bg-[#ff5a1f] hover:text-[#17110d] sm:px-3 sm:py-3 sm:text-[0.68rem] sm:tracking-[0.1em] md:px-7 md:text-sm"
            >
              Book an event →
            </a>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-1 items-center pt-8 md:pt-0">
          <div className="max-w-4xl">
            <h1
              className="text-[3rem] font-black uppercase leading-[0.84] tracking-[-0.035em] text-[#fff8ed] sm:text-7xl md:text-8xl lg:text-[6rem]"
              style={{
                fontFamily: "var(--font-inter), Arial, Helvetica, sans-serif",
              }}
            >
              The art of
              <br />
              live jazz
              <span
                aria-hidden="true"
                className="ml-[0.06em] inline-block h-[0.14em] w-[0.14em] translate-y-[0.01em] rounded-full bg-[#ff5a1f]"
              />
            </h1>

            <p
              className="mt-5 text-[1.35rem] font-black uppercase leading-none tracking-[-0.04em] text-[#ff5a1f] md:mt-7 md:text-4xl"
              style={{
                fontFamily: "var(--font-inter), Arial, Helvetica, sans-serif",
              }}
            >
              Music, Taste &amp; Emotion
            </p>

            <div className="mt-5 h-[4px] w-[72px] bg-[#ff5a1f] md:mt-7 md:w-[92px]" />

            <p className="mt-6 max-w-md text-[1.08rem] font-bold leading-tight text-[#fff8ed] md:mt-8 md:text-[1.55rem]">
              Jazz Live
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-5">
              <a
                href="#film"
                className="bg-[#ff5a1f] px-6 py-3 text-xs font-black uppercase tracking-[0.09em] text-[#17110d] transition hover:bg-[#fff8ed] md:px-10 md:py-5 md:text-base"
              >
                Watch the film ▶
              </a>

              <a
                href="#contact"
                className="bg-[#fff8ed] px-6 py-3 text-xs font-black uppercase tracking-[0.09em] text-[#17110d] transition hover:bg-[#ff5a1f] md:px-10 md:py-5 md:text-base"
              >
                Contact ↗
              </a>
            </div>
          </div>
        </main>

        {/* Bottom line */}
        <div className="relative z-10 pb-2">
          <p className="border-t border-[#fff8ed]/25 pt-5 text-xs font-black uppercase tracking-[0.18em] text-[#fff8ed]/75">
            Good music. Good people.{" "}
            <span className="text-[#ff5a1f]">Good vibes.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
