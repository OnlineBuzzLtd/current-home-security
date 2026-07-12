import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocation, locations } from "../location-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: `Home Security Installation in ${location.name} | CURRENT`,
    description: `${location.intro} Pyronix alarms from £1,000, Hikvision CCTV from £2,100 and a complete bundle for £3,050.`,
    alternates: { canonical: `/locations/${location.slug}` },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const otherLocations = locations.filter((item) => item.slug !== location.slug);

  return (
    <main className="location-page">
      <header className="location-header">
        <Link className="brand" href="/" aria-label="CURRENT home">CURR<span>E</span>NT</Link>
        <nav aria-label="Location page navigation">
          <Link href="/alarms">Alarms</Link>
          <Link href="/cctv">CCTV</Link>
          <Link href="/#areas">All areas</Link>
          <Link className="button button-primary" href="/#packages">Get my fixed-price quote</Link>
        </nav>
      </header>

      <section className="location-hero">
        <div className="location-image" aria-hidden="true" />
        <div className="location-hero-content">
          <p className="eyebrow">Home security · {location.region}</p>
          <h1>Alarm & CCTV installation in {location.name}.</h1>
          <p>{location.intro}</p>
          <div className="location-actions">
            <Link className="button button-primary" href="/#packages">Get my fixed-price quote <span>↗</span></Link>
            <span>Serving {location.postcodes}</span>
          </div>
          <div className="location-price-rail">
            <div><small>Pyronix alarms</small><strong>From £1,000</strong></div>
            <div><small>Hikvision CCTV</small><strong>From £2,100</strong></div>
            <div className="highlight"><small>Alarm + CCTV</small><strong>£3,050</strong></div>
          </div>
        </div>
      </section>

      <section className="location-intro section">
        <div>
          <p className="eyebrow">Designed for {location.name} homes</p>
          <h2>Local context changes the right security plan.</h2>
        </div>
        <div className="location-copy-stack">
          <p>{location.propertyContext}</p>
          <p>{location.securityFocus}</p>
          <p>{location.installationNote}</p>
        </div>
      </section>

      <section className="location-services section">
        <div className="section-heading">
          <div><p className="eyebrow">Clear choices</p><h2>Choose your level of protection.</h2></div>
          <p>Every system is professionally installed, tested and explained. We confirm the final scope before booking the work.</p>
        </div>
        <div className="location-service-grid">
          <article><span>01</span><p>Pyronix Enforcer V11</p><h3>Alarm systems</h3><strong>£1,000 / £1,400 / £1,750</strong><p>Three transparent tiers for different property sizes and coverage needs.</p><Link href="/alarms">Compare alarms ↗</Link></article>
          <article><span>02</span><p>Hikvision</p><h3>CCTV installation</h3><strong>From £2,100</strong><p>Carefully positioned cameras, dependable storage and a clean finish.</p><Link href="/cctv">Explore CCTV ↗</Link></article>
          <article className="featured"><span>03</span><p>Complete protection</p><h3>Alarm + CCTV</h3><strong>£3,050</strong><p>Our mid-tier alarm and CCTV installation combined in one package.</p><Link href="/#packages">Choose the bundle ↗</Link></article>
        </div>
      </section>

      <section className="location-process section">
        <div><p className="eyebrow">A clean installation</p><h2>From property review to protected home.</h2></div>
        <div className="location-steps">
          <article><span>01</span><h3>Tell us about your home</h3><p>Share your {location.name} postcode, property type and the areas you want covered.</p></article>
          <article><span>02</span><h3>Agree the exact scope</h3><p>We confirm equipment, positioning, optional upgrades and the total price.</p></article>
          <article><span>03</span><h3>Install and hand over</h3><p>Your system is fitted tidily, tested thoroughly and explained in plain English.</p></article>
        </div>
      </section>

      <section className="location-detail section">
        <div className="location-blueprint">
          <div><span>{location.name.toUpperCase()} COVERAGE</span><span>{location.postcodes}</span></div>
          <i className="local-ring ring-one" /><i className="local-ring ring-two" /><i className="local-ring ring-three" />
          <strong>ENTRY</strong><strong>SIDE ACCESS</strong><strong>REAR BOUNDARY</strong>
        </div>
        <div>
          <p className="eyebrow">Coverage, not clutter</p>
          <h2>Every device earns its place.</h2>
          <p>We start with access routes, visibility and the way your household uses the property. That means fewer blind spots, sensible alerts and equipment that feels part of the home.</p>
          <ul><li>Clean, discreet equipment placement</li><li>Camera views planned around privacy</li><li>Storage and image quality sized correctly</li><li>Optional detectors, doorbells and keypads</li></ul>
        </div>
      </section>

      <section className="nearby-section section">
        <div><p className="eyebrow">Local coverage</p><h2>{location.name} and nearby.</h2><p>We also regularly cover homes around {location.nearby.join(", ")}.</p></div>
        <div className="other-location-links">
          {otherLocations.map((item) => <Link href={`/locations/${item.slug}`} key={item.slug}><span>{item.region}</span><strong>{item.name}</strong><i>↗</i></Link>)}
        </div>
      </section>

      <section className="location-final-cta">
        <p className="eyebrow">Home security in {location.name}</p>
        <h2>Know what it costs.<br />Know what it protects.</h2>
        <p>Tell us about your property and we’ll confirm the right starting package.</p>
        <Link className="button button-primary" href="/#packages">Get my fixed-price quote <span>↗</span></Link>
      </section>

      <footer className="location-footer">
        <Link className="brand" href="/">CURR<span>E</span>NT</Link>
        <p>Premium alarm and CCTV installation in {location.name} and across South London.</p>
        <div><Link href="/">Home</Link><Link href="/#packages">Packages</Link><Link href="/#areas">All locations</Link></div>
        <small>© {new Date().getFullYear()} CURRENT Home Security.</small>
      </footer>
    </main>
  );
}
