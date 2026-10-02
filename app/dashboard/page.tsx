import styles from "./dashboard.module.css";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Performance Dashboard | CURRENT",
  robots: { index: false, follow: false },
};

type DashboardData = {
  meta: { impressions: number; spend: number; leads: number; costPerLead: number; campaign: string };
  google: { impressions: number; averageCpc: number; spend: number };
  leads: string[][];
};

const money = (value: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
const date = (value: string) => new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/London" }).format(new Date(value));

export default async function Dashboard() {
  const rawData = process.env.DASHBOARD_DATA;
  if (!rawData) throw new Error("Dashboard data is not configured");
  const data = JSON.parse(rawData) as DashboardData;
  const totalSpend = data.meta.spend + data.google.spend;
  const leadCount = data.leads.length;

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.brand}>
            <div className={styles.mark}>CURR<i>≡</i>NT</div>
            <div><h1>Performance dashboard</h1><p>Marketing snapshot and lead register</p></div>
          </div>
          <span className={styles.updated}>Lead register updated 3 October 2026</span>
        </header>

        <section className={styles.metrics}>
          <article className={styles.card}><span className={styles.label}>Total visits</span><strong className={`${styles.value} ${styles.valueSmall}`}>Collecting now</strong><small>Visit tracking started 28 September</small></article>
          <article className={styles.card}><span className={styles.label}>Recorded leads</span><strong className={styles.value}>{leadCount}</strong><small>All supplied leads are from Meta</small></article>
          <article className={styles.card}><span className={styles.label}>Total ad spend</span><strong className={styles.value}>{money(totalSpend)}</strong><small>Google Ads and Meta combined</small></article>
          <article className={styles.card}><span className={styles.label}>Blended cost per lead</span><strong className={styles.value}>{leadCount ? money(totalSpend / leadCount) : "—"}</strong><small>Based on {leadCount} supplied leads and the last supplied spend snapshot</small></article>
        </section>

        <section className={styles.channels}>
          <article className={`${styles.card} ${styles.channel}`}>
            <div className={styles.channelHead}><h2>Google Ads</h2><span className={styles.pill}>PAID SEARCH</span></div>
            <div className={styles.stats}><div><span>Impressions</span><strong>{data.google.impressions.toLocaleString()}</strong></div><div><span>Spend</span><strong>{money(data.google.spend)}</strong></div><div><span>Average CPC</span><strong>{money(data.google.averageCpc)}</strong></div><div><span>Leads supplied</span><strong>0</strong></div></div>
          </article>
          <article className={`${styles.card} ${styles.channel} ${styles.channelMeta}`}>
            <div className={styles.channelHead}><h2>Meta Ads</h2><span className={styles.pill}>FB + IG</span></div>
            <div className={styles.stats}><div><span>Impressions</span><strong>{data.meta.impressions.toLocaleString()}</strong></div><div><span>Spend</span><strong>{money(data.meta.spend)}</strong></div><div><span>Leads</span><strong>{leadCount}</strong></div><div><span>Cost per lead*</span><strong>{leadCount ? money(data.meta.spend / leadCount) : "—"}</strong></div></div>
          </article>
          <article className={`${styles.card} ${styles.channel} ${styles.channelOrganic}`}>
            <div className={styles.channelHead}><h2>Organic</h2><span className={styles.pill}>UNPAID</span></div>
            <div className={styles.stats}><div><span>Visits</span><strong>Collecting</strong></div><div><span>Leads supplied</span><strong>0</strong></div><div><span>Spend</span><strong>£0.00</strong></div><div><span>Status</span><strong>Live</strong></div></div>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}><div><h2>Meta lead register</h2><p>{data.meta.campaign}</p></div><span className={styles.count}>{data.leads.length} leads</span></div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr><th>Created</th><th>Lead</th><th>Source</th><th>Home</th><th>Areas to protect</th><th>Lead ID</th></tr></thead>
              <tbody>{data.leads.map(([id, created, source, name, phone, email, home, areas]) => (
                <tr key={id}>
                  <td>{date(created)}</td>
                  <td><span className={styles.person}>{name}</span><a className={styles.contact} href={`tel:${phone}`}>{phone}</a><br/><a className={styles.contact} href={`mailto:${email}`}>{email}</a></td>
                  <td className={styles.source}>{source === "ig" ? "Instagram" : "Facebook"}</td>
                  <td className={styles.detail}>{home}</td>
                  <td className={styles.detail}>{areas}</td>
                  <td>{id}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </section>
        <p className={styles.notice}>Snapshot data supplied manually. *Cost per lead uses the last supplied spend against the current lead register, so it is indicative until spend is refreshed. Website visits are collected separately by Vercel Analytics and are not backfilled. Impressions have not been presented as visits.</p>
      </div>
    </main>
  );
}

