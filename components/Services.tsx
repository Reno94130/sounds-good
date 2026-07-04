const services = [
  ["Hotels", "Elegant live music designed around your guests."],
  ["Corporate", "A musical atmosphere aligned with your brand and audience."],
  ["Private", "Intimate performances for meaningful celebrations."],
  ["Gastronomy", "Music and taste brought together in bespoke experiences."],
];

export default function Services() {
  return (
    <section id="services" className="bg-[#111111] py-32 text-[#f6f2eb]">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <p className="mb-12 text-xs uppercase tracking-[0.45em] text-[#b36b32]">
          Services
        </p>

        <div className="grid gap-px bg-white/15 md:grid-cols-2">
          {services.map(([title, text]) => (
            <div key={title} className="bg-[#111111] p-8 md:p-12">
              <h3 className="text-4xl font-light tracking-[-0.04em]">
                {title}
              </h3>
              <p className="mt-6 max-w-md text-lg leading-8 text-white/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}