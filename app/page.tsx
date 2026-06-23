import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarClock, Compass, Sparkles } from "lucide-react";
import { AIEngine } from "@/components/AIEngine";
import { DashboardPreview } from "@/components/DashboardPreview";
import { DynamicHeroScene } from "@/components/DynamicHeroScene";
import { ServiceGalaxy } from "@/components/ServiceGalaxy";
import { caseStudies, trustMetrics, whyBelvo } from "@/lib/site";
import { serviceCount } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <DynamicHeroScene />
        <div className="hero-content">
          <div>
            <span className="eyebrow">
              <Sparkles size={14} /> BELVO growth engineering
            </span>
            <h1>BELVO Engineering Growth. Designing Dominance.</h1>
            <p>
              BELVO builds elite digital systems, campaigns, AI workflows, and premium brand experiences for ambitious brands,
              funded startups, enterprises, and high-ticket businesses.
            </p>
            <div className="hero-actions">
              <Link href="/book" className="primary-button">
                <CalendarClock size={18} />
                <span>Start Project</span>
              </Link>
              <Link href="/services" className="secondary-button">
                <Compass size={18} />
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
          <aside className="hero-panel">
            <div className="hero-panel__logo">
              <Image src="/assets/belvo-logo.jpeg" alt="BELVO purple monogram logo" width={620} height={520} priority />
            </div>
            <div className="hero-panel__meta">
              <span>Luxury</span>
              <span>AI</span>
              <span>Scale</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="metric-grid">
          {trustMetrics.map((metric) => {
            const Icon = metric.icon;
            const value = metric.label === "Services" ? `${serviceCount}+` : metric.value;
            return (
              <article className="signal-card" key={metric.label}>
                <Icon size={24} />
                <strong>{value}</strong>
                <span>{metric.label}</span>
              </article>
            );
          })}
        </div>
      </section>

      <ServiceGalaxy />

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Why BELVO</span>
          <h2>Calm intelligence with extreme execution pressure.</h2>
          <p>
            BELVO is built for premium decision makers who need the creative room, the engineering room, and the growth room
            moving as one.
          </p>
        </div>
        <div className="why-grid">
          {whyBelvo.map((item) => {
            const Icon = item.icon;
            return (
              <article className="signal-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2>Cinematic strategy. Measured outcomes.</h2>
          </div>
          <p>Sample case narratives show how BELVO packages brand, media, AI, and conversion systems into board-level growth.</p>
        </div>
        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.client}>
              <span className="eyebrow">{study.industry}</span>
              <h3>{study.client}</h3>
              <p>
                <strong>Challenge:</strong> {study.challenge}
              </p>
              <p>
                <strong>Solution:</strong> {study.solution}
              </p>
              <div className="case-metrics">
                {study.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <AIEngine />

      <section className="section tech-lab-grid">
        <div className="section-heading">
          <span className="eyebrow">Holographic Command Center</span>
          <h2>Every lead, campaign, and project becomes visible.</h2>
          <p>
            The platform includes admin dashboard architecture for revenue, leads, conversion, active projects, AI recommendations,
            and anomaly detection.
          </p>
          <Link href="/admin" className="text-link">
            View dashboard <ArrowRight size={16} />
          </Link>
        </div>
        <DashboardPreview />
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Client Signal</span>
          <h2>Luxury brands need precision, not noise.</h2>
        </div>
        <div className="case-grid">
          {[
            ["The brand system finally felt as premium as the product.", "Founder, luxury retail"],
            ["BELVO gave our leadership team one dashboard and one growth language.", "COO, enterprise SaaS"],
            ["The AI scoring layer changed how our sales team prioritizes every inquiry.", "CMO, fintech"]
          ].map(([quote, person]) => (
            <article className="case-card" key={quote}>
              <p>{quote}</p>
              <span className="eyebrow">{person}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-wormhole">
        <div className="cta-wormhole__content">
          <div>
            <span className="eyebrow">Market dominance starts with a signal</span>
            <h2>Ready to dominate your market?</h2>
            <p>Let BELVO build your growth engine across brand, AI, media, analytics, and conversion infrastructure.</p>
            <Link href="/book" className="primary-button">
              <CalendarClock size={18} />
              <span>Book Strategy Call</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
