import Link from "next/link";
import { Container } from "@/components/Container";
import { businessName, contactDetails, siteRoutes } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-black text-slate-100">
      <Container className="grid gap-8 py-10 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">{businessName}</h2>
          <p className="mt-2 text-sm text-slate-300">
            Specialists in brake testing, repairs, and component supply for mining, transport, and industrial
            applications.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Main Office: {contactDetails.mainOffice.phone}
            <br />
            Main Email: {contactDetails.mainOffice.email}
            <br />
            Brake Testing: {contactDetails.brakeTestingLead.phone} | {contactDetails.brakeTestingLead.email}
            <br />
            Address: {contactDetails.address}
          </p>
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
      <Container className="border-t border-slate-800 py-4 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
