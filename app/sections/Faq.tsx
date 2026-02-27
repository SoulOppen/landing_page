import FaqItem from "./items/FaqItem";

const faqs = [
  {
    question: "How do you create your illustrations?",
    answer:
      "I start with sketches on paper, then refine them digitally with a focus on color, mood, and storytelling. I like to mix traditional and digital techniques.",
  },
  {
    question: "Do you take commissions?",
    answer:
      "Yes. Send me a DM on Instagram and we can discuss your project, timeline, and budget. I’m open to editorial, branding, and personal commissions.",
  },
  {
    question: "What tools do you use?",
    answer:
      "I work with pencils and paper for sketching, then move to digital tools for color and composition. I also experiment with music and sound when the project fits.",
  },
  {
    question: "Where can I see more of your work?",
    answer:
      "I post regularly on Instagram with new sketches, process shots, and finished pieces. The carousel on this site shows a selection of recent work.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative max-w-3xl mx-auto px-4 py-12 text-left md:border-l-2 md:border-foreground/40 md:pl-8">
      <span className="absolute left-0 top-16 hidden md:block w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" aria-hidden />
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
        FAQ
      </h2>
      <div className="space-y-0">
        {faqs.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}
