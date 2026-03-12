import { CoreBusinessPage } from "@/components/CoreBusinessPage";
import { buildPageMetadata } from "@/lib/seo";
import { getServiceBySlugOrThrow } from "@/lib/services";

const service = getServiceBySlugOrThrow("/core-business-4");


export const metadata = buildPageMetadata({
  title: `${service.title} | KUDUMANE ENGINEERING BRAKES & SUPPLIES`,
  description: service.metaDescription,
  path: "/core-business-4",
});

export default function CoreBusinessFourPage() {
  return <CoreBusinessPage service={service} />;
}
