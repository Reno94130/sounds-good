import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff1df] text-[#111111]">
      <div className="absolute right-[-45vw] top-[20vh] h-[55vh] w-[55vh] rounded-full bg-[#ff4b00] md:right-[-12vw] md:top-[12vh] md:h-[78vh] md:w-[78vh]" />
      <div className="absolute bottom-[-22vh] right-[-35vw] h-[42vh] w-[120vw] rotate-[-12deg] rounded-[50%] bg-[#ff4b00] md:right-[-10vw] md:h-[48vh] md:w-[90vw]" />

      <div className="relative z-10 flex min-h-screen flex-col px-5 py-6 md:px-14 md:py-8">
        <header className="flex items-start justify-end gap-4">
          <nav className="hidden items-center gap-10 text-base font-black uppercase tracking-[0.02em] md:flex">
            <a href="#experience">Expérience</a>
            <a href="#services">Services</a>
            <a href="#film">Film</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border-2 border-[#111111] px-5 py-3 text-xs font-black uppercase tracking-[0.03em] md:px-6 md:py-3 md:text-sm"
          >
            Let&apos;s talk
          </a>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 md:grid-cols-[1fr_0.95fr] md:py-16">
          <div>
            <div className="relative w-[min(82vw,560px)] md:w-[min(46vw,760px)]">
              <Image
                src="/logo-sounds-good-v2.png"
                alt="Sounds Good!"
                width={1200}
                height={700}
                priority
                className="h-auto w-full"
              />
            </div>

           <div className="mt-6 max-w-xl border-l-4 border-[#ff4b00] pl-5 md:mt-7">
  <p className="text-2xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#111111] md:text-4xl">
    Live music.
    <br />
    Real emotion.
  </p>
</div>

    <div className="mt-7 max-w-xl">
  <p className="inline bg-[#111111] px-3 py-1 text-2xl font-black uppercase leading-[1.25] tracking-[-0.04em] text-[#fff1df] box-decoration-clone md:text-3xl">
    Des expériences musicales vivantes,
    <br />
    pensées pour marquer les esprits.
  </p>
</div>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
              <a
                href="#film"
                className="rounded-md bg-[#ff4b00] px-7 py-4 text-sm font-black uppercase tracking-[0.02em] text-[#111111] md:px-9 md:py-5 md:text-base"
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

          <div className="relative min-h-[320px] md:min-h-[520px]">
            <div className="absolute right-0 top-4 h-[280px] w-[280px] rounded-full bg-[#ff4b00] md:h-[430px] md:w-[430px]" />

            <div className="absolute bottom-10 right-4 h-[180px] w-[300px] rotate-[-10deg] rounded-[50%] bg-[#ff4b00] md:h-[260px] md:w-[520px]" />

            <div className="absolute right-4 top-20 max-w-[360px] text-right text-6xl font-black uppercase leading-[0.82] tracking-[-0.04em] md:right-16 md:top-28 md:max-w-[560px] md:text-8xl lg:text-9xl">
              Music
              <br />
              Taste
              <br />
              Emotion
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}