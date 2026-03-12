import Link from "next/link";
import { Container } from "@/components/Container";
import { businessName, contactDetails, siteRoutes } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-black text-slate-100">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr,0.7fr]">
        <div>
          <h2 className="text-lg font-semibold">{businessName}</h2>
          <p className="mt-2 text-sm text-slate-300">
            Specialists in brake testing, repairs, and component supply for mining, transport, and industrial
            applications.
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>
              Main Office:{" "}
              <a href={`tel:${contactDetails.mainOffice.phone.replace(/\s+/g, "")}`} className="transition hover:text-white">
                {contactDetails.mainOffice.phone}
              </a>
            </p>
            <p>
              Main Email:{" "}
              <a href={`mailto:${contactDetails.mainOffice.email}`} className="break-all transition hover:text-white">
                {contactDetails.mainOffice.email}
              </a>
            </p>
            <p className="leading-relaxed">
              Brake Testing:{" "}
              <a
                href={`tel:${contactDetails.brakeTestingLead.phone.replace(/\s+/g, "")}`}
                className="transition hover:text-white"
              >
                {contactDetails.brakeTestingLead.phone}
              </a>{" "}
              <span className="text-slate-500">|</span>{" "}
              <a href={`mailto:${contactDetails.brakeTestingLead.email}`} className="break-all transition hover:text-white">
                {contactDetails.brakeTestingLead.email}
              </a>
            </p>
            <p>Address: {contactDetails.address}</p>
          </div>
        </div>
        <div>
          <h2 className="text-base font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            {siteRoutes.map((route) => (
              <li key={route.path}>
                <Link href={route.path} className="text-slate-300 hover:text-accent-500">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-slate-800 py-4 text-center text-xs text-slate-500 sm:text-left">
        <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
