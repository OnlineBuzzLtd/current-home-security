import type { Metadata } from "next";
import ProductPage, { type ProductPageConfig } from "../products/product-page";

export const metadata: Metadata = {
  title: "Pyronix Alarm Installation South London | From £985",
  description: "Professionally installed Pyronix Enforcer V11 alarms: Essential £985, Plus £1,300 and Premium £1,700. First year of app access included.",
  alternates: { canonical: "/alarms" },
};

const config: ProductPageConfig = {
  kind: "alarms",
  eyebrow: "Pyronix Enforcer V11 · South London",
  title: "A home alarm installed around your life.",
  intro: "Choose Essential, Plus or Premium wireless alarm installation, with clear equipment lists, setup, testing and handover.",
  quoteHref: "/?quote=alarm",
  postcodeLine: "Free home-security assessment",
  heroTiles: [
    { label: "Essential installed", value: "£985" },
    { label: "Plus installed", value: "£1,300", featured: true },
    { label: "Premium installed", value: "£1,700" },
  ],
  overviewEyebrow: "Alarm protection without the guesswork",
  overviewTitle: "Coverage that reflects how your home is actually used.",
  overviewCopy: [
    "An effective alarm is more than a box on the wall. It needs sensible detection across entrances, accessible rooms and the routes someone could actually use.",
    "We plan the system around your property, agree visible equipment before fitting and leave every household member comfortable using it.",
    "The Pyronix Enforcer V11 platform gives us a strong, expandable foundation for family homes and more complex layouts.",
  ],
  packages: [
    { eyebrow: "Essential · installed", name: "Essential", price: "£985", description: "Protect the main ways into your home.", bullets: ["Enforcer V11 wireless panel with Wi-Fi", "2 pet-immune wireless PIR detectors, 10m range", "1 nano door contact", "2 two-way wireless keyfobs", "Installation, setup, testing and handover", "1 year of optional app access included"] },
    { eyebrow: "Plus · most popular", name: "Plus", price: "£1,300", description: "Front, back and the areas you worry about, covered.", bullets: ["Enforcer V11 wireless panel with onboard Wi-Fi", "4 pet-immune wireless PIR detectors, 10m range", "2 nano door contacts", "Wireless external Deltabell", "Installation, setup, testing and handover", "1 year of optional app access included"], featured: true },
    { eyebrow: "Premium · installed", name: "Premium", price: "£1,700", description: "More door protection and tablet control.", bullets: ["Enforcer V11 panel with integrated DIGI-WIFI communicator", "Compatible Android tablet for HomeControlHUB", "4 pet-immune wireless PIR detectors, 10m range", "3 nano door contacts", "Wireless external Deltabell", "Installation, setup, testing and handover", "1 year of optional app access included"] },
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
    { question: "Is installation included?", answer: "Professional installation is included in all three packages: Essential £985, Plus £1,300 and Premium £1,700. A £150 deposit is payable, with the balance on completion of setup." },
  ],
  finalTitle: "Choose the alarm. Confirm the scope. Protect the home.",
};

export default function AlarmsPage() {
  return <><ProductPage config={config} /><section className="section"><p className="eyebrow">Before you book</p><h2>Alarm installation questions, answered.</h2><p>Compare costs, plan sensor coverage and understand app fees, installation disruption and replacing an old alarm.</p><p><a className="button button-primary" href="/alarm-guides">Read our six alarm installation guides</a></p><p>Standard cover: 12-month workmanship warranty, 2-year manufacturer warranty on the system and 3 years on wireless sensors. Call-out fees apply for faulty equipment under standard terms. Optional app access is £36 a year after the included first year. <a href="/autumn-offer">View package terms and add-on prices.</a></p></section></>;
}
