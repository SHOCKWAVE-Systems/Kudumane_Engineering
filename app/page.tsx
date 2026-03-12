import Image from "next/image";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { buildPageMetadata } from "@/lib/seo";
import { contactDetails, withBasePath } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "KUDUMANE ENGINEERING BRAKES & SUPPLIES | Home",
  description:
    "Specialists in brake testing, repair, and component supply for mining, transport, and industrial applications.",
  path: "/",
});

export default function HomePage() {
  const whyKudumaneReasons = [
    "State-of-the-art dynamic brake testing support.",
    "Trusted experience since 1998 in heavy-duty braking solutions.",
    "Qualified artisans and practical field diagnostics.",
    "Actionable reporting that helps prevent future failures.",
    "Competitive pricing for ongoing fleet support requirements.",
    "Reliable after-sales support on tools, parts, and calibration services.",
  ];

  const coreServiceCards = [
    {
      title: "Brake Testing",
      href: "/core-business-1",
      description: "Accurate, professional brake testing for mining TMMs, trucks, buses, and road fleets.",
      icon: withBasePath("/images/brake-icon.png"),
    },
    {
      title: "AutoStop Heavy Brake Meter",
      href: "/core-business-2",
      description: "Supply, certified training, and yearly calibration support for compliant brake testing.",
      icon: withBasePath("/images/engineering-icon.png"),
    },
    {
      title: "Brake Component Supply",
      href: "/core-business-3",
      description: "Prompt supply of brake, clutch, truck, and trailer components across the Kuruman region.",
      icon: withBasePath("/images/brake-component-icon.png"),
    },
    {
      title: "Repairs & Maintenance",
      href: "/core-business-4",
      description: "Fitment, machining, inspections, skimming, and relining services for safer braking performance.",
      icon: withBasePath("/images/brake-repairs-icon.png"),
    },
  ];

  const freeDeliveryTowns = ["Kuruman", "Kathu", "Postmasburg", "Danielskuil", "Olifantshoek", "Hotazel", "Blackrock"];

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-black py-14 sm:py-24">
        <div className="absolute inset-0 opacity-15">
          <Image src={withBasePath("/images/hero-photo.jpg")} alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10">
            <h1 className="max-w-2xl text-balance text-4xl font-bold leading-[1.02] text-white sm:text-6xl">
              Specialists In Brake Testing, Repair & Component Supply
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-200">
              Precision engineering solutions for mining, transport, and industrial applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Book a Brake Test</Button>
              <Button href="#core-services" variant="outline">
                View Services
              </Button>
            </div>
          </div>
          <div className="relative z-10 rounded-md border border-slate-700 bg-black/55 p-6">
            <h2 className="text-3xl font-bold text-white">Safety-Driven Engineering Excellence</h2>
            <p className="mt-4 text-sm text-slate-300">
              Since 1998, Kudumane Brakes has delivered dependable heavy-duty brake testing, repairs, and parts supply.
              Our team combines OEM-certified brake testing knowledge, mechanical experience, and mining operational
              insight to keep fleets safe and compliant.
            </p>
            <p className="mt-3 text-sm text-slate-300">
              We support mines and fleet operators with practical solutions that reduce downtime and protect productivity.
            </p>
          </div>
        </div>
      </section>

      <section id="core-services" className="bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black">Our Core Services</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-700">
            Specialist services designed for mining, transport, and industrial operations.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreServiceCards.map((service) => (
              <article key={service.href} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <Image src={service.icon} alt={`${service.title} icon`} width={88} height={88} className="h-20 w-20 object-contain" />
                <h3 className="mt-4 text-2xl font-semibold text-black">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{service.description}</p>
                <div className="mt-5">
                  <Button href={service.href}>Read More</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-20"
            style={{ backgroundImage: `url(${withBasePath("/images/Dumptruck 2.png")})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative">
          <ScrollReveal delayMs={0}>
            <Section className="py-8 sm:py-10" title="Why Kudumane Engineering?">
              <ul className="grid gap-3 rounded-md border border-slate-700 bg-brand-600 p-6 text-base text-slate-100 sm:grid-cols-2">
                {whyKudumaneReasons.map((reason, index) => (
                  <li
                    key={reason}
                    className="reason-fade-in flex items-start gap-2"
                    style={{ ["--delay" as string]: `${index * 130}ms` }}
                  >
                    <span className="text-white">✓</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <Section className="py-8 sm:py-10" title="About Us">
              <div className="rounded-md border border-slate-700 bg-brand-600 p-6 text-base leading-relaxed text-slate-100">
                <p>
                  Since 1998, Kudumane Brakes has been committed to the safety, reliability, and performance of heavy-duty
                  braking systems. What began as a specialized service has grown into a trusted provider of brake supply,
                  maintenance, and dynamic brake testing across multiple industries.
                </p>
                <p className="mt-3">
                  Our expertise is deeply rooted in the mining sector, where dependable braking systems are essential for safe
                  and efficient operations. We continue to support major mining clients through technical knowledge, consistent
                  workmanship, and responsive support.
                </p>
                <p className="mt-3">
                  Kudumane Brakes is powered by a dedicated team with experience in mechanical engineering, OEM-certified brake
                  testing, on-site technical support, and mining operations leadership.
                </p>
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <Section
              className="py-8 sm:py-10"
              title="Engineering Excellence Driven By Safety"
              subtitle="Kudumane Brakes supports reliable fleet operations through quality workmanship and responsive service."
            >
              <div className="rounded-md border border-slate-700 bg-brand-600 p-6 text-slate-100">
                <p className="text-base leading-relaxed">
                  We have built strong long-standing partnerships with major mining clients by maintaining high service
                  standards, technical accuracy, and dependable turnaround. Our focus is practical: safer vehicles, stable
                  braking performance, and reduced unplanned downtime.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  With over two decades of specialist brake industry experience, we continue to deliver trusted support in
                  testing, parts supply, and repairs.
                </p>
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal delayMs={360}>
            <Section className="py-8 sm:py-10" title="Service Area">
              <div className="rounded-md border border-slate-700 bg-brand-600/85 p-6 text-base text-slate-100 backdrop-blur-[1px]">
                <p>
                  We support clients beyond this area. We currently provide free delivery of parts and components to the
                  following towns:
                </p>
                <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  {freeDeliveryTowns.map((town) => (
                    <li key={town} className="rounded border border-slate-500/70 bg-black/35 px-3 py-2">
                      {town}
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal delayMs={480}>
            <Section className="pt-2 pb-8 sm:pt-2 sm:pb-10">
              <div className="rounded-md border border-slate-700 bg-black p-8 text-white">
                <h2 className="text-4xl font-bold">Need dependable brake support for your fleet?</h2>
                <p className="mt-2 text-base text-slate-300">
                  Contact us to book a brake test, request parts supply, or discuss repair and maintenance support.
                </p>
                <div className="mt-5">
                  <Button href="/contact">Book a Brake Test</Button>
                  <span className="ml-4 text-base text-slate-400">or call {contactDetails.mainOffice.phone}</span>
                </div>
                <div className="mt-3 text-base text-slate-400">
                  Brake Testing Contact: {contactDetails.brakeTestingLead.name} | {contactDetails.brakeTestingLead.phone}
                </div>
                <div className="mt-1 text-base text-slate-400">
                  Email: {contactDetails.brakeTestingLead.email} | {contactDetails.mainOffice.email}
                </div>
                <div className="mt-4">
                  <Button href="/contact" variant="outline">
                    View Contact Details
                  </Button>
                </div>
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal delayMs={560}>
            <Section className="pt-0 pb-10 sm:pb-12" title="Our Location">
              <div className="rounded-md border border-slate-700 bg-black p-6 text-slate-100">
                <p className="text-2xl font-bold text-white">Kuruman</p>
                <p className="mt-1 text-base text-slate-300">Northern Cape</p>
              </div>
            </Section>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
