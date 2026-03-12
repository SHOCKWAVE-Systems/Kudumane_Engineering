import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { ServicePageContent } from "@/lib/services";
import { withBasePath } from "@/lib/site";

type CoreBusinessPageProps = {
  service: ServicePageContent;
};

export function CoreBusinessPage({ service }: CoreBusinessPageProps) {
  const contactHref = service.contactHref || "/contact";
  const backdropImageSrc =
    service.slug === "/core-business-3" && service.backdropImageSrc ? withBasePath(service.backdropImageSrc) : null;
  const contentSections = (
    <>
      <Section title="What We Do" subtitle="Practical, field-ready service scope tailored for industrial and mining-adjacent use.">
        <ul className="space-y-3 rounded-xl border border-slate-700 bg-brand-600 p-5 text-sm text-slate-100 sm:p-6">
          {service.whatWeDo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title={service.reasonsTitle}>
        <ul className="space-y-3 rounded-xl border border-slate-700 bg-brand-600 p-5 text-sm text-slate-100 sm:p-6">
          {service.reasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Typical Deliverables" subtitle="What clients can expect from each service engagement.">
        <ul className="space-y-3 rounded-xl border border-slate-700 bg-brand-600 p-5 text-sm text-slate-100 sm:p-6">
          {service.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {service.extraSection ? (
          <div className="mt-6 rounded-xl border border-slate-700 bg-brand-700 p-5 text-slate-100 sm:p-6">
            <h3 className="text-xl font-bold sm:text-2xl">{service.extraSection.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {service.extraSection.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {service.extraSection.link ? (
              <div className="mt-5">
                <Button href={service.extraSection.link.href} variant="outline" className="border-slate-200">
                  {service.extraSection.link.label}
                </Button>
              </div>
            ) : null}
            {service.extraSection.galleryImages?.length ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {service.extraSection.galleryImages.map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-lg border border-slate-600 bg-black/30 p-2"
                  >
                    <Image
                      src={withBasePath(image.src)}
                      alt={image.alt}
                      width={700}
                      height={500}
                      className="h-36 w-full object-contain sm:h-40"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="mt-6">
          <Button href={contactHref}>{service.ctaLabel || "Contact Us About This Service"}</Button>
        </div>
      </Section>
    </>
  );

  return (
    <>
      <section className="border-b border-slate-800 bg-gradient-to-b from-black to-brand-700 py-14 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{service.title}</h1>
            <p className="mt-4 text-sm text-slate-200 sm:text-base">{service.intro}</p>
            <div className="mt-6">
              <Button href={contactHref}>{service.ctaLabel || "Request Service Support"}</Button>
            </div>
          </div>
          {service.slug === "/core-business-2" ? (
            <div className="flex h-[220px] items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-black/30 p-3 shadow-sm sm:h-[280px] lg:h-[340px]">
              <Image
                src={withBasePath(service.imageSrc)}
                alt={`${service.title} placeholder image`}
                width={900}
                height={600}
                className="h-full w-full object-contain"
                unoptimized
              />
            </div>
          ) : (
            <Image
              src={withBasePath(service.imageSrc)}
              alt={`${service.title} placeholder image`}
              width={900}
              height={600}
              className="h-auto w-full rounded-xl border border-slate-700 bg-black/30 shadow-sm"
              unoptimized
            />
          )}
        </Container>
      </section>

      {backdropImageSrc ? (
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll opacity-20 lg:bg-fixed"
              style={{ backgroundImage: `url(${backdropImageSrc})` }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative">{contentSections}</div>
        </div>
      ) : (
        contentSections
      )}
    </>
  );
}
