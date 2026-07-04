export default function Film() {
  return (
    <section id="film" className="bg-[#111111] py-20 text-[#fff1df] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#ff4b00]">
            Film
          </p>

          <div className="hidden h-[2px] flex-1 bg-[#ff4b00] md:block" />
        </div>

        <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-5xl font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#ff4b00] sm:text-6xl md:text-8xl">
            Watch
            <br />
            the vibe.
          </h2>

          <p className="max-w-xl text-lg font-medium leading-7 text-[#fff1df]/75 md:text-xl md:leading-8">
            Une scène, des musiciens, une énergie réelle.
            Sounds Good! se vit avant de s’expliquer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-2 -top-2 h-full w-full rounded-[1.5rem] bg-[#ff4b00] md:-left-4 md:-top-4 md:rounded-[2rem]" />

          <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border-2 border-[#fff1df] bg-black shadow-2xl md:rounded-[2rem]">
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