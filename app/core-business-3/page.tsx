import { CoreBusinessPage } from "@/components/CoreBusinessPage";
import { buildPageMetadata } from "@/lib/seo";
import { getServiceBySlugOrThrow } from "@/lib/services";

const service = getServiceBySlugOrThrow("/core-business-3");


export const metadata = buildPageMetadata({
  title: `${service.title} | KUDUMANE ENGINEERING BRAKES & SUPPLIES`,
  description: service.metaDescription,
  path: "/core-business-3",
});

export default function CoreBusinessThreePage() {
  return <CoreBusinessPage service={service} />;
}
