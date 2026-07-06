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
    <section id="services" className="bg-[#fff1df] py-20 text-[#111111] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
         <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff4b00] md:text-2xl">
  Services
</p>

          <div className="hidden h-[2px] flex-1 bg-[#111111] md:block" />
        </div>

        <h2 className="mb-12 max-w-5xl text-5xl font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-6xl md:mb-16 md:text-8xl">
          One event.
          <br />
          One energy.
          <br />
          One sound.
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`rounded-[1.5rem] border-2 border-[#111111] p-6 md:rounded-[2rem] md:p-10 ${
                index === 1 ? "bg-[#ff4b00]" : "bg-transparent"
              }`}
            >
              <div className="mb-8 text-5xl font-black leading-none tracking-[-0.08em] md:mb-10 md:text-7xl">
                0{index + 1}
              </div>

              <h3 className="text-4xl font-black uppercase leading-[0.85] tracking-[-0.08em] md:text-5xl">
                {service.title}
              </h3>

              <p className="mt-5 max-w-md text-base font-medium leading-7 md:mt-6 md:text-lg">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}