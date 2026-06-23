import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Cpu,
  DatabaseZap,
  Gem,
  Globe2,
  LineChart,
  Lock,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const trustMetrics = [
  { label: "Services", value: "233+", icon: Sparkles },
  { label: "Campaigns", value: "1000+", icon: Rocket },
  { label: "Industries", value: "50+", icon: Globe2 },
  { label: "Global Reach", value: "24/7", icon: Radar }
];

export const whyBelvo = [
  {
    title: "Full-stack execution",
    detail: "Strategy, creative, media, technology, analytics, and AI under one operating rhythm.",
    icon: BriefcaseBusiness
  },
  {
    title: "AI-powered systems",
    detail: "Lead scoring, content operations, budget recommendations, and predictive campaign signals.",
    icon: Bot
  },
  {
    title: "Luxury-grade design",
    detail: "Brand experiences with restraint, polish, cinematic motion, and conversion discipline.",
    icon: Gem
  },
  {
    title: "Data-driven growth",
    detail: "Dashboards, attribution, experiments, and boardroom-ready performance reporting.",
    icon: BarChart3
  },
  {
    title: "Global scalability",
    detail: "Localization, campaign adaptation, governance, security, and enterprise delivery models.",
    icon: Globe2
  }
];

export const caseStudies = [
  {
    client: "AURELIA",
    industry: "Luxury Retail",
    challenge: "The brand had recognition but no digital growth engine.",
    solution: "Rebuilt identity, high-ticket landing journeys, creator media, and AI-assisted lead nurture.",
    metrics: ["312% revenue lift", "4.8x ROAS", "41% higher AOV"]
  },
  {
    client: "NEBULA PAY",
    industry: "Fintech",
    challenge: "The launch required trust, clarity, and enterprise demand.",
    solution: "Built GTM strategy, paid search architecture, animated product storytelling, and executive PR.",
    metrics: ["18k qualified leads", "63% CAC drop", "9 markets opened"]
  },
  {
    client: "VOLTAGE ONE",
    industry: "SaaS",
    challenge: "Pipeline quality was low and sales cycles were expensive.",
    solution: "Installed ABM, AI scoring, intent dashboards, and conversion experiments across the site.",
    metrics: ["2.6x SQL rate", "52% funnel lift", "$7.4M pipeline"]
  }
];

export const industries = [
  { name: "Luxury", signal: "Premium demand, scarcity, and cultural authority.", icon: Gem, metric: "High-AOV growth" },
  { name: "Startups", signal: "Launch velocity, market proof, and investor-grade momentum.", icon: Rocket, metric: "Faster GTM" },
  { name: "SaaS", signal: "Pipeline quality, product clarity, and retention intelligence.", icon: Cpu, metric: "Better MRR" },
  { name: "Enterprise", signal: "Governance, multi-market scale, and stakeholder confidence.", icon: Building2, metric: "Global rollout" },
  { name: "Government", signal: "Trust, accessibility, public affairs, and secure execution.", icon: ShieldCheck, metric: "Public impact" },
  { name: "D2C", signal: "Media efficiency, conversion lift, retention, and commerce systems.", icon: Target, metric: "Margin growth" }
];

export const techLayers = [
  { name: "Experience Layer", detail: "Next.js, React, Tailwind, Framer Motion, GSAP, Lenis, accessibility primitives.", icon: ArrowRight },
  { name: "Immersion Layer", detail: "Three.js, React Three Fiber, Drei, GLSL shaders, particles, post-processing, LOD strategy.", icon: Cpu },
  { name: "Data Layer", detail: "Supabase auth, PostgreSQL, Prisma models, Redis queues, analytics events, lead state.", icon: DatabaseZap },
  { name: "AI Layer", detail: "OpenAI-ready assistant, lead scoring, service recommendation, campaign anomaly hooks.", icon: Bot },
  { name: "Trust Layer", detail: "Rate limiting, validation, secure headers, RBAC-ready roles, audit-friendly architecture.", icon: Lock },
  { name: "Measurement Layer", detail: "GA4, Mixpanel, Hotjar, Sentry, Datadog-ready logs, uptime monitoring hooks.", icon: LineChart }
];

export const dashboardStats = [
  { label: "Revenue influenced", value: "$18.4M", change: "+28%" },
  { label: "Qualified leads", value: "4,812", change: "+36%" },
  { label: "Conversion rate", value: "12.8%", change: "+4.2%" },
  { label: "Active projects", value: "47", change: "+9" }
];

export const aiNodes = [
  "Lead scoring",
  "Ad optimization",
  "Prediction",
  "Automation",
  "Personalization",
  "Anomaly detection"
];

export type Role = {
  title: string;
  team: string;
  mode: string;
  icon: LucideIcon;
};

export const roles: Role[] = [
  { title: "Senior Growth Strategist", team: "Strategy", mode: "Remote / Hybrid", icon: Target },
  { title: "Three.js Experience Engineer", team: "Immersive", mode: "Remote", icon: Cpu },
  { title: "AI Automation Architect", team: "AI Systems", mode: "Remote", icon: Bot },
  { title: "Luxury Brand Designer", team: "Creative", mode: "Hybrid", icon: Gem },
  { title: "Lifecycle Marketing Lead", team: "Growth", mode: "Remote", icon: Users },
  { title: "Client Partner", team: "Enterprise", mode: "Hybrid", icon: CalendarClock }
];
