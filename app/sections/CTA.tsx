export default function CTA() {
  return (
    <section id="cta" className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
        Follow me on Instagram
      </h2>
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        I share new sketches, projects, and behind-the-scenes moments there
        first. Come say hi and see what I’m working on.
      </p>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-pink-500 px-8 py-3 text-base md:text-lg font-semibold text-white shadow-lg shadow-pink-500/40 hover:bg-pink-600 hover:shadow-pink-500/60 transition"
      >
        Visit my Instagram
      </a>
    </section>
  );
}
