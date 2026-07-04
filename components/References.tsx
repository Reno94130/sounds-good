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
    <section className="bg-[#111111] py-28 text-[#fff1df]">
      <div className="mx-auto max-w-7xl px-6 md:px-14">
        <div className="mb-16 flex items-center justify-between gap-6">
          <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#ff4b00]">
            References
          </p>

          <div className="hidden h-[2px] flex-1 bg-[#ff4b00] md:block" />
        </div>

        <div className="mb-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#ff4b00] md:text-8xl">
            Trusted
            <br />
            on real
            <br />
            stages.
          </h2>

          <p className="max-w-xl text-xl font-medium leading-8 text-[#fff1df]/75">
            Des lieux, marques et événements exigeants ont déjà fait confiance à cette approche du live.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {references.map((reference) => (
            <div
              key={reference}
              className="rounded-2xl border-2 border-[#ff4b00] px-5 py-8 text-center text-xl font-black uppercase leading-none tracking-[-0.06em] transition hover:bg-[#ff4b00] hover:text-[#111111]"
            >
              {reference}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}