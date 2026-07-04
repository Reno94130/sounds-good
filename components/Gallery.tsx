import Image from "next/image";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-[#111111] py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">

        <p className="mb-12 text-xs uppercase tracking-[0.45em] text-[#b36b32]">
          Gallery
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          {images.map((image) => (
            <div
              key={image}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}