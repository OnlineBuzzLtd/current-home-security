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
const date = (value: string) => !value || Number.isNaN(Date.parse(value)) ? "Not supplied" : new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/London" }).format(new Date(value));

export default async function Dashboard() {
  const rawData = process.env.DASHBOARD_DATA;
  if (!rawData) throw new Error("Dashboard data is not configured");
  const data = JSON.parse(rawData) as DashboardData;
  // Manually supplied Meta screenshot, received 16 October 2026.
  const ads = [
    { name: "New Leads ad · row 1", leads: 3, spend: 93, impressions: 3088, reach: 1526 },
    { name: "New Leads ad · row 2", leads: 0, spend: 52.19, impressions: 2467, reach: 1343 },
    { name: "New Leads ad · row 3", leads: 10, spend: 276.10, impressions: 10455, reach: 3769 },
  ];
  const meta = ads.reduce((total, ad) => ({ leads: total.leads + ad.leads, spend: total.spend + ad.spend, impressions: total.impressions + ad.impressions }), { leads: 0, spend: 0, impressions: 0 });
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
          <span className={styles.updated}>Meta figures updated 16 October 2026</span>
        </header>

        <section className={styles.metrics}>
          <article className={styles.card}><span className={styles.label}>Total visits</span><strong className={`${styles.value} ${styles.valueSmall}`}>Collecting now</strong><small>Visit tracking started 28 September</small></article>
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
            <div className={styles.stats}><div><span>Visits</span><strong>Collecting</strong></div><div><span>Leads supplied</span><strong>0</strong></div><div><span>Spend</span><strong>£0.00</strong></div><div><span>Status</span><strong>Live</strong></div></div>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}><div><h2>Meta ad breakdown</h2><p>Three rows supplied on 16 October 2026. The screenshot does not show its reporting date range.</p></div></div>
          <div className={styles.tableWrap}><table className={styles.table}><thead><tr><th>Ad</th><th>Leads</th><th>Spend</th><th>Cost per lead</th><th>Impressions</th><th>Reach</th></tr></thead><tbody>{ads.map(ad => <tr key={ad.name}><td>{ad.name}</td><td>{ad.leads}</td><td>{money(ad.spend)}</td><td>{ad.leads ? money(ad.spend / ad.leads) : "No leads reported"}</td><td>{ad.impressions.toLocaleString()}</td><td>{ad.reach.toLocaleString()}</td></tr>)}</tbody></table></div>
          <p className={styles.notice}>Reach is shown per ad only because the same people may see multiple ads. {Math.max(0, meta.leads - leadCount)} reported lead(s) do not yet have contact details in the register. Row numbers distinguish the identical ad names shown in the screenshot.</p>
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
        <p className={styles.notice}>Snapshot data supplied manually. Meta screenshot received: 16 October 2026 (reporting date range not visible); Google Ads figures remain the previously supplied snapshot. Four new leads have no supplied creation date, platform breakdown or Meta lead ID. Meta cost per lead includes spend across all three supplied ad rows, including the row with no reported leads. Blended cost per lead combines differently dated channel snapshots and is indicative only. Website visits are collected separately by Vercel Analytics and are not backfilled. Impressions have not been presented as visits.</p>
      </div>
    </main>
  );
}

