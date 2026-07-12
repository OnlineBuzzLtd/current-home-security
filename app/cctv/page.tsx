import type { Metadata } from "next";
import ProductPage, { type ProductPageConfig } from "../products/product-page";

export const metadata: Metadata = {
  title: "Hikvision CCTV Installation South London | From £2,100",
  description: "Professional Hikvision CCTV installation across South London from £2,100, with planned camera views, recording setup and clear upgrade options.",
  alternates: { canonical: "/cctv" },
};

const config: ProductPageConfig = {
  kind: "cctv",
  eyebrow: "Hikvision CCTV · South London",
  title: "See what matters. Record what happens.",
  intro: "Professionally planned CCTV with useful camera views, dependable storage and a clean finish around your property. Starting from £2,100.",
  quoteHref: "/?quote=cctv",
  postcodeLine: "Installations from £2,100",
  heroTiles: [
    { label: "CCTV installation", value: "From £2,100" },
    { label: "Alarm + CCTV", value: "£3,050", featured: true },
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
    { eyebrow: "Hikvision system", name: "CCTV installation", price: "From £2,100", description: "A professionally planned starting system for the principal views around your home.", bullets: ["Property coverage review", "Camera-position planning", "Professional installation", "Recording setup and handover"], featured: true },
    { eyebrow: "Complete protection", name: "Alarm + CCTV", price: "£3,050", description: "Combine CCTV with our mid-tier Pyronix alarm in one joined-up package.", bullets: ["Hikvision CCTV starting system", "Complete Pyronix alarm tier", "One coordinated installation", "Full system handover"] },
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
    { question: "How much does CCTV installation cost?", answer: "Our starting installation price is £2,100. The final scope depends on camera quantity, cable routes, image specification, storage and any optional additions, all agreed before work begins." },
    { question: "How do I know how many cameras I need?", answer: "We begin with the views you need rather than an arbitrary camera count. The right number follows from the property layout, access routes and areas you want recorded." },
    { question: "Can CCTV be combined with an alarm?", answer: "Yes. Our £3,050 bundle combines a CCTV starting system with the mid-tier Pyronix alarm package." },
  ],
  finalTitle: "Plan the views. Confirm the price. Protect the property.",
};

export default function CctvPage() {
  return <ProductPage config={config} />;
}
