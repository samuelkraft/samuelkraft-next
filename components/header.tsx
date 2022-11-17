import Image from "next/image";
import Link from "next/link";
import avatar from "public/avatar.png";
import NavLink from "./NavLink";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

// box-shadow: 0 20px 40px 20px black;

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md">
      <nav className="px-4 md:px-6 py-2 max-w-[700px] mx-auto flex justify-between items-center ">
        <Link href="/" className="hidden shrink-0 sm:block">
          <Image src={avatar} alt="Samuel Kraft avatar" className="w-8 h-8" />
        </Link>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center w-8 h-8">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
