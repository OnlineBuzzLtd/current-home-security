import Link from "next/link";
import BrandLogo from "../components/brand-logo";

export const metadata = {
  title: "Autumn Home Security Offer South London | CURRENT",
  description: "Compare Pyronix alarm, Hikvision CCTV and combined home-security packages with a free home-security assessment and fixed-price quote.",
  alternates: { canonical: "/autumn-offer" },
};

const offers = [
  { label: "Alarm", title: "Pyronix Enforcer V11", price: "From £1,555 installed", copy: "A complete wireless alarm, professionally fitted, configured, tested and explained." },
  { label: "CCTV", title: "Hikvision AcuSense", price: "From £2,550 installed", copy: "Planned camera views, reliable recording and a clean installation around your home." },
  { label: "Combined protection", title: "Alarm and CCTV", price: "From £3,400 installed", copy: "One coordinated installation. Save £705 against the two starting packages." },
];

export default function AutumnOfferPage() {
  return (
    <main className="autumn-page">
      <header className="product-header"><BrandLogo priority /><nav><Link href="/alarms">Alarms</Link><Link href="/cctv">CCTV</Link><Link href="/#areas">Areas</Link><Link className="button button-primary" href="/?quote=alarm">Get my quote</Link></nav></header>
      <section className="autumn-hero">
        <div><p className="eyebrow">Autumn home protection</p><h1>Secure before the clocks change.</h1><p>Choose an alarm, CCTV or complete protection package. Start with a free home-security assessment and receive a clear, fixed-price quote before any work begins.</p><div className="hero-actions"><Link className="button button-primary" href="/?quote=alarm">Book my free assessment</Link><a className="button button-call" href="tel:+447476149725">Call 07476 149 725</a></div></div>
        <img src="https://static.wixstatic.com/media/619595_b90467c00e174d91b243f80a42680493~mv2.jpeg/v1/fill/w_1500,h_1500,al_c,q_90,enc_avif,quality_auto/619595_b90467c00e174d91b243f80a42680493~mv2.jpeg" alt="Pyronix Enforcer V11 alarm kit" width="1500" height="1500" />
      </section>
      <section className="section autumn-offers"><div className="section-heading"><div><p className="eyebrow">Three clear routes</p><h2>Choose the protection your home needs.</h2></div><p>Every installed option includes planning, tidy fitting, setup, testing and a clear handover.</p></div><div className="autumn-offer-grid">{offers.map((offer) => <article key={offer.label}><span>{offer.label}</span><h3>{offer.title}</h3><strong>{offer.price}</strong><p>{offer.copy}</p><Link href={`/?quote=${offer.label === "CCTV" ? "cctv" : "alarm"}`}>Request this option ↗</Link></article>)}</div></section>
      <section className="section installed-section"><div><p className="eyebrow">What gets installed</p><h2>Real equipment, agreed before fitting.</h2><p>The alarm package uses the Pyronix Enforcer V11 platform with wireless detection, door contacts, an external Deltabell and app access. CCTV packages use Hikvision equipment selected around the views and recording time your property needs.</p></div><div className="installed-list"><p><b>01</b> Enforcer V11 control panel with built-in Wi-Fi</p><p><b>02</b> Pet-immune PIR detectors and nano door contacts</p><p><b>03</b> Wireless Deltabell external sounder</p><p><b>04</b> Hikvision AcuSense camera, NVR and monitor</p><p><b>05</b> Setup, testing and customer handover</p></div></section>
      <section className="section comparison-section"><p className="eyebrow">Compare the options</p><h2>Supply only or professionally installed.</h2><div className="comparison-table"><div><b>Supply-only alarm kit</b><strong>£835</strong><span>Equipment supplied for your own installation</span></div><div><b>Installed alarm</b><strong>£1,555</strong><span>Planning, installation, setup and handover included</span></div><div><b>Complete bundle</b><strong>£3,400</strong><span>Installed alarm and CCTV, saving £705</span></div></div></section>
      <section className="product-final-cta"><p className="eyebrow">Free home-security assessment</p><h2>Know what gets installed and what it costs.</h2><p>Tell us about your property and we will confirm the right starting package.</p><Link className="button button-primary" href="/?quote=alarm">Get my fixed-price quote</Link></section>
    </main>
  );
}
