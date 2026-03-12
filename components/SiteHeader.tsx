"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { businessName, siteRoutes, withBasePath } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-black/90 backdrop-blur">
      <div className="w-full px-4 py-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex min-w-0 items-center gap-3">
            <Image
              src={withBasePath("/images/logo-current.png")}
              alt={businessName}
              width={300}
              height={110}
              className="h-10 w-auto sm:h-14 lg:h-16"
              priority
            />
          </Link>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            className="inline-flex items-center justify-center rounded border border-slate-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-100 transition hover:border-slate-500 hover:text-white md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
          <nav aria-label="Main Navigation" className="hidden flex-1 md:block md:pl-6 lg:pl-10">
            <ul className="flex flex-wrap justify-end gap-2 text-sm">
              {siteRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`block rounded border border-transparent px-3 py-2 font-medium transition hover:text-red-500 ${
                      pathname === route.path ? "text-red-500" : "text-slate-100"
                    }`}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <nav
          id="site-navigation"
          aria-label="Mobile Navigation"
          className={`${isMenuOpen ? "mt-4 block" : "hidden"} md:hidden`}
        >
          <ul className="grid gap-2 border-t border-slate-800 pt-4 text-sm">
            {siteRoutes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded border px-3 py-3 font-medium transition ${
                    pathname === route.path
                      ? "border-red-500 bg-red-500/10 text-red-400"
                      : "border-slate-800 text-slate-100 hover:border-slate-600"
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
