import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="BELVO is a growth engineering company."
        copy="The brand is built around luxury, intelligence, execution, and scale: a calm operating partner for companies that refuse ordinary market presence."
      />
      <section className="section about-grid">
        <div className="section-heading">
          <span className="eyebrow">Mission</span>
          <h2>Build the digital systems premium companies deserve.</h2>
          <p>
            BELVO combines brand craft, conversion science, AI automation, and enterprise-grade technology into one focused delivery model.
          </p>
        </div>
        <div className="timeline-stage">
          <div className="timeline-line">
            {[
              ["01", "Define dominance", "Market position, audience psychology, offer architecture, and proof strategy."],
              ["02", "Engineer demand", "Campaigns, content, paid media, funnels, automation, and measurement."],
              ["03", "Scale intelligence", "AI scoring, dashboards, attribution, optimization, and global adaptation."]
            ].map(([step, title, detail]) => (
              <article className="timeline-item" key={step}>
                <span className="eyebrow">{step}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
