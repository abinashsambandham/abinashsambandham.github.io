import { site } from "@/data/content";

// Loads GoatCounter only when a site code is configured in data/content.ts. No cookies, no personal data.
export default function Analytics() {
  if (!site.goatcounter) return null;
  return (
    <script
      async
      data-goatcounter={`https://${site.goatcounter}.goatcounter.com/count`}
      src="https://gc.zgo.at/count.js"
    />
  );
}
