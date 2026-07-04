import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src="/hero.jpg"
        alt="Sounds Good live performance"
        fill
        priority
        className="object-cover object-center opacity-65"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16">
        <div className="max-w-2xl pt-20 md:pt-0">
          <p className="mb-6 font-['var(--font-cormorant)'] text-4xl font-semibold tracking-[0.08em] text-white md:text-5xl">
            Sounds Good!
          </p>

          <h1 className="font-['var(--font-cormorant)'] text-6xl font-light leading-[0.92] tracking-[-0.06em] md:text-8xl lg:text-9xl">
            The art of
            <br />
            live music.
          </h1>

          <p className="mt-8 text-xl text-white/75 md:text-2xl">
            Designed around your event.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#film"
              className="rounded-full bg-white px-7 py-4 text-sm uppercase tracking-[0.18em] text-black transition hover:bg-[#ff6f18]"
            >
              Watch the film
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/35 px-7 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:border-[#ff6f18] hover:text-[#ff6f18]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}