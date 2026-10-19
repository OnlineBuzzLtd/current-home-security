import BrandLogo from "../components/brand-logo";
import Link from "next/link";
import styles from "./style.module.css";
export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.site}><header className={styles.header}><BrandLogo/><nav aria-label="Alarm guide navigation"><Link href="/alarms">Alarm packages</Link><Link href="/alarm-guides">Guides</Link><Link className="button button-primary" href="/?quote=alarm">Get an alarm quote</Link></nav></header>{children}<footer className={styles.footer}><Link href="/alarms">Compare installed alarms</Link><Link href="/autumn-offer">Autumn offers and terms</Link><a href="tel:+447476149725">07476 149 725</a></footer></div>;
}
