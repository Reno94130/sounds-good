import Image from "next/image";

const images: { src: string; title: string; alt: string; portrait?: boolean }[] = [
  {
    src: "/gallery1.jpg",
    title: "Live",
    alt: "Quartet de jazz Sounds Good en concert dans un lieu de réception",
  },
  {
    src: "/gallery2.jpg",
    title: "Energy",
    alt: "Groupe de jazz avec saxophone, piano, contrebasse et batterie lors d’un événement",
  },
  {
    src: "/gallery3.png",
    title: "Mood",
    alt: "Trio de jazz au piano, à la contrebasse et à la batterie",
  },
  {
    src: "/gallery4.webp",
    title: "Trio",
    alt: "Trio de jazz Sounds Good en tenue de soirée dans un hôtel parisien",
  },
  {
    src: "/gallery5.webp",
    title: "Paris",
    alt: "Groupe de jazz Sounds Good jouant devant une projection de la tour Eiffel",
    portrait: true,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#fff8ed] py-20 text-[#17110d] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff5a1f] md:text-2xl">
            Gallery
          </p>

          <div className="hidden h-[2px] flex-1 bg-[#17110d] md:block" />
        </div>

        <div className="mb-12 grid gap-8 md:mb-14 md:grid-cols-[1fr_1.1fr] md:items-end">
          <h2 className="text-5xl font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-6xl md:text-8xl">
            Real
            <br />
            moments.
            <br />
            Real sound.
          </h2>

          <p className="max-w-xl text-lg font-medium leading-7 md:text-xl md:leading-8">
            Des images de scène, de lieux, de rencontres et d’instants vrais.
            Sounds Good! ne vend pas une formule : chaque événement a sa propre énergie.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {images.map((image, index) => (
            <div
              key={image.title}
              className={`group relative overflow-hidden bg-[#fff8ed] ${
                index === 0
                  ? "aspect-[4/5] md:row-span-2 md:aspect-auto"
                  : image.portrait
                    ? "aspect-[2/3] md:aspect-[4/3]"
                    : "aspect-[4/3]"
              }`}
            >
              {image.portrait && (
                <Image
                  src={image.src}
                  alt=""
                  fill
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="hidden scale-110 object-cover opacity-35 blur-xl grayscale md:block"
                />
              )}

              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`transition duration-700 md:grayscale md:group-hover:grayscale-0 ${
                  image.portrait
                    ? "object-cover md:object-contain md:group-hover:scale-[1.02]"
                    : "object-cover md:group-hover:scale-105"
                }`}
              />

              <div className="absolute inset-0 bg-[#17110d]/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
