import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff1df] text-[#111111]">
      <div className="absolute right-[-12vw] top-[12vh] h-[78vh] w-[78vh] rounded-full bg-[#ff4b00]" />
      <div className="absolute bottom-[-18vh] right-[-10vw] h-[48vh] w-[90vw] rotate-[-12deg] rounded-[50%] bg-[#ff4b00]" />

      <div className="relative z-10 flex min-h-screen flex-col px-6 py-8 md:px-14">
        <header className="flex items-center justify-between">
          <a href="#" className="leading-none">
            <span className="block text-3xl font-black uppercase tracking-[-0.08em]">
              Sounds
            </span>
            <span className="block -mt-2 rotate-[-5deg] text-5xl font-black italic tracking-[-0.08em] text-[#ff4b00]">
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
            className="rounded-full border-2 border-[#111111] px-5 py-3 text-xs font-black uppercase"
          >
            Let&apos;s talk
          </a>
        </header>

        <div className="grid flex-1 items-center gap-10 py-16 md:grid-cols-[1fr_0.95fr]">
          <div>
            <h1 className="max-w-3xl text-[5.4rem] font-black uppercase leading-[0.78] tracking-[-0.09em] text-[#ff4b00] md:text-[8.5rem] lg:text-[11rem]">
              Sounds
              <br />
              Good!
            </h1>

            <div className="mt-6 inline-block -rotate-1 bg-[#111111] px-5 py-3 text-2xl font-black italic uppercase tracking-[-0.04em] text-white md:text-3xl">
              Live music. Real emotion.
            </div>

            <p className="mt-8 max-w-xl text-xl font-medium leading-8">
              Duo, trio, quartet ou groupe complet.
              <br />
              Une expérience musicale taillée pour votre événement.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#film"
                className="rounded-md bg-[#ff4b00] px-8 py-4 text-sm font-black uppercase tracking-[-0.02em] text-[#111111]"
              >
                Watch the film →
              </a>

              <a
                href="#contact"
                className="rounded-md border-2 border-[#111111] px-8 py-4 text-sm font-black uppercase tracking-[-0.02em]"
              >
                Contact →
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute inset-0 rotate-[2deg] overflow-hidden rounded-[2rem] bg-[#111111] shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Sounds Good live performance"
                fill
                priority
                className="object-cover grayscale contrast-125"
              />
            </div>

            <div className="absolute -left-8 top-14 text-7xl font-black">×</div>
            <div className="absolute bottom-8 left-[-2rem] rotate-[-8deg] bg-white px-6 py-3 text-2xl font-black italic">
              Feel the vibe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
