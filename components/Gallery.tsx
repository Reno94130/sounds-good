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
    <section id="gallery" className="bg-[#fff1df] py-28 text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 md:px-14">
        <div className="mb-16 flex items-center justify-between gap-6">
          <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#ff4b00]">
            Gallery
          </p>

          <div className="hidden h-[2px] flex-1 bg-[#111111] md:block" />
        </div>

        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end">
          <h2 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-8xl">
            Real
            <br />
            moments.
            <br />
            Real sound.
          </h2>

          <p className="max-w-xl text-xl font-medium leading-8">
            Des images de scène, de lieux, de rencontres et d’instants vrais.
            Sounds Good! ne vend pas une formule : chaque événement a sa propre énergie.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={image.title}
              className={`group relative overflow-hidden rounded-[2rem] border-2 border-[#111111] bg-[#111111] ${
                index === 0 ? "md:row-span-2 md:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-5 left-5 rotate-[-3deg] bg-[#ff4b00] px-5 py-3 text-3xl font-black uppercase tracking-[-0.07em] text-[#111111]">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}