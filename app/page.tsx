"use client";

import { FormEvent, useEffect, useState } from "react";
import { locations } from "./locations/location-data";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const alarmPlans = [
  {
    name: "Supply Kit Only",
    price: "£835",
    augustPrice: "£751.50",
    description: "A complete wireless Pyronix Enforcer kit supplied for your own installation.",
    bullets: ["ProControl+ app access", "Enforcer V11 panel with built-in Wi-Fi", "Wireless arming station", "4 pet-immune wireless PIR detectors", "2 nano door contacts", "Wireless Deltabell module and cover"],
  },
  {
    name: "Standard Supply & Install",
    price: "£1,555",
    augustPrice: "£1,399.50",
    description: "The complete wireless kit, professionally fitted and handed over.",
    bullets: ["Everything in the supply-only kit", "Premium professional installation", "Installed by a 10+ year experienced installer", "System setup, testing and handover"],
    featured: true,
  },
  {
    name: "Top Tier Supply & Install",
    price: "£2,950",
    augustPrice: "£2,655",
    description: "Expanded detection and control for larger homes or more complex layouts.",
    bullets: ["Everything in the standard installed package", "Additional tablet arming screen", "2 additional pet-immune wireless PIR detectors", "1 additional nano door contact", "1 additional keypad", "4 shock sensors"],
  },
];

const faqs = [
  {
    q: "Is the price shown the final installation price?",
    a: "The £835 package is supply-only. The £1,555 standard and £2,950 top-tier packages include supply and professional installation. Any non-standard requirements are agreed before work begins.",
  },
  {
    q: "Which systems do you install?",
    a: "Our alarm packages use the Pyronix Enforcer V11 platform. Our CCTV installations use Hikvision equipment, selected to suit your coverage and storage needs.",
  },
  {
    q: "Can I combine an alarm and CCTV?",
    a: "Yes. Our bundle starts from £3,400 and combines the standard installed alarm package with a CCTV installation. It is £3,060 during the August offer.",
  },
  {
    q: "Do you cover my area?",
    a: "We focus on selected South London areas including Wimbledon, Dulwich, Beckenham, Purley, Sanderstead, Warlingham and Richmond. Enter your postcode and we will confirm availability.",
  },
];

const reviews = [
  {
    quote: "Very professional and good customer service!",
    name: "Masi Faizi",
  },
  {
    quote: "Really professional, on time, and left everything tidy. Highly recommend!",
    name: "Samantha Didymus",
  },
  {
    quote: "10/10 service. Clean and tidy, very friendly and helpful throughout.",
    name: "Max Nichols",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Alarm + CCTV bundle — from £3,400");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.body.style.overflow = quoteOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [quoteOpen]);

  useEffect(() => {
    const quote = new URLSearchParams(window.location.search).get("quote");
    if (quote !== "alarm" && quote !== "cctv") return;
    const frame = window.requestAnimationFrame(() => {
      setSelectedPackage(quote === "alarm" ? "Standard supply & install — £1,555" : "Hikvision CCTV — from £2,550");
      setQuoteOpen(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function openQuote(packageName: string) {
    setSelectedPackage(packageName);
    setSubmitted(false);
    setQuoteOpen(true);
    setMenuOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.gtag?.("event", "conversion", {
      send_to: "AW-16871583749/U7iMCMPwgNocEIXg_-w-",
      value: 1.0,
      currency: "GBP",
    });
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CURRENT home">
          CURR<span>E</span>NT
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="/alarms" onClick={() => setMenuOpen(false)}>Alarm systems</a>
          <a href="/cctv" onClick={() => setMenuOpen(false)}>CCTV</a>
          <a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a>
          <a href="#areas" onClick={() => setMenuOpen(false)}>Areas</a>
        </nav>
        <button className="button header-cta" onClick={() => openQuote("Alarm + CCTV bundle — from £3,400")}>Get my fixed-price quote</button>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Home security · South London</p>
            <p className="august-offer">August offer · 10% off all packages</p>
            <h1>Protect what matters. Installed properly.</h1>
            <p className="hero-intro">Professional alarm and CCTV systems with clean, discreet installation and transparent pricing. No surprises. Just complete peace of mind.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => openQuote("Alarm + CCTV bundle — from £3,400")}>Get my fixed-price quote <span>↗</span></button>
              <a className="button button-call" href="tel:+447476149725" aria-label="Call CURRENT on 07476 149 725">
                <span aria-hidden="true">☎</span> Call 07476 149 725
              </a>
            </div>
            <div className="google-rating" aria-label="Rated 5 out of 5 from 40 Google reviews">
              <span aria-hidden="true">★★★★★</span>
              <strong>5.0</strong>
              <small>from 40 Google reviews</small>
            </div>
            <div className="trust-row" aria-label="Service benefits">
              <span>✓ Fixed pricing</span>
              <span>✓ Clean installation</span>
              <span>✓ Fast local response</span>
            </div>
            <p className="hero-areas"><span>●</span> Wimbledon &nbsp;·&nbsp; Dulwich &nbsp;·&nbsp; Richmond &nbsp;+ more</p>
          </div>

          <div className="hero-pricing" aria-label="Package price summary">
            <a href="/alarms" className="price-cell">
              <span>Pyronix alarms</span>
              <small>August price · kit only</small>
              <strong>£751.50</strong>
              <del>£835</del>
            </a>
            <a href="/cctv" className="price-cell">
              <span>Hikvision CCTV</span>
              <small>August price · from</small>
              <strong>£2,295</strong>
              <del>£2,550</del>
            </a>
            <button className="price-cell bundle-cell" onClick={() => openQuote("Alarm + CCTV bundle — from £3,400")}>
              <span>Alarm + CCTV</span>
              <small>August price · from</small>
              <strong>£3,060</strong>
              <del>£3,400</del>
            </button>
          </div>
        </div>
        <a className="scroll-cue" href="#packages" aria-label="Scroll to packages">Scroll to explore <span>↓</span></a>
      </section>

      <section className="confidence-strip">
        <p>Premium equipment</p>
        <p>Respectful installation</p>
        <p>Clear handover</p>
        <p>South London focused</p>
      </section>

      <section className="section reviews-section" aria-labelledby="reviews-title">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">Five-star Google reviews</p>
            <h2 id="reviews-title">Trusted inside the homes we work in.</h2>
          </div>
          <p>Rated 5.0 from 40 Google reviews, with real feedback from CURRENT customers.</p>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <figure className="review-card" key={review.name}>
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section packages-section" id="packages">
        <div className="section-heading">
          <div>
            <p className="eyebrow">August offer · 10% off</p>
            <h2>Choose the protection that fits your home.</h2>
          </div>
          <p>Clear starting points. No vague “contact us for pricing.” We confirm your layout, then agree the scope before installation.</p>
        </div>

        <div className="package-grid" id="alarms">
          {alarmPlans.map((plan) => (
            <article className={plan.featured ? "package-card featured" : "package-card"} key={plan.name}>
              {plan.featured && <span className="popular">Most popular</span>}
              <p className="package-label">Pyronix alarm</p>
              <h3>{plan.name}</h3>
              <p className="package-price"><del>{plan.price}</del><strong>{plan.augustPrice}</strong><small>August price</small></p>
              <p className="package-description">{plan.description}</p>
              <ul>{plan.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <button className="card-link" onClick={() => openQuote(`${plan.name} alarm — ${plan.price}`)}>Request this package <span>↗</span></button>
            </article>
          ))}
        </div>

        <div className="feature-offers">
          <article className="wide-offer cctv-offer" id="cctv">
            <div>
              <p className="eyebrow">Hikvision CCTV</p>
              <h3>See what is happening, day or night.</h3>
              <p>Professionally positioned cameras, reliable recording and a clean finish around your property.</p>
              <ul className="offer-specs"><li>27-inch Hikvision 1080p monitor</li><li>4-channel HiLook by Hikvision NVR with 4-PoE</li><li>4MP Hikvision AcuSense turret IP camera with mic and 30m IR</li></ul>
              <button className="button button-light" onClick={() => openQuote("Hikvision CCTV — from £2,550")}>Discuss my CCTV setup</button>
            </div>
            <div className="offer-price"><small>August price · from</small><strong>£2,295</strong><del>£2,550</del></div>
          </article>

          <article className="wide-offer bundle-offer">
            <div>
              <p className="eyebrow">Complete protection</p>
              <h3>One home. One joined-up security package.</h3>
              <p>Combine our mid-tier Pyronix alarm with a Hikvision CCTV installation.</p>
              <button className="button button-primary" onClick={() => openQuote("Alarm + CCTV bundle — from £3,400")}>Choose the bundle</button>
            </div>
            <div className="offer-price"><small>August price · from</small><strong>£3,060</strong><del>£3,400</del></div>
          </article>
        </div>
        <p className="price-note">Final equipment quantities and any non-standard installation requirements are confirmed after your property review.</p>
      </section>

      <section className="section reassurance-section">
        <div className="reassurance-copy">
          <p className="eyebrow">Security without the sales theatre</p>
          <h2>A considered installation, not a rushed fit-out.</h2>
          <p>Your security system should protect the home without taking it over. We plan coverage carefully, respect your property and leave you confident using every feature.</p>
          <div className="metric"><strong>01</strong><span>Clear scope and price before installation</span></div>
          <div className="metric"><strong>02</strong><span>Discreet equipment placement and tidy cabling</span></div>
          <div className="metric"><strong>03</strong><span>Simple handover so the whole family understands it</span></div>
        </div>
        <div className="blueprint-card" aria-label="Installation approach illustration">
          <div className="blueprint-top"><span>PROPERTY COVERAGE</span><span>01 / 03</span></div>
          <div className="house-plan">
            <span className="room room-one">ENTRY</span>
            <span className="room room-two">LIVING</span>
            <span className="room room-three">GARDEN</span>
            <i className="sensor sensor-one" />
            <i className="sensor sensor-two" />
            <i className="sensor sensor-three" />
          </div>
          <p>Coverage planned around your property—not a generic equipment list.</p>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading compact">
          <div><p className="eyebrow">From quote to protected</p><h2>A simple three-step process.</h2></div>
        </div>
        <div className="process-grid">
          <article><span>01</span><h3>Tell us about your home</h3><p>Share your postcode, preferred package and the areas you want to protect.</p></article>
          <article><span>02</span><h3>Confirm the right setup</h3><p>We review the property and make every cost clear before scheduling the work.</p></article>
          <article><span>03</span><h3>Install and hand over</h3><p>Your system is fitted cleanly, tested fully and explained in plain English.</p></article>
        </div>
      </section>

      <section className="section upgrades-section">
        <div className="section-heading">
          <div><p className="eyebrow">Build around your home</p><h2>Useful upgrades. Only when you need them.</h2></div>
          <p>Extend your system at installation or later. Every addition is discussed and priced before we proceed.</p>
        </div>
        <div className="upgrade-grid">
          {["Higher MP cameras", "Larger CCTV hard drive", "Video doorbell", "Additional alarm detectors", "Shock / vibration sensors", "Secondary keypads"].map((upgrade, index) => (
            <div className="upgrade" key={upgrade}><span>0{index + 1}</span><p>{upgrade}</p></div>
          ))}
        </div>
      </section>

      <section className="section area-section" id="areas">
        <div>
          <p className="eyebrow">Local response</p>
          <h2>Protecting homes across South London.</h2>
          <p>We currently prioritise selected South London neighbourhoods so we can keep response times fast and installation standards high.</p>
          <button className="button button-primary" onClick={() => openQuote("Help me choose")}>Check my postcode</button>
        </div>
        <div className="area-list">
          {locations.map((area, index) => <a href={`/locations/${area.slug}`} key={area.slug}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area.name}</strong><i>↗</i></a>)}
        </div>
      </section>

      <section className="section faq-section">
        <div><p className="eyebrow">Questions, answered</p><h2>Before you request a quote.</h2></div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className={openFaq === index ? "faq open" : "faq"} key={faq.q}>
              <button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{faq.q}</span><i>{openFaq === index ? "−" : "+"}</i></button>
              <div><p>{faq.a}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Your home, properly protected</p>
        <h2>Know the price.<br />Then make the decision.</h2>
        <p>Tell us what you want to protect and we’ll confirm the most suitable package for your property.</p>
        <button className="button button-primary" onClick={() => openQuote("Help me choose")}>Get my fixed-price quote <span>↗</span></button>
      </section>

      <footer>
        <a className="brand" href="#top">CURR<span>E</span>NT</a>
        <p>Premium alarm and CCTV installation across South London.</p>
        <div><a href="#packages">Packages</a><a href="#areas">Areas</a><button onClick={() => openQuote("Help me choose")}>Request a quote</button></div>
        <small>© {new Date().getFullYear()} CURRENT Home Security. All prices shown include standard installation unless stated otherwise.</small>
      </footer>

      {quoteOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setQuoteOpen(false)}>
          <section className="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title">
            <button className="modal-close" aria-label="Close quote form" onClick={() => setQuoteOpen(false)}>×</button>
            {!submitted ? (
              <>
                <p className="eyebrow">Fixed-price quote</p>
                <h2 id="quote-title">Tell us about your property.</h2>
                <p>We’ll use these details to confirm coverage and arrange the next step.</p>
                <form onSubmit={handleSubmit}>
                  <label>Package<select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)} required><option>Supply-only alarm kit — £835</option><option>Standard supply & install — £1,555</option><option>Top-tier supply & install — £2,950</option><option>Hikvision CCTV — from £2,550</option><option>Alarm + CCTV bundle — from £3,400</option><option>Help me choose</option></select></label>
                  <div className="form-row"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div>
                  <label>South London postcode<input name="postcode" autoComplete="postal-code" placeholder="e.g. SW19 7AA" required /></label>
                  <div className="form-row"><label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label><label>Email address<input name="email" type="email" autoComplete="email" required /></label></div>
                  <label>Anything we should know?<textarea name="notes" rows={3} placeholder="Property size, access points or preferred timing" /></label>
                  <label className="consent"><input type="checkbox" required /><span>I agree to be contacted about my home-security quote.</span></label>
                  <button className="button button-primary form-submit" type="submit">Request my quote <span>↗</span></button>
                  <small>Your information is only used to respond to your enquiry.</small>
                </form>
              </>
            ) : (
              <div className="success-state">
                <span>✓</span>
                <p className="eyebrow">Enquiry prepared</p>
                <h2>Thank you. Your home is one step closer to protected.</h2>
                <p>Your details are ready to send to the CURRENT team.</p>
                <button className="button button-primary" onClick={() => setQuoteOpen(false)}>Close</button>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
