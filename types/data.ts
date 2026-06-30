import { ProductConfig, NavItem } from "@/types";

export interface GlobalData {
  bg_color: string;
  footer: {
    brand_prefix: string;
    brand_suffix: string;
    tagline: string;
    nav: { label: string; link: string; }[];
    socials: { label: string; link: string; }[];
    copyright: string;
    built_with: string;
  };
}

export interface BerandaData {
  hero: {
    title: string;
    highlight: string;
    description: string;
    btn_primary: string;
    btn_secondary: string;
  };
  fokus: {
    title: string;
    items: string[];
  };
  tentang: {
    title: string;
    highlight: string;
    paragraphs: string[];
    badge: {
      sys: string;
      title: string;
      subtitle: string;
    };
  };
  alur: {
    title: string;
    subtitle: string;
    items: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  cta: {
    title: string;
    highlight: string;
    description: string;
    btn_primary: string;
    btn_secondary: string;
  };
}

export interface ProfilData {
  name: string;
  description: string;
  badges: string[];
}

export interface RoadmapData {
  items: {
    title: string;
    description: string;
    status: string;
  }[];
}

export interface ListData {
  items: ProductConfig[];
}
