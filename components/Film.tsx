export default function Film() {
  return (
    <section
      id="film"
      className="bg-[#f6f2eb] py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16">

        <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#b36b32]">
          Film
        </p>

        <div className="overflow-hidden rounded-3xl shadow-2xl aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/mVwDrAMmdog"
            title="Sounds Good"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}