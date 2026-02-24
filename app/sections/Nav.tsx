import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="text-center sm:flex sm:justify-center sm:gap-3 sm:text-2xl sm:font-bold bg-gray-800 p-2 rounded-md m-auto">
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
          <Link href="#cta">CTA</Link>
        </li>
      </ul>
    </nav>
  );
}
