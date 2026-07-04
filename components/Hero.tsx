import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff1df] text-[#111111]">
      <div className="absolute right-[-45vw] top-[20vh] h-[55vh] w-[55vh] rounded-full bg-[#ff4b00] md:right-[-12vw] md:top-[12vh] md:h-[78vh] md:w-[78vh]" />
      <div className="absolute bottom-[-22vh] right-[-35vw] h-[42vh] w-[120vw] rotate-[-12deg] rounded-[50%] bg-[#ff4b00] md:right-[-10vw] md:h-[48vh] md:w-[90vw]" />

      <div className="relative z-10 flex min-h-screen flex-col px-5 py-6 md:px-14 md:py-8">
        <header className="flex items-start justify-between gap-4">
          <a href="#" className="leading-none">
            <span className="block text-2xl font-black uppercase tracking-[-0.08em] md:text-3xl">
              Sounds
            </span>
            <span className="-mt-1 block rotate-[-5deg] text-4xl font-black italic tracking-[-0.08em] text-[#ff4b00] md:-mt-2 md:text-5xl">
              Good!
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-sm font-black uppercase tracking-[-0.02em] md:flex">
            <a href="#experience">Expérience</a>
            <a href="#services">Services</a>
            <a href="#film">Film</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border-2 border-[#111111] px-4 py-2 text-[0.65rem] font-black uppercase md:px-5 md:py-3 md:text-xs"
          >
            Let&apos;s talk
          </a>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 md:grid-cols-[1fr_0.95fr] md:py-16">
          <div>
            <h1 className="max-w-3xl text-[4.25rem] font-black uppercase leading-[0.78] tracking-[-0.09em] text-[#ff4b00] sm:text-[5.4rem] md:text-[8.5rem] lg:text-[11rem]">
              Sounds
              <br />
              Good!
            </h1>

            <div className="mt-5 inline-block -rotate-1 bg-[#111111] px-4 py-3 text-xl font-black italic uppercase tracking-[-0.04em] text-white md:mt-6 md:px-5 md:text-3xl">
              Live music. Real emotion.
            </div>

            <p className="mt-7 max-w-xl text-lg font-medium leading-7 md:mt-8 md:text-xl md:leading-8">
              Duo, trio, quartet ou groupe complet.
              <br />
              Une expérience musicale taillée pour votre événement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
              <a
                href="#film"
                className="rounded-md bg-[#ff4b00] px-6 py-4 text-xs font-black uppercase tracking-[-0.02em] text-[#111111] md:px-8 md:text-sm"
              >
                Watch the film →
              </a>

              <a
                href="#contact"
                className="rounded-md border-2 border-[#111111] px-6 py-4 text-xs font-black uppercase tracking-[-0.02em] md:px-8 md:text-sm"
              >
                Contact →
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] md:min-h-[520px]">
            <div className="absolute inset-0 rotate-[2deg] overflow-hidden rounded-[1.5rem] bg-[#111111] shadow-2xl md:rounded-[2rem]">
              <Image
                src="/hero.jpg"
                alt="Sounds Good live performance"
                fill
                priority
                className="object-cover grayscale contrast-125"
              />
            </div>

            <div className="absolute -left-5 top-10 text-5xl font-black md:-left-8 md:top-14 md:text-7xl">
              ×
            </div>

            <div className="absolute bottom-6 left-[-1rem] rotate-[-8deg] bg-white px-5 py-3 text-xl font-black italic md:bottom-8 md:left-[-2rem] md:text-2xl">
              Feel the vibe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}