import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Book Consultation"
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Consultation"
        title="Book a premium strategy call."
        copy="Choose a time, define the project focus, and BELVO will qualify the opportunity through the lead scoring pipeline."
      >
        <div className="signal-card">
          <CalendarClock size={28} />
          <strong>45 min</strong>
          <span>Strategy audit format</span>
        </div>
      </PageHero>
      <section className="section booking-grid">
        <LeadForm mode="booking" />
        <div className="timeline-stage">
          <div className="timeline-line">
            {[
              ["01", "Signal review", "Budget, timeline, industry, urgency, and fit are scored."],
              ["02", "Strategy call", "BELVO maps the highest-leverage growth system."],
              ["03", "Execution plan", "You receive a phased scope across brand, media, tech, AI, and analytics."]
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
