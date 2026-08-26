const expertise = [
  "Direction artistique",
  "Sélection des musiciens",
  "Format sur mesure",
  "Coordination musicale",
];

export default function Services() {
  return (
    <section id="services" className="bg-[#fff8ed] py-20 text-[#17110d] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff5a1f] md:text-2xl">
            Sur mesure
          </p>
          <div className="hidden h-[2px] flex-1 bg-[#17110d] md:block" />
        </div>

        <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-6xl md:text-8xl">
          Chaque lieu
          <br />
          a son rythme.
        </h2>

        <div className="mt-12 grid gap-12 border-t-2 border-[#17110d] pt-10 md:mt-16 md:grid-cols-[1.15fr_0.85fr] md:gap-20 md:pt-14">
          <div>
            <p className="max-w-3xl text-2xl font-bold leading-tight md:text-4xl md:leading-tight">
              Sounds Good imagine des expériences de jazz live sur mesure pour
              les hôtels, les entreprises, les lieux culturels et les
              événements privés.
            </p>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 md:text-xl">
              Chaque projet est pensé selon le lieu, le public et l’atmosphère
              recherchée, du duo intimiste au groupe complet.
            </p>
          </div>

          <div className="border-y-2 border-[#17110d]">
            {expertise.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 border-b border-[#17110d]/35 py-5 last:border-b-0 md:py-6"
              >
                <span className="text-sm font-black text-[#ff5a1f]">
                  0{index + 1}
                </span>
                <p className="text-lg font-black uppercase leading-tight md:text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 border-y border-[#17110d]/35 py-6 text-sm font-black uppercase leading-7 tracking-[0.08em] text-[#17110d]/75 md:mt-16 md:text-base">
          Hôtels · Entreprises · Lieux culturels · Événements privés
        </p>
      </div>
    </section>
  );
}
