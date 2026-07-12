import Link from "next/link";
import { locations } from "../locations/location-data";

export type ProductPageConfig = {
  kind: "alarms" | "cctv";
  eyebrow: string;
  title: string;
  intro: string;
  quoteHref: string;
  postcodeLine: string;
  heroTiles: { label: string; value: string; featured?: boolean }[];
  overviewEyebrow: string;
  overviewTitle: string;
  overviewCopy: string[];
  packages: {
    eyebrow: string;
    name: string;
    price: string;
    description: string;
    bullets: string[];
    featured?: boolean;
  }[];
  process: { title: string; copy: string }[];
  upgrades: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
  finalTitle: string;
};

export default function ProductPage({ config }: { config: ProductPageConfig }) {
  return (
    <main className={`product-page product-${config.kind}`}>
      <header className="product-header">
        <Link className="brand" href="/" aria-label="CURRENT home">CURR<span>E</span>NT</Link>
        <nav aria-label="Product page navigation">
          <Link className={config.kind === "alarms" ? "active" : ""} href="/alarms">Alarms</Link>
          <Link className={config.kind === "cctv" ? "active" : ""} href="/cctv">CCTV</Link>
          <Link href="/#areas">Areas</Link>
          <Link className="button button-primary" href={config.quoteHref}>Get my fixed-price quote</Link>
        </nav>
      </header>

      <section className="product-hero">
        <div className="product-hero-image" aria-hidden="true" />
        <div className="product-hero-content">
          <p className="eyebrow">{config.eyebrow}</p>
          <h1>{config.title}</h1>
          <p>{config.intro}</p>
          <div className="product-actions">
            <Link className="button button-primary" href={config.quoteHref}>Get my fixed-price quote <span>↗</span></Link>
            <span>{config.postcodeLine}</span>
          </div>
          <div className="product-hero-tiles">
            {config.heroTiles.map((tile) => (
              <div className={tile.featured ? "featured" : ""} key={tile.label}>
                <small>{tile.label}</small><strong>{tile.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-proof-strip" aria-label="Service benefits">
        <span>Transparent pricing</span><span>Premium equipment</span><span>Clean installation</span><span>Clear handover</span>
      </section>

      <section className="product-overview section">
        <div><p className="eyebrow">{config.overviewEyebrow}</p><h2>{config.overviewTitle}</h2></div>
        <div className="product-overview-copy">{config.overviewCopy.map((copy) => <p key={copy}>{copy}</p>)}</div>
      </section>

      <section className="product-packages section">
        <div className="section-heading">
          <div><p className="eyebrow">Clear starting points</p><h2>Choose the right level for your home.</h2></div>
          <p>No vague pricing and no hidden package names. We confirm your property layout, exact equipment and any optional additions before installation.</p>
        </div>
        <div className={`product-package-grid product-package-grid-${config.packages.length}`}>
          {config.packages.map((item) => (
            <article className={item.featured ? "featured" : ""} key={item.name}>
              {item.featured && <b>Recommended</b>}
              <p className="product-card-eyebrow">{item.eyebrow}</p>
              <h3>{item.name}</h3>
              <strong>{item.price}</strong>
              <p>{item.description}</p>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <Link href={config.quoteHref}>Request this option <span>↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="product-process section">
        <div><p className="eyebrow">Designed before it is installed</p><h2>A system that fits the property.</h2></div>
        <div className="product-step-list">
          {config.process.map((step, index) => (
            <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></article>
          ))}
        </div>
      </section>

      <section className="product-upgrades section">
        <div className="section-heading">
          <div><p className="eyebrow">Useful additions</p><h2>Extend the system where it matters.</h2></div>
          <p>Optional upgrades are recommended only when they solve a real coverage, access or storage requirement.</p>
        </div>
        <div className="product-upgrade-grid">
          {config.upgrades.map((upgrade, index) => (
            <article key={upgrade.title}><span>0{index + 1}</span><h3>{upgrade.title}</h3><p>{upgrade.copy}</p></article>
          ))}
        </div>
      </section>

      <section className="product-price-principle section">
        <div className="product-blueprint" aria-hidden="true">
          <span>SCOPE / PROPERTY / COVERAGE</span>
          <i className="line-one" /><i className="line-two" /><i className="line-three" />
          <b>01</b><b>02</b><b>03</b>
        </div>
        <div>
          <p className="eyebrow">Transparent from the start</p>
          <h2>The price is part of the decision—not a surprise at the end.</h2>
          <p>The advertised packages give you a real starting point. Before work begins, we confirm what your property requires and clearly price any extras you choose.</p>
          <Link className="text-link" href={config.quoteHref}>Request my quote <span>↗</span></Link>
        </div>
      </section>

      <section className="product-areas section">
        <div><p className="eyebrow">South London coverage</p><h2>Local pages for your area.</h2><p>See the property considerations and coverage approach for your neighbourhood.</p></div>
        <div className="product-area-links">
          {locations.map((location) => <Link href={`/locations/${location.slug}`} key={location.slug}><small>{location.postcodes}</small><strong>{location.name}</strong><i>↗</i></Link>)}
        </div>
      </section>

      <section className="product-faq section">
        <div><p className="eyebrow">Before you decide</p><h2>Product questions, answered.</h2></div>
        <div>
          {config.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="product-final-cta">
        <p className="eyebrow">Protect your home properly</p>
        <h2>{config.finalTitle}</h2>
        <p>Tell us about your property and we’ll confirm the right starting package.</p>
        <Link className="button button-primary" href={config.quoteHref}>Get my fixed-price quote <span>↗</span></Link>
      </section>

      <footer className="product-footer">
        <Link className="brand" href="/">CURR<span>E</span>NT</Link>
        <p>Premium alarm and CCTV installation across South London.</p>
        <div><Link href="/alarms">Alarms</Link><Link href="/cctv">CCTV</Link><Link href="/#areas">Locations</Link></div>
        <small>© {new Date().getFullYear()} CURRENT Home Security.</small>
      </footer>
    </main>
  );
}
