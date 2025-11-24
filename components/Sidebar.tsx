"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MENUS = [
  { name: "Characters", href: "/" },
  { name: "Mysterious Items", href: "/mysterious-items" },
  { name: "Characters", href: "/characters" },
  { name: "Training Ground", href: "/training-ground" },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <ul className="flex-column shrink-0 space-y space-y-4 text-sm font-medium text-body md:me-4 mb-4 md:mb-0">
      {MENUS.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`inline-flex items-center px-4 py-2.5 rounded-base w-full 
          ${
            pathname === item.href
              ? "bg-brand text-white"
              : "bg-transparent hover:bg-neutral-secondary-soft"
          }
        `}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
