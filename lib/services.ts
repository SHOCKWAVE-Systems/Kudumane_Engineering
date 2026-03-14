export type ServicePageContent = {
  slug: "/core-business-1" | "/core-business-2" | "/core-business-3" | "/core-business-4";
  navLabel: string;
  title: string;
  metaDescription: string;
  intro: string;
  whatWeDo: string[];
  deliverables: string[];
  reasonsTitle: string;
  reasons: string[];
  imageSrc: string;
  backdropImageSrc?: string;
  backdropImageWidth?: number;
  backdropImageHeight?: number;
  ctaLabel?: string;
  contactHref?: string;
  extraSection?: {
    title: string;
    content: string[];
    link?: { href: string; label: string };
    galleryImages?: { src: string; alt: string }[];
  };
};

function buildMailtoForService(serviceName: string) {
  const subject = encodeURIComponent(`Kudumane Website Enquiry - ${serviceName}`);
  const body = encodeURIComponent(
    [
      `Hello Kudumane Team,`,
      ``,
      `I would like assistance with ${serviceName}.`,
      ``,
      `Please contact me to discuss pricing, availability, and next steps.`,
      ``,
      `Name:`,
      `Company:`,
      `Phone:`,
      ``,
      `Thank you.`,
    ].join("\n"),
  );

  return `mailto:reception@kbrakes.co.za?subject=${subject}&body=${body}`;
}

export const servicePages: ServicePageContent[] = [
  {
    slug: "/core-business-1",
    navLabel: "Brake Testing",
    title: "Brake Testing",
    metaDescription:
      "Dynamic brake testing for mining TMMs, road vehicles, buses, and side tipper trucks on-site or at our workshop.",
    intro:
      "We provide dynamic brake testing for mining TMMs, road vehicles, buses, side tipper trucks, and other heavy-duty fleets on-site or from our workshop.",
    whatWeDo: [
      "Dynamic brake testing of mining TMMs, road vehicles, buses, and side tipper trucks.",
      "On-site testing support or workshop-based testing programs.",
      "Vehicle inspections to check component wear, leaks, and overall system integrity.",
      "Reporting and documented brake test results with visual inspection findings.",
    ],
    deliverables: [
      "Brake test result reports with key deceleration and stopping metrics.",
      "Visual inspection checklists highlighting wear, leaks, and defects.",
      "Practical recommendations for maintenance and corrective action.",
      "Records suitable for internal safety and compliance tracking.",
    ],
    reasonsTitle: "Why Our Approach Is More Effective",
    reasons: [
      "We identify future failures, not just current ones.",
      "Our qualified artisans bring many years of field experience.",
      "We detect imbalances and mechanical issues often missed by standard testing.",
      "We provide actionable insights, not just test results.",
      "Our inspections reduce downtime, repair costs, and safety incidents.",
      "Mines gain confidence that vehicles entering production are safe, stable, and compliant.",
      "Price competitive service for recurring testing programs.",
    ],
    imageSrc: "/images/Dumptruck.png",
    ctaLabel: "Book a Brake Test",
  },
  {
    slug: "/core-business-2",
    navLabel: "Autostop Brake Meter",
    title: "AutoStop Heavy Brake Meter",
    metaDescription:
      "Supply, certified training, and yearly calibration support for the AutoStop Heavy Brake Meter.",
    intro:
      "We supply the AutoStop Heavy Brake Meter, provide certified training for operators, and perform yearly calibrations for continued reliability.",
    whatWeDo: [
      "Supply of the AutoStop Heavy Brake Meter for heavy-duty brake testing.",
      "Certified user training for safe and accurate operation.",
      "Yearly calibration services to maintain measurement confidence.",
    ],
    deliverables: [
      "Commissioning support and setup guidance.",
      "Training completion support for operational teams.",
      "Scheduled yearly calibration services.",
      "After-sale support on accessories, consumables, and spares.",
    ],
    reasonsTitle: "Why Choose The AutoStop Heavy Brake Meter?",
    reasons: [
      "Rugged, reliable, and user-friendly design.",
      "Used in open cast and underground mines across South Africa.",
      "Supports compliance with SANS 1589 accuracy expectations.",
      "Low-cost spare parts, accessories, and consumables.",
      "Comprehensive after-sale technical support.",
    ],
    imageSrc: "/images/autostop-brake-meter.png",
    contactHref: buildMailtoForService("AutoStop Heavy Brake Meter"),
    extraSection: {
      title: "Features",
      content: [
        "Built-in printer outputs key results such as average deceleration, max deceleration, stopping distance, test speed, and pedal force.",
        "Included software allows you to download, view, and save an unlimited number of brake tests.",
        "Brake tests can be printed as clean A4 reports, including test values and graph output.",
        "Scroll down on this page after content is finalized to include the A4 report sample image.",
      ],
      link: { href: "https://youtu.be/LmxNLtHVx2A?si=ToSe1MY4OIwd1bqN", label: "Watch AutoStop Demo on YouTube" },
    },
  },
  {
    slug: "/core-business-3",
    navLabel: "Brakes, Clutches, Truck and Trailer Component Supply",
    title: "Brakes, Clutches, Truck & Trailer Components",
    metaDescription:
      "Supply of brake and clutch components plus truck and trailer parts with prompt delivery in the Kuruman region.",
    intro:
      "We provide prompt delivery of brake, clutch, truck, and trailer parts within Kuruman and surrounding areas including Kathu, Postmasburg, Danielskuil, Olifantshoek, Hotazel, and Blackrock. We are not limited to these towns and can support wider areas on request.",
    whatWeDo: [
      "Brake and clutch component sourcing and supply.",
      "Relining, riveting, and bonding support services.",
      "Prompt local delivery for workshop and fleet requirements.",
      "Technical guidance on selecting fit-for-purpose parts.",
    ],
    deliverables: [
      "Brake linings and disc brake pads.",
      "Clutches, transmissions, brake drums, and brake discs.",
      "Brake shoes and linings for heavy vehicles, slack adjusters, and brake chambers.",
      "Wheel cylinders, air valves, compressors, ABS/EBS components, air tanks, hoses, and specialist consumables.",
    ],
    reasonsTitle: "Supply Focus Areas",
    reasons: [
      "Reliable turnaround and delivery response in the regional service area.",
      "Range coverage for both light and heavy-duty applications.",
      "Support for recurring fleet maintenance demand.",
      "Trusted part-sourcing network for essential brake and trailer components.",
    ],
    imageSrc: "/images/Side Tipper Truck.png",
    backdropImageSrc: "/images/Part backdrop.png",
    backdropImageWidth: 4162,
    backdropImageHeight: 2306,
    contactHref: buildMailtoForService("Brakes, Clutches, Truck & Trailer Components"),
    extraSection: {
      title: "Product Display Gallery",
      content: [
        "These images are for web display purposes to show examples of what we offer.",
        "Contact us for stock availability, alternatives, and bulk supply support.",
      ],
      galleryImages: [
        { src: "/images/Parts 1.png", alt: "Brake component examples from the workshop - photo 1" },
        { src: "/images/Parts 2.png", alt: "Brake component examples from the workshop - photo 2" },
      ],
    },
  },
  {
    slug: "/core-business-4",
    navLabel: "Repairs and Maintenance",
    title: "Brake Repairs and Maintenance",
    metaDescription:
      "Fitment centre services, precision machining support, and full brake repair and maintenance procedures.",
    intro:
      "We operate as a fitment centre with professional brake and clutch installation, a fully equipped machine shop, and retail access to brake and clutch components.",
    whatWeDo: [
      "Professional fitment of brake and clutch components.",
      "Precision machining tasks required for brake repair and maintenance.",
      "Retail supply of brake and clutch related parts and components.",
      "End-to-end brake repair support for heavy-duty and fleet vehicles.",
    ],
    deliverables: [
      "Vehicle inspections to determine brake component wear and failure risk.",
      "Brake disc and drum measurement against minimum safe specifications.",
      "Brake disc and drum skimming to restore operating surfaces.",
      "Relining of brake pads and shoes for reliable braking performance.",
    ],
    reasonsTitle: "Maintenance Outcomes",
    reasons: [
      "Prompt issue resolution to keep vehicles safe and productive.",
      "Accurate diagnosis based on real component condition.",
      "Practical solutions that balance safety, compliance, and cost.",
      "Integrated machining and fitment capabilities in one service flow.",
    ],
    imageSrc: "/images/brake-repairs-photo.jpg",
    contactHref: buildMailtoForService("Brake Repairs and Maintenance"),
  },
];

export function getServiceBySlug(slug: ServicePageContent["slug"]) {
  return servicePages.find((service) => service.slug === slug);
}

export function getServiceBySlugOrThrow(slug: ServicePageContent["slug"]) {
  const service = getServiceBySlug(slug);
  if (!service) {
    throw new Error(`Service configuration missing for ${slug}`);
  }
  return service;
}
