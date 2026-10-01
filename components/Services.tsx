const expertise = [
  "Direction artistique",
  "Sélection des musiciens",
  "Format sur mesure",
  "Coordination musicale",
];

const experiences = [
  {
    title: "Vos célébrations, une histoire à faire résonner",
    paragraphs: [
      "Un anniversaire, une union, des retrouvailles, une nouvelle étape ou simplement le plaisir d’être ensemble.",
      "Chaque célébration a son histoire, ses visages et ses chansons. Nous partons de ce qui vous touche pour imaginer une présence musicale qui accompagne ces instants et leur donne une résonance particulière.",
    ],
    action: "Racontez-nous ce que vous célébrez",
  },
  {
    title: "Vos rencontres professionnelles, une autre façon de se retrouver",
    paragraphs: [
      "Accueillir, remercier, célébrer un chemin parcouru : chaque rencontre porte une intention.",
      "Sounds Good lui donne une expression musicale, pensée en dialogue avec votre univers et les personnes que vous réunissez. Une invitation à se découvrir autrement, le temps d’une parenthèse artistique.",
    ],
    action: "Partagez votre intention",
  },
  {
    title: "Vos soirées privées, le plaisir de l’intime",
    paragraphs: [
      "Réunir les personnes que l’on aime dans un lieu choisi. Entendre de près une voix, un instrument, et laisser la musique prendre part à la soirée.",
      "Nous imaginons avec vous une expérience à la mesure de cette proximité, attentive à vos envies comme à la spontanéité du moment.",
    ],
    action: "Imaginons votre soirée",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#fff8ed] py-20 text-[#17110d] md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <div className="mb-12 flex items-center justify-between gap-6 md:mb-16">
          <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff5a1f] md:text-2xl">
            Sur mesure
          </p>
          <div className="hidden h-[2px] flex-1 bg-[#17110d] md:block" />
        </div>

        <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-6xl md:text-8xl">
          Chaque lieu
          <br />
          a son rythme.
        </h2>

        <div className="mt-12 grid gap-12 border-t-2 border-[#17110d] pt-10 md:mt-16 md:grid-cols-[1.15fr_0.85fr] md:gap-20 md:pt-14">
          <div>
            <p className="max-w-3xl text-2xl font-bold leading-tight md:text-4xl md:leading-tight">
              Sounds Good imagine avec vous une expérience musicale vivante,
              nourrie de vos goûts, de votre histoire et du caractère de votre lieu.
            </p>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 md:text-xl">
              Le jazz en est le langage ; votre occasion lui donne sa couleur.
            </p>
          </div>

          <div className="border-y-2 border-[#17110d]">
            {expertise.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 border-b border-[#17110d]/35 py-5 last:border-b-0 md:py-6"
              >
                <span className="text-sm font-black text-[#ff5a1f]">
                  0{index + 1}
                </span>
                <p className="text-lg font-black uppercase leading-tight md:text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-t border-[#17110d]/35 pt-10 md:mt-16 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article key={experience.title} className="flex min-w-0 flex-col">
              <h3 className="text-2xl font-bold leading-tight tracking-[-0.025em] md:text-3xl">
                {experience.title}
              </h3>
              <div className="mt-6 space-y-5 text-base leading-8 md:text-lg">
                {experience.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-auto pt-7">
                <a
                  href="#contact"
                  className="inline-block border-b-2 border-[#ff5a1f] pb-2 text-base font-bold leading-6 transition hover:text-[#b83a0d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17110d]"
                >
                  {experience.action} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
