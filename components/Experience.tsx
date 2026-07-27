export default function Experience() {
  return (
    <section id="experience" className="bg-[#fff3e2] py-20 text-[#17110d] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff5a1f] md:text-2xl">
  Experience
</p>
          <div className="hidden h-[2px] flex-1 bg-[#ff5a1f] md:block" />
        </div>

        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ff5a1f] sm:text-6xl md:text-8xl">
            Music
            <br />
            as
            <br />
            atmosphere.
          </h2>

          <div className="border-l-4 border-[#ff5a1f] pl-6">
            <p className="max-w-2xl text-xl font-semibold leading-8 tracking-[-0.02em] text-[#17110d] md:text-2xl md:leading-9">
              Sounds Good! crée des expériences musicales vivantes,
              pensées comme une présence : juste, élégante, mémorable.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          <div className="border border-[#ff5a1f]/45 bg-[#fff8ed] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff5a1f]">
            <p className="text-3xl font-black uppercase tracking-[-0.05em] text-[#ff5a1f]">
              Presence
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-[#17110d]/68">
              Une musique qui habite le lieu sans jamais l’écraser.
            </p>
          </div>

          <div className="border border-[#17110d] bg-[#17110d] p-6 text-[#fff8ed] transition duration-300 hover:-translate-y-1 hover:border-[#ff5a1f]">
            <p className="text-3xl font-black uppercase tracking-[-0.05em] text-[#ff8b55]">
              Energy
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-[#fff8ed]/72">
              Le bon format, le bon tempo, la bonne intensité.
            </p>
          </div>

          <div className="border border-[#ff5a1f] bg-[#ff5a1f] p-6 text-[#17110d] transition duration-300 hover:-translate-y-1 hover:bg-[#ff6c34]">
            <p className="text-3xl font-black uppercase tracking-[-0.05em]">
              Memory
            </p>
            <p className="mt-4 text-base font-semibold leading-7 text-[#17110d]/72">
              Ce que les invités ressentent, puis gardent en mémoire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
