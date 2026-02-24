export default function Project() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-4 py-12 text-left">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
        Projects
      </h2>
      <p className="text-lg md:text-xl leading-relaxed mb-4">
        Selected work that blends illustration, design, and storytelling—built
        to feel simple, expressive, and human.
      </p>

      <div className="grid gap-4">
        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Midnight Posters</h3>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            A poster series exploring contrast, rhythm, and typography with bold
            color systems.
          </p>
        </article>

        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Sound Sketchbook</h3>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Short compositions paired with minimal visuals—an experiment in
            mood, texture, and pacing.
          </p>
        </article>
      </div>
    </section>
  );
}
