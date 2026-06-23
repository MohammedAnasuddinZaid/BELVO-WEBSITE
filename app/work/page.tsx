import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work"
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Case studies engineered for proof."
        copy="Sample case studies demonstrate BELVO's intended operating model: premium positioning, technical execution, AI intelligence, and measurable performance."
      />
      <section className="section case-grid">
        {caseStudies.map((study) => (
          <article className="case-card" key={study.client}>
            <span className="eyebrow">{study.industry}</span>
            <h3>{study.client}</h3>
            <p>{study.challenge}</p>
            <p>{study.solution}</p>
            <div className="case-metrics">
              {study.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
