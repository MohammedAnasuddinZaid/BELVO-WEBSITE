import type { Metadata } from "next";
import { DashboardPreview } from "@/components/DashboardPreview";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send the signal."
        copy="Share your company, budget, service focus, and the market problem BELVO needs to solve."
      />
      <section className="section contact-grid">
        <LeadForm />
        <DashboardPreview />
      </section>
    </>
  );
}
