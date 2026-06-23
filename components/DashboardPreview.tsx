import { dashboardStats } from "@/lib/site";

export function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="dashboard-preview__bar">
        <span />
        <span />
        <span />
      </div>
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
        <span style={{ height: "38%" }} />
        <span style={{ height: "64%" }} />
        <span style={{ height: "52%" }} />
        <span style={{ height: "88%" }} />
        <span style={{ height: "74%" }} />
        <span style={{ height: "96%" }} />
      </div>
    </div>
  );
}
