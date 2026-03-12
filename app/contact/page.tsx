import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/seo";
import { contactDetails } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact Us | KUDUMANE ENGINEERING BRAKES & SUPPLIES",
  description: "Contact Kudumane Engineering Brakes & Supplies for brake testing, parts supply, repairs, and maintenance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
        <div className="rounded-md border border-slate-700 bg-black p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h1>
          <p className="mt-3 text-sm text-slate-300">
            Use the form to request a quote, book a brake test, or ask for parts and repair support.
          </p>
          <div className="mt-6 space-y-4 text-sm text-slate-200">
            <div>
              <h2 className="text-xl font-semibold text-white">Brake Testing</h2>
              <p className="mt-1">{contactDetails.brakeTestingLead.name}</p>
              <p>{contactDetails.brakeTestingLead.phone}</p>
              <p>{contactDetails.brakeTestingLead.email}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Components, Repairs & Maintenance</h2>
              <p className="mt-1">{contactDetails.mainOffice.phone}</p>
              <p>{contactDetails.mainOffice.email}</p>
            </div>
            <p>
              <strong>Service Area:</strong> {contactDetails.serviceArea}
            </p>
            <p>
              <strong>Workshop Address:</strong> {contactDetails.address}
            </p>
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-xl font-semibold text-white">Send a Message</h2>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
