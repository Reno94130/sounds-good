export default function Contact() {
  return (
    <section id="contact" className="bg-[#ff4b00] py-28 text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 md:px-14">
        <div className="mb-16 flex items-center justify-between gap-6">
          <p className="text-sm font-black uppercase tracking-[-0.02em]">
            Contact
          </p>

          <div className="hidden h-[2px] flex-1 bg-[#111111] md:block" />
        </div>

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <h2 className="text-6xl font-black uppercase leading-[0.8] tracking-[-0.09em] md:text-8xl lg:text-9xl">
            Let&apos;s
            <br />
            make it
            <br />
            sound
            <br />
            good.
          </h2>

          <div>
            <p className="mb-8 max-w-md text-xl font-medium leading-8">
              Un événement, une scène, une idée, une atmosphère à créer.
              Parlons-en simplement.
            </p>

            <a
              href="mailto:lehiany@gmail.com"
              className="inline-flex rounded-md border-2 border-[#111111] bg-[#111111] px-8 py-4 text-sm font-black uppercase tracking-[-0.02em] text-[#fff1df] transition hover:bg-[#fff1df] hover:text-[#111111]"
            >
              Écrire à Sounds Good →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}