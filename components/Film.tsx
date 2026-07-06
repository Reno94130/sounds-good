export default function Film() {
  return (
    <section id="film" className="bg-[#111111] py-20 text-[#fff1df] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff4b00] md:text-2xl">
            Film
          </p>
          <div className="hidden h-[2px] flex-1 bg-[#ff4b00] md:block" />
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ff4b00] sm:text-6xl md:text-8xl">
            See
            <br />
            the
            <br />
            sound.
          </h2>

          <div className="border-l-4 border-[#ff4b00] pl-6">
            <p className="max-w-xl text-xl font-semibold leading-8 tracking-[-0.02em] text-[#fff1df] md:text-2xl md:leading-9">
              Une scène, des musiciens, une énergie réelle.
              Quelques secondes suffisent pour sentir l’atmosphère.
            </p>
          </div>
        </div>

        <div className="relative border-l-4 border-[#ff4b00] pl-4 md:pl-6">
          <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border-2 border-[#fff1df]/25 bg-black md:rounded-[2rem]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/mVwDrAMmdog"
              title="Sounds Good live film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}