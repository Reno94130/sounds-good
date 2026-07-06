export default function Contact() {
  return (
    <section id="contact" className="bg-[#ff4b00] py-20 text-[#111111] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-xl font-black uppercase tracking-[0.08em] md:text-2xl">
            Contact
          </p>
          <div className="hidden h-[2px] flex-1 bg-[#111111] md:block" />
        </div>

        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-6xl md:text-8xl">
            Let&apos;s
            <br />
            make it
            <br />
            sound
            <br />
            good.
          </h2>

          <div className="border-l-4 border-[#111111] pl-6">
            <p className="mb-8 max-w-xl text-xl font-semibold leading-8 tracking-[-0.02em] md:text-2xl md:leading-9">
              Un événement, une scène, une idée, une atmosphère à créer.
              Parlons-en simplement.
            </p>

            <a
              href="mailto:lehiany@gmail.com"
              className="inline-flex border-2 border-[#111111] bg-[#111111] px-7 py-4 text-sm font-black uppercase tracking-[0.04em] text-[#fff1df] transition hover:bg-[#ff4b00] hover:text-[#111111] md:px-9 md:py-5 md:text-base"
            >
              Écrire à Sounds Good →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}