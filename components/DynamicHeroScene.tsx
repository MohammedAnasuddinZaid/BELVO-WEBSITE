"use client";

import dynamic from "next/dynamic";

export const DynamicHeroScene = dynamic(() => import("./HeroScene").then((module) => module.HeroScene), {
  ssr: false
});
