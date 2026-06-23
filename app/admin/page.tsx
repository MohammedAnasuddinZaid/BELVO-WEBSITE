import type { Metadata } from "next";
import { Bot, KanbanSquare, LineChart, Users } from "lucide-react";
import { DashboardPreview } from "@/components/DashboardPreview";
import { PageHero } from "@/components/PageHero";
import { dashboardStats } from "@/lib/site";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard"
};

const adminModules: Array<{ title: string; detail: string; icon: LucideIcon }> = [
  { title: "CRM Pipeline", detail: "Lead stages, notes, reminders, and owner assignment.", icon: KanbanSquare },
  { title: "Analytics", detail: "Funnels, ROAS, CPA, revenue influence, and performance alerts.", icon: LineChart },
  { title: "AI Recommendations", detail: "Lead score, best service bundle, next action, and anomaly detection.", icon: Bot },
  { title: "Client Health", detail: "Project status, delivery risk, stakeholder notes, and renewal signals.", icon: Users }
];

export default function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Admin"
        title="Command center for growth operations."
        copy="A dark premium dashboard surface for leads, CRM, analytics, AI recommendations, project status, and executive reporting."
      >
        <DashboardPreview />
      </PageHero>
      <section className="section admin-grid">
        <div className="dashboard-preview">
          <div className="dashboard-stat-grid">
            {dashboardStats.map((stat) => (
              <article key={stat.label}>
                <small>{stat.label}</small>
                <strong>{stat.value}</strong>
                <span>{stat.change}</span>
              </article>
            ))}
          </div>
          <div className="dashboard-chart">
            <span style={{ height: "44%" }} />
            <span style={{ height: "72%" }} />
            <span style={{ height: "58%" }} />
            <span style={{ height: "92%" }} />
            <span style={{ height: "80%" }} />
          </div>
        </div>
        <div className="tech-grid" style={{ gridTemplateColumns: "1fr" }}>
          {adminModules.map((module) => {
            const Icon = module.icon;
            return (
              <article className="tech-card" key={module.title}>
                <Icon size={26} />
                <h3>{module.title}</h3>
                <p>{module.detail}</p>
            </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
