export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 py-10 text-[#fff1df] md:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t-2 border-[#ff4b00] pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-5xl font-black uppercase leading-[0.8] tracking-[-0.08em] text-[#ff4b00] md:text-6xl">
            Sounds
            <br />
            Good!
          </p>

          <p className="mt-5 max-w-md text-sm font-medium uppercase tracking-[0.12em] text-[#fff1df]/70">
            Live music · Real emotion · Bespoke events
          </p>
        </div>

        <div className="space-y-3 text-sm font-bold uppercase tracking-[0.08em] text-[#fff1df]/75 md:text-right">
          <p>Paris / France</p>

          <a
            href="mailto:lehiany@gmail.com"
            className="block hover:text-[#ff4b00]"
          >
            lehiany@gmail.com
          </a>

          <p>© 2026 Sounds Good!</p>
        </div>
      </div>
    </footer>
  );
}