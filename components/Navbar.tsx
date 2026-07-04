export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-6 text-white md:px-16">
      <nav className="flex items-center justify-between text-xs uppercase tracking-[0.28em]">
        <a href="#" className="font-medium">
          Sounds Good!
        </a>

        <div className="hidden gap-8 text-white/65 md:flex">
          <a href="#experience" className="transition hover:text-white">Experience</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#film" className="transition hover:text-white">Film</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}