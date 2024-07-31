"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLink {
  title: string;
  href: string;
}

export default function Navigation({ navlinks }: { navlinks: NavLink[] }) {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="container mx-auto flex gap-16">
        {navlinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={pathname === link.href ? "underline text-red-600" : ""}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
