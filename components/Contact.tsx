export default function Contact() {
  return (
    <section id="contact" className="bg-[#ff5a1f] py-20 text-[#17110d] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-xl font-black uppercase tracking-[0.08em] md:text-2xl">
            Contact
          </p>
          <div className="hidden h-[2px] flex-1 bg-[#17110d] md:block" />
        </div>

        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Tout commence par une conversation
          </h2>

          <div className="border-l-4 border-[#17110d] pl-6">
            <p className="mb-8 max-w-xl text-xl font-semibold leading-8 tracking-[-0.02em] md:text-2xl md:leading-9">
              Parlez-nous de votre occasion, de votre lieu, des musiques qui
              vous accompagnent et de l’émotion que vous aimeriez partager.
            </p>

            <p className="mb-8 max-w-xl text-lg font-medium leading-8 md:text-xl">
              C’est à partir de vous que l’expérience Sounds Good prend forme.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@soundsgoodmusic.fr"
                className="inline-flex w-fit border-2 border-[#17110d] bg-[#17110d] px-7 py-4 text-sm font-black uppercase tracking-[0.04em] text-[#fff8ed] transition hover:bg-[#fff8ed] hover:text-[#17110d] md:px-9 md:py-5 md:text-base"
              >
                Échangeons sur votre projet →
              </a>

              <a
                href="tel:+33650965991"
                className="text-lg font-bold tracking-[-0.02em] transition hover:opacity-60 md:text-xl"
              >
                06 50 96 59 91
              </a>

              <p className="text-sm font-medium text-[#17110d]/70">
                contact@soundsgoodmusic.fr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
