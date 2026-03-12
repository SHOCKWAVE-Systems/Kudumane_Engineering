import { ReactNode } from "react";
import { Container } from "@/components/Container";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`.trim()}>
      <Container>
        {title ? <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{title}</h2> : null}
        {subtitle ? <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
        <div className="mt-6">{children}</div>
      </Container>
    </section>
  );
}
