export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 py-10 text-[#fff1df] md:px-14">
      <div className="mx-auto max-w-7xl border-t border-[#fff1df]/20 pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.08em] text-[#ff4b00] md:text-2xl">
              Sounds Good!
            </p>

            <p className="mt-3 max-w-md text-sm font-medium leading-6 text-[#fff1df]/65">
              Live music, real emotion, bespoke events.
            </p>
          </div>

          <div className="space-y-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#fff1df]/60 md:text-right">
            <p>Paris / France</p>

            <a href="mailto:lehiany@gmail.com" className="block hover:text-[#ff4b00]">
              lehiany@gmail.com
            </a>

            <p>© 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}