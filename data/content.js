export const profile = {
  name: "Prashant Singh",
  role: "Frontend Tech Lead",
  company: "CyberX Info System",
  experience: "2.6+ years",
  email: "singprashantcs99@gmail.com",
  phone: "6386027699",
  phoneHref: "tel:+916386027699",
  emailHref: "mailto:singprashantcs99@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/prashant-singh-725794253?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  location: "India",
  tagline: "Building products from UI to infrastructure.",
  summary:
    "I am a Frontend Tech Lead with 2.6+ years of hands-on experience building and shipping real products — not just screens. I enjoy owning the full journey: clean UI, solid API integration, authentication, cloud deployment, and the final user experience. Today I lead frontend work at CyberX Info System on Medisray and Medisway, while also collaborating businesses on freelance website and mobile app development.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const aboutPoints = [
  {
    title: "Curious by nature",
    text: "I don’t stop at “it works.” I dig into why a feature behaves the way it does — from UI state and API payloads to DNS, SSL, and production logs — so problems get fixed at the root.",
  },
  {
    title: "Practical & shipping-focused",
    text: "I prefer solutions that can go live quickly and stay stable. That means reusable components, clear validation, reliable authentication, and deployment setups that teams can maintain.",
  },
  {
    title: "End-to-end mindset",
    text: "Beyond frontend, I work across React Native, AWS, CI/CD, and environment management. My goal is simple: build products that look great and run confidently in production.",
  },
];

export const experience = [
  {
    role: "Frontend Tech Lead",
    company: "CyberX Info System",
    period: "Present",
    points: [
      "Leading frontend architecture and delivery for Medisray and Medisway across websites, admin panels, and mobile apps.",
      "Shipped the Medisray Android application live on Google Play, with the iOS version currently in progress.",
      "Building the Medisway mobile application for both Android and iOS using React Native.",
      "Managing API integration, authentication flows, staging/production environments, and cloud-ready deployments.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Cipher9 Innovations Pvt Ltd",
    period: "Previous",
    points: [
      "Developed and integrated Anantapro (anantapro.ai), focusing on polished product flows and conversion-ready UI.",
      "Collaborated with product and backend teams to ship stable React/Next.js features into production.",
      "Improved interface consistency, responsiveness, and overall frontend quality across the product.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Mobiolitte Technologies India Pvt Ltd",
    period: "Previous",
    points: [
      "Built and integrated Arbique (arbique.com) with clean, responsive interfaces and smooth user journeys.",
      "Worked closely on API-driven screens, reusable UI patterns, and production-ready frontend delivery.",
      "Strengthened fundamentals in React, JavaScript, and collaborative software development.",
    ],
  },
];

export const projects = [
  {
    name: "Medisray",
    url: "https://medisray.com",
    image: "/projects/medisray.png",
    type: "Healthcare Platform",
    status: "Current",
    description:
      "An all-in-one clinic management ecosystem covering doctor websites, admin tools, digital prescriptions, billing workflows, and mobile access. The Android app is live on Google Play, with iOS coming soon.",
    stack: ["React", "Next.js", "TypeScript", "React Native"],
    links: [
      { label: "Website", href: "https://medisray.com" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.medisray.app&hl=en_IN",
      },
    ],
  },
  {
    name: "Medisway",
    url: "https://medisway.com",
    image: "/projects/medisway.png",
    type: "Healthcare Platform",
    status: "Current",
    description:
      "A patient-facing healthcare platform for discovering trusted doctors, with website and admin experiences already in place. The Medisway Android and iOS apps are currently under active development.",
    stack: ["React", "Next.js", "React Native", "Redux"],
    links: [{ label: "Website", href: "https://medisway.com" }],
  },
  {
    name: "Anantapro",
    url: "https://anantapro.ai",
    image: "/projects/anantapro.png",
    type: "AI / Blockchain Product",
    status: "Previous",
    description:
      "Built and integrated modern product interfaces for Anantapro, focusing on clear messaging, smooth interactions, and a frontend experience ready for real users.",
    stack: ["React", "Next.js", "JavaScript", "APIs"],
    links: [{ label: "Website", href: "https://anantapro.ai" }],
  },
  {
    name: "Arbique",
    url: "https://arbique.com",
    image: "/projects/arbique.png",
    type: "AI Trading Platform",
    status: "Previous",
    description:
      "Developed responsive product screens and frontend integrations for Arbique, with attention to usability, visual polish, and stable production behaviour.",
    stack: ["React", "JavaScript", "UI Systems", "APIs"],
    links: [{ label: "Website", href: "https://arbique.com" }],
  },
];

export const services = [
  {
    title: "Website Development",
    text: "I design and build fast, modern websites and web apps with React and Next.js — from landing pages and business sites to dashboards and full product frontends.",
  },
  {
    title: "Android App Development",
    text: "I build Android applications with React Native, focusing on clean UI, smooth performance, API integration, and Play Store–ready delivery.",
  },
  {
    title: "iOS App Development",
    text: "I develop iOS applications with the same React Native codebase mindset — polished interfaces, reliable workflows, and App Store–ready structure.",
  },
  {
    title: "End-to-End Collaboration",
    text: "Need more than just UI? I can help with authentication, API integration, staging/production setup, and getting your product ready to launch.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "Material UI", icon: "mui" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "React Native", icon: "react" },
      { name: "Android", icon: "android" },
      { name: "iOS", icon: "apple" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS S3", icon: "aws" },
      { name: "CloudFront", icon: "aws" },
      { name: "GitHub Actions", icon: "github" },
      { name: "CI/CD", icon: "cicd" },
      { name: "DNS", icon: "dns" },
      { name: "SSL", icon: "ssl" },
    ],
  },
  {
    title: "Engineering",
    items: [
      { name: "API Integration", icon: "api" },
      { name: "Authentication", icon: "auth" },
      { name: "Staging & Production", icon: "deploy" },
      { name: "UI Responsiveness", icon: "responsive" },
      { name: "Product Ownership", icon: "product" },
    ],
  },
];
