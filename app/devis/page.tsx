import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "../../components/PrintButton";

export const metadata: Metadata = {
  title: "Devis client - Sounds Good!",
  description: "Page de devis client Sounds Good! pour prestation live jazz.",
};

const quoteInfo: Array<[string, string]> = [
  ["Client", ""],
  ["Contact", ""],
  ["Événement", ""],
  ["Date", "À confirmer"],
  ["Lieu", "À confirmer"],
  ["Référence", "SG-2026-001"],
];

const serviceItems = [
  "Prestation live jazz sur mesure",
  "Formation adaptée au lieu et au format de l’événement",
  "Répertoire ajusté à l’ambiance souhaitée",
  "Coordination artistique avant l’événement",
];

const quoteRows: Array<[string, string, string]> = [
  ["Préparation artistique", "1", ""],
  ["Prestation live", "À définir", ""],
  ["Transport / installation / coordination", "À définir", ""],
];

const terms = [
  "Proposition valable 30 jours.",
  "Acompte à définir pour confirmer la date.",
  "Horaires et contraintes techniques à valider avant confirmation.",
  "Ajustement possible selon le format final de l’événement.",
];

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#fff8ed] px-5 py-6 text-[#17110d] print:bg-white">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-col gap-5 border-b border-[#17110d]/16 pb-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="block w-[165px]">
            <Image
              src="/logo-sounds-good-v2.png"
              alt="Sounds Good!"
              width={1200}
              height={700}
              priority
              className="h-auto w-full"
            />
          </Link>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="md:text-right">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff5a1f]">
                Proposition de devis
              </p>
              <p className="mt-2 text-sm font-bold text-[#17110d]/62">
                Sounds Good! / Jazz live sur mesure
              </p>
            </div>
            <PrintButton />
          </div>
        </header>

        <section className="grid gap-8 border-b border-[#17110d]/12 py-8 md:grid-cols-[1fr_300px] md:items-end">
          <div>
            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
              Devis client
            </h1>
            <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-[#17110d]/68">
              Proposition simple pour une prestation musicale live, à compléter
              selon le client, le lieu et le format choisi.
            </p>
          </div>

          <div className="border-l-4 border-[#ff5a1f] bg-white/55 p-5 print:border print:bg-white">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#17110d]/55">
              Total estimé
            </p>
            <input
              aria-label="Total estimé"
              defaultValue=""
              placeholder="À compléter"
              className="mt-2 w-full bg-transparent text-3xl font-black tracking-[-0.03em] outline-none placeholder:text-[#17110d]/35 focus:placeholder:text-[#17110d]/20 print:placeholder:text-transparent"
            />
          </div>
        </section>

        <section className="border-b border-[#17110d]/12 py-8">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#ff5a1f]">
            Informations
          </h2>

          <dl className="mt-5 grid border-t border-[#17110d]/12 md:grid-cols-2">
            {quoteInfo.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[120px_1fr] gap-4 border-b border-[#17110d]/12 py-4 md:odd:border-r md:odd:pr-6 md:even:pl-6"
              >
                <dt className="text-xs font-black uppercase tracking-[0.12em] text-[#17110d]/50">
                  {label}
                </dt>
                <dd>
                  <input
                    aria-label={label}
                    defaultValue={value}
                    placeholder="À compléter"
                    className="w-full bg-transparent font-bold outline-none placeholder:text-[#17110d]/35 focus:placeholder:text-[#17110d]/20 print:placeholder:text-transparent"
                  />
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="grid gap-8 border-b border-[#17110d]/12 py-8 md:grid-cols-[220px_1fr]">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#ff5a1f]">
            Prestation
          </h2>

          <ul className="grid gap-3">
            {serviceItems.map((item) => (
              <li key={item} className="flex gap-3 font-semibold leading-7">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff5a1f]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-[#17110d]/12 py-8">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#ff5a1f]">
            Détail du devis
          </h2>

          <div className="mt-5 border border-[#17110d]/12 bg-white/45 print:bg-white">
            <div className="hidden grid-cols-[1fr_140px_170px] border-b border-[#17110d]/12 bg-[#17110d] px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#fff8ed] md:grid">
              <span>Désignation</span>
              <span>Quantité</span>
              <span className="text-right">Montant</span>
            </div>

            {quoteRows.map(([label, quantity, amount]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-[#17110d]/10 px-4 py-4 last:border-b-0 md:grid-cols-[1fr_140px_170px] md:items-center"
              >
                <input
                  aria-label="Désignation"
                  defaultValue={label}
                  className="w-full bg-transparent font-bold outline-none placeholder:text-[#17110d]/35 focus:placeholder:text-[#17110d]/20"
                />
                <input
                  aria-label="Quantité"
                  defaultValue={quantity}
                  className="w-full bg-transparent text-sm font-semibold text-[#17110d]/60 outline-none placeholder:text-[#17110d]/35 focus:placeholder:text-[#17110d]/20"
                />
                <input
                  aria-label="Montant"
                  defaultValue={amount}
                  placeholder="À compléter"
                  className="w-full bg-transparent font-black text-[#ff5a1f] outline-none placeholder:text-[#ff5a1f]/45 focus:placeholder:text-[#ff5a1f]/25 print:placeholder:text-transparent md:text-right"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#17110d]/12 py-8 md:grid-cols-[220px_1fr]">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#ff5a1f]">
            Conditions
          </h2>

          <ul className="grid gap-3 text-sm font-semibold leading-6 text-[#17110d]/68 md:grid-cols-2">
            {terms.map((term) => (
              <li key={term} className="border-t border-[#17110d]/12 pt-3">
                {term}
              </li>
            ))}
          </ul>
        </section>

        <footer className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black uppercase tracking-[-0.02em]">
              Sounds Good!
            </p>
            <p className="mt-1 text-sm font-semibold text-[#17110d]/55">
              Music, Taste & Emotion
            </p>
          </div>

          <Link
            href="/#contact"
            className="w-fit border-2 border-[#17110d] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition hover:border-[#ff5a1f] hover:bg-[#ff5a1f] print:hidden"
          >
            Contact
          </Link>
        </footer>
      </div>
    </main>
  );
}
