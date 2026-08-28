import Image from "next/image";

const featuredReferences = [
  {
    name: "LVMH",
    src: "/brand-logos/lvmh.svg",
    width: 286,
    height: 64,
    className: "w-[92px] md:w-[108px]",
  },
  {
    name: "Safran",
    src: "/brand-logos/safran.png",
    width: 4616,
    height: 1583,
    className: "w-[94px] md:w-[108px]",
  },
  {
    name: "Givenchy",
    src: "/brand-logos/givenchy.svg",
    width: 195,
    height: 20,
    className: "w-[112px] md:w-[126px]",
  },
  {
    name: "Kenzo",
    src: "/brand-logos/kenzo.svg",
    width: 105,
    height: 62,
    className: "w-[58px] md:w-[64px]",
  },
  {
    name: "Club Med",
    src: "/brand-logos/club-med.svg",
    width: 120,
    height: 24,
    className: "w-[106px] md:w-[116px]",
  },
  {
    name: "GrandPalaisRmn",
    src: "/brand-logos/grand-palais-rmn.png",
    width: 1418,
    height: 409,
    className: "w-[110px] md:w-[124px]",
  },
  {
    name: "Groupe Partouche",
    src: "/brand-logos/groupe-partouche.svg",
    width: 77,
    height: 40,
    className: "w-[68px] md:w-[74px]",
  },
];

export default function TrustBar() {
  return (
    <section
      aria-labelledby="trust-title"
      className="border-y border-[#17110d]/15 bg-[#fff8ed] py-7 text-[#17110d] md:py-9"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <p
          id="trust-title"
          className="text-center text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#ff5a1f] md:text-xs"
        >
          Ils nous ont fait confiance
        </p>

        <ul className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-8">
          {featuredReferences.map((reference) => (
            <li
              key={reference.name}
              className="flex min-h-10 items-center justify-center"
            >
              <Image
                src={reference.src}
                alt={reference.name}
                width={reference.width}
                height={reference.height}
                className={`h-auto max-h-10 object-contain brightness-0 opacity-[0.76] ${reference.className}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
