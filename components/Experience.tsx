export default function Experience() {
  return (
    <section id="experience" className="bg-[#111111] py-20 text-[#fff1df] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff4b00] md:text-2xl">
  Experience
</p>
          <div className="hidden h-[2px] flex-1 bg-[#ff4b00] md:block" />
        </div>

        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ff4b00] sm:text-6xl md:text-8xl">
            Music
            <br />
            as
            <br />
            atmosphere.
          </h2>

          <div className="border-l-4 border-[#ff4b00] pl-6">
            <p className="max-w-2xl text-xl font-semibold leading-8 tracking-[-0.02em] text-[#fff1df] md:text-2xl md:leading-9">
              Sounds Good! crée des expériences musicales vivantes,
              pensées comme une présence : juste, élégante, mémorable.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          <div className="border-t-2 border-[#ff4b00] pt-6">
            <p className="text-3xl font-black uppercase tracking-[-0.05em] text-[#ff4b00]">
              Presence
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-[#fff1df]/70">
              Une musique qui habite le lieu sans jamais l’écraser.
            </p>
          </div>

          <div className="border-t-2 border-[#ff4b00] pt-6">
            <p className="text-3xl font-black uppercase tracking-[-0.05em] text-[#ff4b00]">
              Energy
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-[#fff1df]/70">
              Le bon format, le bon tempo, la bonne intensité.
            </p>
          </div>

          <div className="border-t-2 border-[#ff4b00] pt-6">
            <p className="text-3xl font-black uppercase tracking-[-0.05em] text-[#ff4b00]">
              Memory
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-[#fff1df]/70">
              Ce que les invités ressentent, puis gardent en mémoire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}