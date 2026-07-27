export default function Footer() {
  return (
    <footer className="bg-[#17110d] px-5 py-10 text-[#fff8ed] md:px-14">
      <div className="mx-auto max-w-7xl border-t border-[#fff8ed]/20 pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff5a1f] md:text-2xl">
              Sounds Good!
            </p>

            <p className="mt-3 max-w-md text-sm font-medium leading-6 text-[#fff8ed]/65">
              Live music, real emotion, bespoke events.
            </p>
          </div>

          <div className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#fff8ed]/60 md:text-right">
            <p>Paris / France</p>

            <p>© 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
