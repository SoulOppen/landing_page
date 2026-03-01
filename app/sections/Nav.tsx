import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full max-w-3xl mx-auto p-4">
      <ul className="flex flex-col sm:flex-row sm:justify-center gap-4 text-xl text-center md:text-xl font-semibold p-2 sm:rounded-lg bg-white/5">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#education">Education</Link>
        </li>
        <li>
          <Link href="#faq">FAQ</Link>
        </li>
        <li>
          <Link href="#cta">CTA</Link>
        </li>
      </ul>
    </nav>
  );
}
