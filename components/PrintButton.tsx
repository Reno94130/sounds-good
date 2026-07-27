"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-[#17110d]/30 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#17110d] transition hover:border-[#ff5a1f] hover:bg-[#ff5a1f] print:hidden"
    >
      Imprimer / PDF
    </button>
  );
}
