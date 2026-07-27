const references = [
  "Club Med",
  "LVMH",
  "Givenchy",
  "Kenzo",
  "Safran",
  "Rotary Club",
  "RMN",
  "Groupe Partouche",
];

export default function References() {
  return (
    <section className="bg-[#fff3e2] py-20 text-[#17110d] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff5a1f] md:text-2xl">
            References
          </p>
          <div className="hidden h-[2px] flex-1 bg-[#ff5a1f] md:block" />
        </div>

        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <h2 className="max-w-md text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#ff5a1f] md:text-6xl">
            Trusted
            <br />
            moments.
          </h2>

          <div>
            <p className="mb-10 max-w-2xl border-l-4 border-[#ff5a1f] pl-6 text-lg font-semibold leading-7 tracking-[-0.01em] text-[#17110d]/76 md:text-xl md:leading-8">
              Des marques, lieux et événements exigeants ont déjà fait confiance
              à cette approche du live.
            </p>

            <div className="grid gap-x-10 border-t border-[#17110d]/18 md:grid-cols-2">
              {references.map((reference, index) => (
                <div
                  key={reference}
                  className="reference-pulse border-b border-[#17110d]/18 py-5 transition hover:border-[#ff5a1f]/70"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="text-lg font-semibold uppercase tracking-[0.06em] text-[#17110d]/82 transition hover:translate-x-2 hover:text-[#ff5a1f] md:text-xl">
                    {reference}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
