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
    <section className="bg-[#f6f2eb] py-32 text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <p className="mb-12 text-xs uppercase tracking-[0.45em] text-[#b36b32]">
          References
        </p>

        <div className="grid gap-px bg-black/15 md:grid-cols-4">
          {references.map((reference) => (
            <div
              key={reference}
              className="bg-[#f6f2eb] p-8 text-center text-sm uppercase tracking-[0.22em] text-black/60"
            >
              {reference}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}