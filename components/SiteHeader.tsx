"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { businessName, siteRoutes, withBasePath } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-black/90 backdrop-blur">
      <div className="w-full px-3 py-3 sm:px-4 lg:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={withBasePath("/images/logo-current.png")}
              alt={businessName}
              width={300}
              height={110}
              className="h-11 w-auto sm:h-16"
              priority
            />
          </Link>
          <nav aria-label="Main Navigation" className="pb-1 sm:flex-1 sm:pb-0 sm:pl-8 lg:pl-12">
            <ul className="flex flex-wrap gap-1 text-xs sm:gap-2 sm:text-sm">
              {siteRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`block rounded border border-transparent px-2 py-1 font-medium transition hover:text-red-500 sm:px-3 ${
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
      </div>
    </header>
  );
}
