const services = [
  {
    title: "Hotels",
    text: "Créer une atmosphère musicale élégante, vivante et adaptée à vos invités.",
  },
  {
    title: "Corporate",
    text: "Donner une signature forte à vos cocktails, dîners, lancements ou soirées privées.",
  },
  {
    title: "Private",
    text: "Des formats intimistes ou festifs pour des moments personnels et mémorables.",
  },
  {
    title: "Gastronomy",
    text: "Associer musique, goût et émotion autour d’expériences sur mesure.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#fff1df] py-28 text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 md:px-14">
        <div className="mb-16 flex items-center justify-between gap-6">
          <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#ff4b00]">
            Services
          </p>

          <div className="hidden h-[2px] flex-1 bg-[#111111] md:block" />
        </div>

        <h2 className="mb-16 max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-8xl">
          One event.
          <br />
          One energy.
          <br />
          One sound.
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`rounded-[2rem] border-2 border-[#111111] p-8 md:p-10 ${
                index === 1 ? "bg-[#ff4b00]" : "bg-transparent"
              }`}
            >
              <div className="mb-10 text-7xl font-black leading-none tracking-[-0.08em]">
                0{index + 1}
              </div>

              <h3 className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.08em]">
                {service.title}
              </h3>

              <p className="mt-6 max-w-md text-lg font-medium leading-7">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
