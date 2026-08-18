import type { Metadata } from "next";
import ProductPage, { type ProductPageConfig } from "../products/product-page";

export const metadata: Metadata = {
  title: "Pyronix Alarm Kits & Installation South London | From £835",
  description: "Pyronix Enforcer V11 alarm kits from £835, with professional supply-and-install packages at £1,555 and £2,950. 10% off all packages this August.",
  alternates: { canonical: "/alarms" },
};

const config: ProductPageConfig = {
  kind: "alarms",
  eyebrow: "Pyronix Enforcer V11 · South London",
  title: "A home alarm installed around your life.",
  intro: "Choose a supply-only Pyronix alarm kit or professional installation, with three transparent packages and 10% off throughout August.",
  quoteHref: "/?quote=alarm",
  postcodeLine: "August prices from £751.50",
  heroTiles: [
    { label: "Kit only · August", value: "£751.50" },
    { label: "Installed · August", value: "£1,399.50", featured: true },
    { label: "Top tier · August", value: "£2,655" },
  ],
  overviewEyebrow: "Alarm protection without the guesswork",
  overviewTitle: "Coverage that reflects how your home is actually used.",
  overviewCopy: [
    "An effective alarm is more than a box on the wall. It needs sensible detection across entrances, accessible rooms and the routes someone could actually use.",
    "We plan the system around your property, agree visible equipment before fitting and leave every household member comfortable using it.",
    "The Pyronix Enforcer V11 platform gives us a strong, expandable foundation for family homes and more complex layouts.",
  ],
  packages: [
    { eyebrow: "Supply kit only", name: "Wireless Enforcer Kit", price: "£751.50", description: "August price. Usually £835. Supplied for your own installation.", bullets: ["ProControl+ app access", "Enforcer V11 panel with built-in Wi-Fi", "Wireless arming station", "4 pet-immune wireless PIR detectors", "2 nano door contacts", "Wireless Deltabell module and cover"] },
    { eyebrow: "Standard supply & install", name: "Professionally Installed", price: "£1,399.50", description: "August price. Usually £1,555. Our complete kit with premium installation.", bullets: ["Everything in the supply-only kit", "Premium professional installation", "10+ year experienced installer", "System setup, testing and handover"], featured: true },
    { eyebrow: "Top tier supply & install", name: "Expanded Protection", price: "£2,655", description: "August price. Usually £2,950. More detection and control for larger homes.", bullets: ["Everything in the standard installed package", "Additional tablet arming screen", "2 additional pet-immune PIR detectors", "1 additional nano door contact", "1 additional keypad", "4 shock sensors"] },
  ],
  process: [
    { title: "Map the access points", copy: "We review doors, accessible windows, side access and the way people move through the property." },
    { title: "Choose sensible detection", copy: "Detectors and controls are placed for dependable coverage without making everyday life awkward." },
    { title: "Install, test and explain", copy: "The system is fitted cleanly, tested across every zone and handed over in plain English." },
  ],
  upgrades: [
    { title: "Additional detectors", copy: "Extend protection into more rooms, access routes or selected outbuildings." },
    { title: "Shock / vibration sensors", copy: "Add earlier detection at suitable doors, windows or vulnerable points." },
    { title: "Secondary keypads", copy: "Control the alarm conveniently from another practical location in the home." },
    { title: "Video doorbell", copy: "Add clear awareness at the front door as part of the wider security plan." },
  ],
  faqs: [
    { question: "Which alarm system do you install?", answer: "Our alarm packages are based on the Pyronix Enforcer V11 platform, configured around the layout and coverage requirements of your home." },
    { question: "Which package is right for me?", answer: "The three tiers provide realistic starting points. We recommend the most suitable level after reviewing the property size, entrances and areas you want protected." },
    { question: "Can the system be expanded later?", answer: "Additional detectors, shock sensors, keypads and other suitable components can be discussed at installation or as your requirements change." },
    { question: "Is installation included?", answer: "Installation is not included in the £835 supply-only kit. It is included in the £1,555 standard and £2,950 top-tier packages, with 10% off all three throughout August." },
  ],
  finalTitle: "Choose the alarm. Confirm the scope. Protect the home.",
};

export default function AlarmsPage() {
  return <ProductPage config={config} />;
}
