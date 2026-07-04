export default function Contact() {
  return (
    <section id="contact" className="bg-[#111111] py-32 text-[#f6f2eb]">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-16">
        <p className="mb-10 text-xs uppercase tracking-[0.45em] text-[#b36b32]">
          Contact
        </p>

        <h2 className="text-5xl font-light leading-tight tracking-[-0.05em] md:text-7xl">
          Let&apos;s design the atmosphere of your next event.
        </h2>

        <a
          href="mailto:lehiany@gmail.com"
          className="mt-12 inline-flex rounded-full bg-[#f6f2eb] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#111111] transition hover:bg-[#ff6f18]"
        >
          Contact Sounds Good!
        </a>
      </div>
    </section>
  );
}