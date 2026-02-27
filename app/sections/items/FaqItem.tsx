"use client";

import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-current/20 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full py-4 flex items-center justify-between gap-3 text-left font-semibold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span
          className={`shrink-0 text-2xl leading-none transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-base opacity-90 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
