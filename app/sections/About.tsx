export default function About() {
  return (
    <section id="about" className="relative max-w-3xl mx-auto px-4 py-12 text-left md:border-l-2 md:border-foreground/40 md:pl-8">
      <span className="absolute left-0 top-16 hidden md:block w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" aria-hidden />
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
        About Me
      </h2>
      <p className="text-lg md:text-xl leading-relaxed mb-4">
        I am a creative and curious person who loves exploring new ways to
        express ideas through color, music, and words. Everyday details inspire
        me, and I turn them into illustrations, compositions, and visual
        projects.
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        I enjoy collaborating with others, blending styles, and experimenting
        with different techniques to tell stories that connect emotionally with
        the people who see them.
      </p>
    </section>
  )
}