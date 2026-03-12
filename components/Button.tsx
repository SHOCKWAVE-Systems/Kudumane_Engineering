import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline" | "light";
};

const baseClasses =
  "inline-flex items-center justify-center rounded-sm border px-5 py-3 text-sm font-semibold uppercase tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "border-accent-500 bg-accent-500 text-white hover:border-accent-600 hover:bg-accent-600",
  outline: "border-white bg-transparent text-white hover:bg-white hover:text-black",
  light: "border-white bg-white text-black hover:bg-slate-100",
};

export function Button({ href, children, className = "", type = "button", variant = "primary" }: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();

  if (href) {
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
