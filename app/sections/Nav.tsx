import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center gap-3 text-2xl font-bold bg-gray-800 p-2 rounded-md m-auto">
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
