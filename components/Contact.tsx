export default function Contact() {
  return (
    <section id="contact" className="bg-[#ff4b00] py-20 text-[#111111] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-sm font-black uppercase tracking-[-0.02em]">
            Contact
          </p>

          <div className="hidden h-[2px] flex-1 bg-[#111111] md:block" />
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12">
          <h2 className="text-5xl font-black uppercase leading-[0.8] tracking-[-0.09em] sm:text-6xl md:text-8xl lg:text-9xl">
            Let&apos;s
            <br />
            make it
            <br />
            sound
            <br />
            good.
          </h2>

          <div>
            <p className="mb-8 max-w-md text-lg font-medium leading-7 md:text-xl md:leading-8">
              Un événement, une scène, une idée, une atmosphère à créer.
              Parlons-en simplement.
            </p>

            <a
              href="mailto:lehiany@gmail.com"
              className="inline-flex rounded-md border-2 border-[#111111] bg-[#111111] px-7 py-4 text-xs font-black uppercase tracking-[-0.02em] text-[#fff1df] transition hover:bg-[#fff1df] hover:text-[#111111] md:px-8 md:text-sm"
            >
              Écrire à Sounds Good →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}