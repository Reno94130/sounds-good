export default function Experience() {
  return (
    <section id="experience" className="bg-[#111111] py-28 text-[#fff1df]">
      <div className="mx-auto max-w-7xl px-6 md:px-14">
        <div className="mb-16 flex items-center justify-between gap-6">
          <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#ff4b00]">
            Experience
          </p>

          <div className="hidden h-[2px] flex-1 bg-[#ff4b00] md:block" />
        </div>

        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <h2 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#ff4b00] md:text-8xl lg:text-9xl">
            No
            <br />
            background
            <br />
            music.
          </h2>

          <div>
            <div className="mb-8 inline-block rotate-[-2deg] bg-[#fff1df] px-5 py-3 text-2xl font-black italic uppercase tracking-[-0.04em] text-[#111111] md:text-3xl">
              We design atmosphere.
            </div>

            <p className="max-w-xl text-xl font-medium leading-8 text-[#fff1df]/80">
              Sounds Good! imagine des expériences musicales sur mesure :
              le bon format, les bons artistes, la bonne énergie, au bon moment.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border-2 border-[#ff4b00] p-7">
            <p className="text-4xl font-black uppercase tracking-[-0.07em] text-[#ff4b00]">
              Live
            </p>
            <p className="mt-5 text-lg leading-7 text-[#fff1df]/75">
              Une présence réelle, humaine, sensible.
            </p>
          </div>

          <div className="rounded-3xl bg-[#ff4b00] p-7 text-[#111111]">
            <p className="text-4xl font-black uppercase tracking-[-0.07em]">
              Tailored
            </p>
            <p className="mt-5 text-lg font-medium leading-7">
              Chaque événement a son propre rythme.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#fff1df] p-7">
            <p className="text-4xl font-black uppercase tracking-[-0.07em] text-[#fff1df]">
              Emotion
            </p>
            <p className="mt-5 text-lg leading-7 text-[#fff1df]/75">
              Ce que les invités gardent en mémoire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}