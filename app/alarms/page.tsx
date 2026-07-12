import type { Metadata } from "next";
import ProductPage, { type ProductPageConfig } from "../products/product-page";

export const metadata: Metadata = {
  title: "Pyronix Alarm Installation South London | From £1,000",
  description: "Professional Pyronix Enforcer V11 alarm installation across South London. Three clear packages at £1,000, £1,400 and £1,750.",
  alternates: { canonical: "/alarms" },
};

const config: ProductPageConfig = {
  kind: "alarms",
  eyebrow: "Pyronix Enforcer V11 · South London",
  title: "A home alarm installed around your life.",
  intro: "Professional Pyronix alarm systems with discreet detectors, clean installation and three transparent price points. Easy to understand. Hard to ignore.",
  quoteHref: "/?quote=alarm",
  postcodeLine: "Packages from £1,000",
  heroTiles: [
    { label: "Essential", value: "£1,000" },
    { label: "Complete", value: "£1,400", featured: true },
    { label: "Enhanced", value: "£1,750" },
  ],
  overviewEyebrow: "Alarm protection without the guesswork",
  overviewTitle: "Coverage that reflects how your home is actually used.",
  overviewCopy: [
    "An effective alarm is more than a box on the wall. It needs sensible detection across entrances, accessible rooms and the routes someone could actually use.",
    "We plan the system around your property, agree visible equipment before fitting and leave every household member comfortable using it.",
    "The Pyronix Enforcer V11 platform gives us a strong, expandable foundation for family homes and more complex layouts.",
  ],
  packages: [
    { eyebrow: "Focused protection", name: "Essential", price: "£1,000", description: "A straightforward starting point for smaller homes and simpler layouts.", bullets: ["Pyronix Enforcer V11 platform", "Professional installation", "System setup and testing", "Clear homeowner handover"] },
    { eyebrow: "Family-home coverage", name: "Complete", price: "£1,400", description: "Our most popular tier for homes with more access points and living zones.", bullets: ["Expanded detector coverage", "Entry routes planned carefully", "Professional installation", "System setup and handover"], featured: true },
    { eyebrow: "Larger properties", name: "Enhanced", price: "£1,750", description: "A broader starting point for larger homes, outbuildings or complex access.", bullets: ["Wider property coverage", "Additional zones considered", "Professional installation", "System setup and handover"] },
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
    { question: "Is installation included?", answer: "Each advertised package includes standard professional installation, setup, testing and handover. Non-standard requirements and optional additions are agreed before work begins." },
  ],
  finalTitle: "Choose the alarm. Confirm the scope. Protect the home.",
};

export default function AlarmsPage() {
  return <ProductPage config={config} />;
}
