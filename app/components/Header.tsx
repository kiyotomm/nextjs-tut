"use client";
import { ClassNames } from "@emotion/react";
import { li } from "framer-motion/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const links = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/products/nigs", name: "nigs" },
  ];
  return (
    <nav className="flex justify-center  p-8 w-screen">
      <ul className="flex gap-5">
        {links.map((link) => (
          <li key={link.name} className="hover:font-extrabold">
            <Link
              href={link.link}
              className={pathName === link.link ? "font-extrabold" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
