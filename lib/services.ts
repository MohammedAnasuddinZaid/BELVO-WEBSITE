import {
  BarChart3,
  Bot,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Clapperboard,
  Code2,
  Gem,
  Globe2,
  Handshake,
  Megaphone,
  MessageCircle,
  MousePointer2,
  Palette,
  RadioTower,
  Search,
  Share2,
  ShoppingBag,
  Sparkles,
  Target,
  Trophy,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceCategory =
  | "Creative"
  | "Advertising"
  | "Digital Marketing"
  | "Media"
  | "PR"
  | "Strategy"
  | "Social"
  | "Technology"
  | "Analytics"
  | "Commerce"
  | "Events"
  | "Industry"
  | "AI"
  | "Client Services";

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  summary: string;
};

export type ServiceCategoryGroup = {
  category: ServiceCategory;
  icon: LucideIcon;
  accent: string;
  narrative: string;
  items: string[];
};

const serviceGroups: ServiceCategoryGroup[] = [
  {
    category: "Creative",
    icon: Palette,
    accent: "#8B5CF6",
    narrative: "Brand systems, campaign ideas, story craft, and premium design production.",
    items: [
      "Brand identity and logo design",
      "Campaign concept and ideation",
      "Art direction",
      "Copywriting",
      "Tagline and slogan creation",
      "Storyboarding",
      "TV commercial production",
      "Radio ad production",
      "Video production and direction",
      "Photography direction",
      "Motion graphics and animation",
      "2D and 3D animation",
      "Graphic design",
      "Illustration",
      "Packaging design",
      "Print ad design",
      "Infographic design",
      "Brand guidelines creation",
      "Rebranding",
      "Mascot and character design",
      "Jingle and audio branding",
      "Typography design"
    ]
  },
  {
    category: "Advertising",
    icon: Megaphone,
    accent: "#F6C85F",
    narrative: "High-impact paid media across traditional, digital, and immersive channels.",
    items: [
      "Television advertising",
      "Radio advertising",
      "Print advertising",
      "Out-of-home and billboard advertising",
      "Transit advertising",
      "Cinema advertising",
      "Digital display advertising",
      "Programmatic advertising",
      "Native advertising",
      "Retargeting and remarketing",
      "Connected TV advertising",
      "Podcast advertising",
      "In-game advertising",
      "Streaming audio ads",
      "Digital out-of-home advertising",
      "Influencer advertising",
      "Co-operative advertising",
      "Directory and classified advertising"
    ]
  },
  {
    category: "Digital Marketing",
    icon: Search,
    accent: "#2DD4BF",
    narrative: "Performance, content, funnels, optimization, and demand systems built to scale.",
    items: [
      "Search engine optimization",
      "Technical SEO",
      "Local SEO",
      "Google Ads and PPC management",
      "Bing Ads management",
      "Performance marketing",
      "Email marketing",
      "SMS and WhatsApp marketing",
      "Push notification campaigns",
      "Content marketing",
      "Blog and article writing",
      "Affiliate marketing management",
      "YouTube and video marketing",
      "Podcast marketing",
      "Mobile marketing",
      "App store optimization",
      "Conversion rate optimization",
      "Landing page optimization",
      "A/B and multivariate testing",
      "Growth hacking",
      "Demand generation",
      "Account-based marketing",
      "Lead generation",
      "Marketing funnel management"
    ]
  },
  {
    category: "Media",
    icon: RadioTower,
    accent: "#60A5FA",
    narrative: "Planning, buying, attribution, and media intelligence for serious spend.",
    items: [
      "Media strategy",
      "Audience research and targeting",
      "TV and radio media buying",
      "Print media buying",
      "Digital media buying",
      "Programmatic media buying",
      "OOH media buying",
      "Cross-channel media planning",
      "Media performance tracking and reporting",
      "Media auditing",
      "Trading desk operations",
      "Real-time bidding management",
      "Media mix modelling",
      "Attribution modelling",
      "Reach and frequency planning"
    ]
  },
  {
    category: "PR",
    icon: MessageCircle,
    accent: "#F472B6",
    narrative: "Trust, reputation, media relations, and executive communications.",
    items: [
      "Media relations",
      "Press release writing and distribution",
      "Crisis communication management",
      "Corporate communications",
      "Investor relations",
      "Government and public affairs",
      "Reputation management",
      "Thought leadership content",
      "Executive communications and coaching",
      "Spokesperson training",
      "Internal communications",
      "Employee engagement communications",
      "CSR and sustainability communications",
      "Event PR",
      "Celebrity and influencer relations",
      "Awards and editorial placement",
      "Broadcast PR"
    ]
  },
  {
    category: "Strategy",
    icon: BrainCircuit,
    accent: "#A3E635",
    narrative: "Market logic, positioning, product routes, and growth architecture.",
    items: [
      "Brand strategy",
      "Market research and consumer insights",
      "Competitive analysis",
      "Go-to-market strategy",
      "Product launch strategy",
      "Pricing strategy",
      "Business transformation consulting",
      "Customer journey mapping",
      "Segmentation and targeting",
      "Brand architecture strategy",
      "Portfolio strategy",
      "Innovation consulting",
      "Sustainability and ESG consulting",
      "Category strategy",
      "Retail strategy",
      "International expansion strategy"
    ]
  },
  {
    category: "Social",
    icon: Share2,
    accent: "#FB7185",
    narrative: "Social systems, creators, communities, commerce, and cultural velocity.",
    items: [
      "Social media strategy",
      "Account setup and management",
      "Community management",
      "Content calendar planning",
      "Social content creation",
      "Paid social campaigns",
      "TikTok marketing",
      "YouTube channel management",
      "Social listening and monitoring",
      "Influencer identification and management",
      "Creator partnerships",
      "User-generated content strategy",
      "Social commerce",
      "Meme and trend marketing",
      "Reputation monitoring"
    ]
  },
  {
    category: "Technology",
    icon: Code2,
    accent: "#38BDF8",
    narrative: "Digital products, websites, apps, integrations, and marketing infrastructure.",
    items: [
      "Website design and development",
      "UX/UI design",
      "Mobile app development",
      "Web app development",
      "E-commerce development",
      "CMS setup and management",
      "CRM setup and integration",
      "Marketing automation",
      "MarTech consulting",
      "AdTech stack management",
      "Data management platform setup",
      "Customer data platform setup",
      "Chatbot and AI tool development",
      "API integrations",
      "Digital product design",
      "Accessibility consulting"
    ]
  },
  {
    category: "Analytics",
    icon: BarChart3,
    accent: "#22C55E",
    narrative: "Measurement, intelligence, dashboards, attribution, and predictive visibility.",
    items: [
      "Campaign analytics and reporting",
      "Web analytics",
      "Customer data analysis",
      "Audience segmentation",
      "Predictive analytics",
      "Attribution modelling",
      "ROI measurement and tracking",
      "Brand health tracking",
      "Sentiment analysis",
      "Data visualization dashboards",
      "First-party data strategy",
      "Third-party data partnerships",
      "Competitive intelligence",
      "Consumer behavior research",
      "Focus groups and surveys",
      "Ethnographic research",
      "Eye-tracking and neuromarketing studies"
    ]
  },
  {
    category: "Commerce",
    icon: ShoppingBag,
    accent: "#F59E0B",
    narrative: "Retail growth, marketplace performance, loyalty, and D2C infrastructure.",
    items: [
      "E-commerce strategy",
      "Amazon and marketplace advertising",
      "Shopper marketing",
      "Retail activation campaigns",
      "In-store POS and display design",
      "Trade marketing",
      "D2C strategy",
      "Loyalty program design and management",
      "Promotional campaigns",
      "Sales promotion design",
      "Coupon and sampling programmes",
      "Retail media management",
      "Subscription marketing"
    ]
  },
  {
    category: "Events",
    icon: Trophy,
    accent: "#E879F9",
    narrative: "Physical and hybrid experiences that turn attention into memory.",
    items: [
      "Brand activations",
      "Pop-up events and experiences",
      "Trade show and exhibition marketing",
      "Product launch events",
      "Live event production",
      "Virtual and hybrid events",
      "Sponsorship management",
      "Sports and entertainment sponsorship",
      "Immersive and experiential installations",
      "Fan engagement campaigns",
      "Roadshows",
      "Sampling and demo events",
      "Award shows and galas"
    ]
  },
  {
    category: "Industry",
    icon: Gem,
    accent: "#C2CAD8",
    narrative: "Specialized playbooks for regulated, luxury, government, and high-value sectors.",
    items: [
      "Healthcare and pharma marketing",
      "Medical device marketing",
      "Financial services marketing",
      "Insurance marketing",
      "Political and government campaigns",
      "Public sector communications",
      "Sports marketing",
      "Entertainment marketing",
      "Luxury brand marketing",
      "Fashion and beauty marketing",
      "FMCG and CPG marketing",
      "Automotive marketing",
      "Real estate and property marketing",
      "Travel and tourism marketing",
      "Non-profit and cause marketing",
      "Education marketing",
      "B2B marketing",
      "SaaS and tech marketing",
      "Startup marketing"
    ]
  },
  {
    category: "AI",
    icon: Bot,
    accent: "#B794F4",
    narrative: "AI production, personalization, predictive planning, AR/VR, spatial, and Web3.",
    items: [
      "Generative AI content creation",
      "AI-powered ad personalization",
      "AI creative production at scale",
      "Conversational marketing chatbots",
      "Predictive audience modelling",
      "Augmented Reality campaigns",
      "Virtual Reality experiences",
      "Metaverse marketing and activations",
      "NFT and Web3 campaigns",
      "Voice search optimization",
      "Smart speaker and voice assistant marketing",
      "Spatial computing marketing",
      "Dynamic creative optimization",
      "AI media planning and buying tools"
    ]
  },
  {
    category: "Client Services",
    icon: Handshake,
    accent: "#93C5FD",
    narrative: "Operating models, retainers, adaptation, governance, and capability building.",
    items: [
      "Integrated campaign management",
      "Agency-of-record services",
      "Roster agency management",
      "Project-based campaign delivery",
      "Creative retainer management",
      "Freelancer and vendor sourcing",
      "Localization and translation",
      "Global campaign adaptation",
      "Diversity equity and inclusion marketing",
      "Cultural and multicultural marketing",
      "Franchise marketing",
      "Co-branding and partnership campaigns",
      "Trademark and IP brand management",
      "Training and capability building for clients"
    ]
  }
];

const iconFallbacks: LucideIcon[] = [
  Sparkles,
  Target,
  MousePointer2,
  Clapperboard,
  Boxes,
  BriefcaseBusiness,
  Globe2,
  Users
];

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const serviceCategories = serviceGroups;

export const services: Service[] = serviceGroups.flatMap((group) =>
  group.items.map((title) => ({
    id: `${slug(group.category)}-${slug(title)}`,
    title,
    category: group.category,
    summary: `${group.category} capability for premium brands that need precise execution, measurable impact, and boardroom-ready reporting.`
  }))
);

export const serviceCount = services.length;

export function getCategory(category: ServiceCategory) {
  return serviceCategories.find((group) => group.category === category) ?? serviceCategories[0];
}

export function iconForIndex(index: number) {
  return iconFallbacks[index % iconFallbacks.length];
}
