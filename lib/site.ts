export const businessName = "KUDUMANE ENGINEERING BRAKES & SUPPLIES";

const absoluteUrlPattern = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;

export const siteBasePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim().replace(/\/$/, "");

export const siteRoutes = [
  { path: "/", label: "Home" },
  { path: "/core-business-1", label: "Brake Testing" },
  { path: "/core-business-2", label: "Autostop Brake Meter" },
  { path: "/core-business-3", label: "Brakes, Clutches, Truck and Trailer Component Supply" },
  { path: "/core-business-4", label: "Repairs and Maintenance" },
  { path: "/contact", label: "Contact us" },
];

export const contactDetails = {
  brakeTestingLead: {
    name: "GP van den Berg",
    phone: "082 826 6201",
    email: "gp@kbrakes.co.za",
  },
  mainOffice: {
    phone: "053 712 3030",
    email: "reception@kbrakes.co.za",
  },
  address: "2 Evkom Rd, Kuruman, 8460",
  serviceArea: "Kuruman, Kathu, Postmasburg, Danielskuil, Olifantshoek, Hotazel, and Blackrock",
};

export function getSiteUrl() {
  const fallback = "https://www.example.com";
  const rawValue = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallback;
  return rawValue.endsWith("/") ? rawValue : `${rawValue}/`;
}

export function withBasePath(path: string) {
  if (!path) {
    return siteBasePath || "/";
  }

  if (absoluteUrlPattern.test(path) || path.startsWith("//")) {
    return path;
  }

  if (!path.startsWith("/") || !siteBasePath || path === siteBasePath || path.startsWith(`${siteBasePath}/`)) {
    return path;
  }

  return path === "/" ? siteBasePath : `${siteBasePath}${path}`;
}

export function toAbsoluteUrl(path: string) {
  return new URL(withBasePath(path), getSiteUrl()).toString();
}
