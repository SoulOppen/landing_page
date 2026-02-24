import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center gap-3 text-2xl font-bold bg-gray-800 p-2 rounded-md w-80 m-auto">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#features">Features</Link>
        </li>
        <li>
          <Link href="#cta">CTA</Link>
        </li>
      </ul>
    </nav>
  );
}
