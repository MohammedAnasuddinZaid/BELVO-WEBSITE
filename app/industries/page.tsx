import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries"
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Premium playbooks for high-stakes markets."
        copy="BELVO adapts its growth engineering model for luxury, SaaS, enterprise, government, startups, and D2C brands."
      />
      <section className="section industry-grid">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <article className="industry-card" key={industry.name}>
              <Icon size={28} />
              <h3>{industry.name}</h3>
              <p>{industry.signal}</p>
              <span className="eyebrow">{industry.metric}</span>
              <Link href={`/book?industry=${encodeURIComponent(industry.name)}`} className="text-link">
                Build plan <ArrowUpRight size={15} />
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}
