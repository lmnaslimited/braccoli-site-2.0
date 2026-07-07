import type { Metadata } from "next";
import LensCloud from "./lens-cloud";

export const metadata: Metadata = {
  title: "LENS Cloud — Coming Soon",
  description:
    "LENS Cloud is almost here. The next generation of intelligent, cloud-native data infrastructure. Join the waitlist for early access.",
};

export default function LensCloudPage() {
  return <LensCloud />;
}
