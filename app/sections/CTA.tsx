import Carousel from "./Carousel";

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
      <Carousel
      images={[
        "https://images.unsplash.com/photo-1770048792381-55d47c183faa?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1771238496987-140db60cc1f3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1771226285018-a90565c798f8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1771320515748-a3b5c65ba9f8?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]}
    />
    </section>
  );
}
