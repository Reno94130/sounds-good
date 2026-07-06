import Image from "next/image";

const images = [
  {
    src: "/hero.jpg",
    title: "Live",
  },
  {
    src: "/hero.jpg",
    title: "Energy",
  },
  {
    src: "/hero.jpg",
    title: "Mood",
  },
  {
    src: "/hero.jpg",
    title: "Moment",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#fff1df] py-20 text-[#111111] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#ff4b00]">
            Gallery
          </p>

          <div className="hidden h-[2px] flex-1 bg-[#111111] md:block" />
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
              className={`group relative overflow-hidden rounded-[1.5rem] border-2 border-[#111111] bg-[#111111] md:rounded-[2rem] ${
                index === 0
                  ? "aspect-[4/5] md:row-span-2 md:aspect-auto"
                  : "aspect-[4/3]"
              }`}
            >
            <Image
  src={image.src}
  alt={image.title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
/>

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-4 left-4 rotate-[-3deg] bg-[#ff4b00] px-4 py-3 text-2xl font-black uppercase tracking-[-0.07em] text-[#111111] md:bottom-5 md:left-5 md:px-5 md:text-3xl">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}