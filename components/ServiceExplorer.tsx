"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Filter, Search } from "lucide-react";
import { getCategory, iconForIndex, serviceCategories, services } from "@/lib/services";

export function ServiceExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return services.filter((service) => {
      const categoryMatch = category === "All" || service.category === category;
      const textMatch =
        normalized.length === 0 ||
        service.title.toLowerCase().includes(normalized) ||
        service.summary.toLowerCase().includes(normalized);
      return categoryMatch && textMatch;
    });
  }, [category, query]);

  return (
    <section className="section services-explorer">
      <div className="explorer-toolbar">
        <label className="search-field">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services" />
        </label>
        <label className="select-field">
          <Filter size={18} />
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>All</option>
            {serviceCategories.map((group) => (
              <option key={group.category}>{group.category}</option>
            ))}
          </select>
        </label>
        <div className="result-count">{filtered.length} capabilities</div>
      </div>
      <div className="service-card-grid">
        {filtered.map((service, index) => {
          const group = getCategory(service.category);
          const Icon = index < serviceCategories.length ? group.icon : iconForIndex(index);
          return (
            <article className="service-card" key={service.id} style={{ "--accent": group.accent } as React.CSSProperties}>
              <div className="service-card__top">
                <span className="service-icon">
                  <Icon size={20} />
                </span>
                <small>{service.category}</small>
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <a href={`/book?service=${encodeURIComponent(service.title)}`} className="text-link">
                Scope this <ArrowUpRight size={15} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
