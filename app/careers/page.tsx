import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { roles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers"
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the team building the next agency model."
        copy="BELVO needs people who can think in systems, care about craft, and execute with enterprise discipline."
      />
      <section className="section role-grid">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <article className="role-card" key={role.title}>
              <Icon size={28} />
              <h3>{role.title}</h3>
              <p>{role.team}</p>
              <span className="eyebrow">{role.mode}</span>
            </article>
          );
        })}
      </section>
    </>
  );
}
