import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { navItems } from "@/lib/site";
import { serviceCategories } from "@/lib/services";

export function Footer() {
  return (
    <footer className="footer-band">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="eyebrow">BELVO</span>
          <h2>Engineering Growth. Designing Dominance.</h2>
          <p>Premium brand, media, AI, and technology systems for companies that want a sharper market position.</p>
        </div>
        <div>
          <h3>Company</h3>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {serviceCategories.slice(0, 7).map((item) => (
            <Link key={item.category} href={`/services?category=${encodeURIComponent(item.category)}`}>
              {item.category}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:strategy@belvo.agency">
            <Mail size={15} />
            strategy@belvo.agency
          </a>
          <span>
            <MapPin size={15} />
            Global delivery
          </span>
          <Link className="footer-cta" href="/book">
            Book strategy call <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
