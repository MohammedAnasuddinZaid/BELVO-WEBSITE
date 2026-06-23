import type { Metadata } from "next";
import { AIEngine } from "@/components/AIEngine";
import { DashboardPreview } from "@/components/DashboardPreview";
import { PageHero } from "@/components/PageHero";
import { techLayers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology"
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="A luxury agency with a systems architecture."
        copy="The platform is designed around Next.js, React, TypeScript, Tailwind, R3F, Three.js, Supabase, Prisma, Redis, secure APIs, analytics, and AI workflows."
      >
        <DashboardPreview />
      </PageHero>
      <section className="section tech-grid">
        {techLayers.map((layer) => {
          const Icon = layer.icon;
          return (
            <article className="tech-card" key={layer.name}>
              <Icon size={28} />
              <h3>{layer.name}</h3>
              <p>{layer.detail}</p>
            </article>
          );
        })}
      </section>
      <AIEngine />
    </>
  );
}
