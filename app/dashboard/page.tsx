import styles from "./dashboard.module.css";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Performance Dashboard | CURRENT",
  robots: { index: false, follow: false },
};

type DashboardData = {
  meta: { impressions: number; spend: number; leads: number; costPerLead: number; campaign: string; reach?: number; dailyBudget?: number; snapshotDate?: string; reportingRange?: string };
  google: { impressions: number; averageCpc: number; spend: number };
  leads: string[][];
};

const money = (value: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
const date = (value: string) => !value || Number.isNaN(Date.parse(value)) ? "Not supplied" : new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", ...(value.includes("T") ? { timeStyle: "short" as const } : {}), timeZone: "Europe/London" }).format(new Date(value));

export default async function Dashboard() {
  const rawData = process.env.DASHBOARD_DATA;
  if (!rawData) throw new Error("Dashboard data is not configured");
  const data = JSON.parse(rawData) as DashboardData;
  const meta = data.meta;
  const totalSpend = meta.spend + data.google.spend;
  const leadCount = data.leads.length;

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.brand}>
            <div className={styles.mark}>CURR<i>≡</i>NT</div>
            <div><h1>Performance dashboard</h1><p>Marketing snapshot and lead register</p></div>
          </div>
          <span className={styles.updated}>Updated {meta.snapshotDate || "23 October 2026"}</span>
        </header>

        <section className={styles.metrics}>
          <article className={styles.card}><span className={styles.label}>Total visits</span><strong className={`${styles.value} ${styles.valueSmall}`}>Not available</strong><small>No verified website visit total supplied</small></article>
          <article className={styles.card}><span className={styles.label}>Recorded leads</span><strong className={styles.value}>{leadCount}</strong><small>Contact details supplied; Meta reports {meta.leads} leads</small></article>
          <article className={styles.card}><span className={styles.label}>Total ad spend</span><strong className={styles.value}>{money(totalSpend)}</strong><small>Google Ads and Meta combined</small></article>
          <article className={styles.card}><span className={styles.label}>Indicative blended cost per lead</span><strong className={styles.value}>{meta.leads ? money(totalSpend / meta.leads) : "—"}</strong><small>Uses {meta.leads} reported Meta leads and spend snapshots from different dates</small></article>
        </section>

        <section className={styles.channels}>
          <article className={`${styles.card} ${styles.channel}`}>
            <div className={styles.channelHead}><h2>Google Ads</h2><span className={styles.pill}>PAID SEARCH</span></div>
            <div className={styles.stats}><div><span>Impressions</span><strong>{data.google.impressions.toLocaleString()}</strong></div><div><span>Spend</span><strong>{money(data.google.spend)}</strong></div><div><span>Average CPC</span><strong>{money(data.google.averageCpc)}</strong></div><div><span>Leads supplied</span><strong>0</strong></div></div>
          </article>
          <article className={`${styles.card} ${styles.channel} ${styles.channelMeta}`}>
            <div className={styles.channelHead}><h2>Meta Ads</h2><span className={styles.pill}>FB + IG</span></div>
            <div className={styles.stats}><div><span>Impressions</span><strong>{meta.impressions.toLocaleString()}</strong></div><div><span>Spend</span><strong>{money(meta.spend)}</strong></div><div><span>Reported leads</span><strong>{meta.leads}</strong></div><div><span>Cost per lead</span><strong>{meta.leads ? money(meta.spend / meta.leads) : "—"}</strong></div></div>
          </article>
          <article className={`${styles.card} ${styles.channel} ${styles.channelOrganic}`}>
            <div className={styles.channelHead}><h2>Organic</h2><span className={styles.pill}>UNPAID</span></div>
            <div className={styles.stats}><div><span>Visits</span><strong>Not available</strong></div><div><span>Leads supplied</span><strong>0</strong></div><div><span>Spend</span><strong>£0.00</strong></div><div><span>Status</span><strong>No visit data</strong></div></div>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}><div><h2>Alarm campaign snapshot</h2><p>{meta.campaign}</p></div></div>
          <div className={styles.tableWrap}><table className={styles.table}><thead><tr><th>Reporting range</th><th>Leads</th><th>Spend</th><th>Cost per lead</th><th>Impressions</th><th>Reach</th><th>Daily budget</th></tr></thead><tbody><tr><td>{meta.reportingRange || "Not supplied"}</td><td>{meta.leads}</td><td>{money(meta.spend)}</td><td>{meta.leads ? money(meta.spend / meta.leads) : "—"}</td><td>{meta.impressions.toLocaleString()}</td><td>{meta.reach?.toLocaleString() || "Not supplied"}</td><td>{meta.dailyBudget !== undefined ? money(meta.dailyBudget) : "Not supplied"}</td></tr></tbody></table></div>
          <p className={styles.notice}>{Math.max(0, meta.leads - leadCount)} reported lead(s) await contact details. This snapshot covers the alarm campaign only; the separate electrical-check and EICR campaigns shown in the supplied screenshot are excluded.</p>
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
                  <td className={styles.source}>{source === "ig" ? "Instagram" : source === "fb" ? "Facebook" : "Meta (platform not supplied)"}</td>
                  <td className={styles.detail}>{home}</td>
                  <td className={styles.detail}>{areas}</td>
                  <td>{id.startsWith("manual:") ? "Not supplied" : id}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </section>
        <p className={styles.notice}>Snapshot data supplied manually. Meta figures and lead register updated 23 October 2026. Lead export dates are interpreted as month/day/year; no submission times were supplied. Google Ads figures remain the previous snapshot. Blended cost per lead combines differently dated channel snapshots and is indicative only. No verified website visit total has been supplied; impressions are not visits.</p>
      </div>
    </main>
  );
}

