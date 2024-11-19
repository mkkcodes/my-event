"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ThemeToggleButton from "./theme-toggle";

const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

export default function Header() {
  const activePathname = usePathname();
  return (
    <header
      className="flex items-center 
    justify-between border-b dark:border-white/10 border-gray-400/50
    h-14 px-3 sm:px-9"
    >
      <Logo />
      <section className="flex items-center gap-x-4 h-full">
        <nav className="h-full">
          <ul className="flex h-full gap-x-6 text-sm">
            {routes.map((route) => (
              <li
                key={route.path}
                className={cn(
                  "dark:hover:text-white hover:text-black transition flex items-center relative",
                  {
                    "dark:text-white text-black": activePathname === route.path,
                    "dark:text-white/50 text-black/50":
                      activePathname !== route.path,
                  }
                )}
              >
                <Link href={route.path}>{route.name}</Link>
                {activePathname === route.path && (
                  <motion.div
                    layoutId="header-active-link"
                    className="bg-accent h-1 w-full absolute bottom-0"
                  ></motion.div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggleButton />
      </section>
    </header>
  );
}
