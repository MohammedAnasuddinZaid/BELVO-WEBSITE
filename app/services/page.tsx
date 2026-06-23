import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { serviceCategories, serviceCount } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A complete agency operating system."
        copy={`Explore ${serviceCount}+ BELVO capabilities across creative, advertising, AI, technology, analytics, PR, commerce, events, and enterprise client services.`}
      >
        <div className="dashboard-preview">
          <div className="dashboard-stat-grid">
            {serviceCategories.slice(0, 4).map((group) => (
              <article key={group.category}>
                <small>{group.category}</small>
                <strong>{group.items.length}</strong>
                <span>capabilities</span>
              </article>
            ))}
          </div>
        </div>
      </PageHero>
      <ServiceExplorer />
    </>
  );
}
