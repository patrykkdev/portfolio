export interface Project {
  no: string;
  title: string;
  tech: string;
  preview: string;
  href: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  desc: string;
}

export const CONTACT = {
  email: "ptrkkulpa1@gmail.com",
  github: "https://github.com/patrykkdev",
  githubLabel: "github.com/patrykkdev",
  location: "Bydgoszcz, PL",
} as const;

export const HERO_WORDS = ["Projektuję", "Koduję", "Wdrażam", "Projektuję"];

export const MARQUEE_TECH = [
  "React",
  "Node.js",
  "MongoDB",
  "Docker",
  "Unity",
  "Linux",
  "Python",
  "Java",
];

export const PROJECTS: Project[] = [
  {
    no: "01",
    title: "Digital Signage",
    tech: "React · Node.js",
    preview: "Digital signage — aplikacja webowa",
    href: "#",
  },
  {
    no: "02",
    title: "System galeryjny + CMS",
    tech: "Node.js · MongoDB",
    preview: "System galeryjny z własnym CMS",
    href: "#",
  },
  {
    no: "03",
    title: "Kiosk gier na Ubuntu",
    tech: "Unity · Linux · Puppet",
    preview: "Środowisko gier Unity na Ubuntu Server",
    href: "#",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2024 — TERAZ",
    title: "Software Developer",
    org: "Exon Computer Systems · Toruń",
    desc: "Tworzenie aplikacji webowych dla systemów digital signage oraz gier w Unity. Budowa systemów galeryjnych z własnym CMS, przygotowanie środowiska z grami na Ubuntu Server (watchdogi, kiosk-mode, dystrybucja konfiguracji przez Puppet). Wdrożenie domeny Active Directory, konfiguracja sieci i monitoring infrastruktury w Zabbixie.",
  },
  {
    period: "2021",
    title: "Praktyki zawodowe",
    org: "BluSoft · Bydgoszcz",
    desc: "Tworzenie stron w WordPressie, praca w Google Workspace i Microsoft Office.",
  },
  {
    period: "OBECNIE",
    title: "Student informatyki",
    org: "Politechnika Bydgoska · Bydgoszcz",
    desc: "Kierunek: Informatyka Stosowana. Łączę studia z pracą zawodową — rozwijam się w obszarze inżynierii oprogramowania, algorytmów i administracji systemami.",
  },
];

export const STACK = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Python",
  "Docker",
  "Java",
  "Unity",
  "Linux",
  "Git",
];

export const INFRA = [
  "Ubuntu Server",
  "Puppet",
  "Zabbix",
  "Active Directory",
  "Sieci",
];

export const CERTS = ["Certified Zabbix User", "Google UX/UI Certificate"];

export const LANGUAGES = "Języki: angielski C1 · hiszpański podstawowy";

export const MENU_LINKS = [
  { no: "01", label: "Start", href: "#top" },
  { no: "02", label: "Projekty", href: "#projekty" },
  { no: "03", label: "Doświadczenie", href: "#doswiadczenie" },
  { no: "04", label: "Kontakt", href: "#kontakt" },
];
