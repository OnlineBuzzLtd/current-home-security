import type { Metadata } from "next";
import ProductPage, { type ProductPageConfig } from "../products/product-page";

export const metadata: Metadata = {
  title: "Hikvision CCTV Installation South London | From £2,550",
  description: "Professional Hikvision CCTV installation across South London from £2,550, including monitor, NVR and 4MP AcuSense camera. 10% off this August.",
  alternates: { canonical: "/cctv" },
};

const config: ProductPageConfig = {
  kind: "cctv",
  eyebrow: "Hikvision CCTV · South London",
  title: "See what matters. Record what happens.",
  intro: "Professionally planned Hikvision CCTV with a 27-inch monitor, NVR and 4MP AcuSense camera. Starting from £2,550, with 10% off this August.",
  quoteHref: "/?quote=cctv",
  postcodeLine: "August installations from £2,295",
  heroTiles: [
    { label: "CCTV · August", value: "From £2,295" },
    { label: "Bundle · August", value: "From £3,060", featured: true },
    { label: "System", value: "Hikvision" },
  ],
  overviewEyebrow: "Useful footage starts with good planning",
  overviewTitle: "A camera is only valuable when it covers the right view.",
  overviewCopy: [
    "Camera quantity alone does not create good security. Position, angle, lighting and the distance to the subject determine whether your footage is genuinely useful.",
    "We plan the important approaches first—front entrance, driveway, side access, garden or outbuilding—then choose a clean installation route.",
    "Recording capacity and image-quality upgrades are discussed in practical terms so you know what you are paying for and why.",
  ],
  packages: [
    { eyebrow: "Hikvision system", name: "CCTV installation", price: "From £2,295", description: "August price. Usually from £2,550. A professionally planned system for the principal views around your home.", bullets: ["27-inch Hikvision 1080p monitor", "4-channel HiLook by Hikvision NVR with 4-PoE", "4MP 2.8mm AcuSense Hikvision turret IP camera", "Built-in microphone and 30m IR", "Professional installation and handover"], featured: true },
    { eyebrow: "Complete protection", name: "Alarm + CCTV", price: "From £3,060", description: "August price. Usually from £3,400. Combine CCTV with our standard installed Pyronix alarm package.", bullets: ["Hikvision CCTV starting system", "Standard Pyronix supply-and-install package", "One coordinated installation", "Full system handover"] },
  ],
  process: [
    { title: "Choose the important views", copy: "We identify approaches, entrances, driveways and boundaries where recorded visibility adds real value." },
    { title: "Plan image and storage needs", copy: "Camera quality and recording capacity are matched to the distances and retention you require." },
    { title: "Install and verify coverage", copy: "Every view is checked after installation and the recording system is explained clearly." },
  ],
  upgrades: [
    { title: "Higher MP cameras", copy: "Increase image detail where identification distance or a wider view makes it worthwhile." },
    { title: "Larger hard drive", copy: "Extend CCTV recording retention to suit your camera count and preferred history." },
    { title: "Additional cameras", copy: "Add coverage for further boundaries, side access, gardens or outbuildings." },
    { title: "Video doorbell", copy: "Create a dedicated view and interaction point at the home’s main entrance." },
  ],
  faqs: [
    { question: "Which CCTV system do you install?", answer: "Our CCTV installations use Hikvision equipment, selected and positioned around the views, image detail and storage requirements of your property." },
    { question: "How much does CCTV installation cost?", answer: "Our standard starting price is £2,550, reduced to £2,295 during August. The final scope depends on camera quantity, cable routes, image specification, storage and any optional additions." },
    { question: "How do I know how many cameras I need?", answer: "We begin with the views you need rather than an arbitrary camera count. The right number follows from the property layout, access routes and areas you want recorded." },
    { question: "Can CCTV be combined with an alarm?", answer: "Yes. Our bundle starts from £3,400 and combines a CCTV starting system with the standard installed Pyronix alarm package. The August starting price is £3,060." },
  ],
  finalTitle: "Plan the views. Confirm the price. Protect the property.",
};

export default function CctvPage() {
  return <ProductPage config={config} />;
}
