// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Mustafa Abbas",
  role: "Game & XR Developer",
  location: "New Delhi, India",
  status: "Open to Unity & XR roles",
  intro:
    "I build VR training simulators and multiplayer games in Unity and C#. Right now I'm a VR Developer at Sarvagya Institute, building simulators for Meta Quest with OpenXR.",
  email: "ma1243805@gmail.com",
  // WhatsApp number in international format, digits only (91 = India).
  whatsapp: "919582373726",
  whatsappDisplay: "+91 95823 73726",
  whatsappMessage: "Hi Mustafa, I saw your portfolio and would like to talk about a Unity/XR role.",
  linkedin: "https://www.linkedin.com/in/mustafa-abbas-unity/",
  github: "https://github.com/Abazz9149",
};

export type ArtKind = "cnc" | "racing" | "cards";

export const projects: {
  slug: string;
  title: string;
  kind: string;
  where: string;
  summary: string;
  points: string[];
  tags: string[];
  art: ArtKind;
}[] = [
  {
    slug: "cnc-vr",
    title: "CNC Machine Operation Module",
    kind: "VR training simulator",
    where: "Sarvagya Institute",
    summary:
      "A VR simulator where trainees learn to operate CNC machine controls safely, before they ever touch a real machine.",
    points: [
      "OpenXR integration for cross-platform VR, including Meta Quest and Oculus",
      "High-fidelity 3D interactions for operating complex CNC machine controls",
      "Step-by-step virtual instructor that guides every operation",
      "Performance tuned to minimise motion sickness and keep immersion high",
    ],
    tags: ["Unity", "C#", "OpenXR", "Meta Quest"],
    art: "cnc",
  },
  {
    slug: "racing",
    title: "Car Racing Game",
    kind: "Personal project · In progress",
    where: "Unity",
    summary:
      "A racing game built from scratch with realistic driving, AI rivals and multiple tracks.",
    points: [
      "Vehicle physics for acceleration, braking, steering, tire friction and suspension, using WheelColliders plus custom physics",
      "AI opponents with waypoint navigation, NavMesh, overtaking logic and collision avoidance",
      "Efficient scripting and asset management to hold high frame rates at speed",
      "Multiple tracks with varied terrain and interactive environments",
    ],
    tags: ["Unity", "C#", "WheelCollider", "NavMesh"],
    art: "racing",
  },
  {
    slug: "poker-ludo",
    title: "Poker Texas Hold'em & Multiplayer Ludo",
    kind: "Real-time multiplayer",
    where: "Unity",
    summary:
      "Two complete real-time multiplayer game platforms with smooth networking and AI players.",
    points: [
      "Real-time multiplayer with smooth networking",
      "AI-controlled opponents with adjustable difficulty, from Easy to Hard",
      "High-performance, responsive gameplay",
    ],
    tags: ["Unity", "C#", "Multiplayer", "Game AI"],
    art: "cards",
  },
];

export const experience = [
  {
    role: "VR Developer",
    company: "Sarvagya Institute",
    place: "New Delhi",
    period: "Nov 2025 – Present",
    points: [
      "Develop immersive VR applications in Unity and OpenXR for Oculus and cross-platform headsets",
      "Designed and built the CNC Machine Operation Module, an interactive VR training simulator",
      "Optimise performance and XR interactions for a smooth, comfortable experience across devices",
      "Collaborate on UI/UX design and asset integration, following Agile practices",
    ],
  },
  {
    role: "Unity Game Developer Intern",
    company: "TechWorld Solutions",
    place: "Faridabad, Haryana",
    period: "Jul 2025 – Sep 2025",
    points: [
      "Built 2D game features and mechanics in Unity and C#",
      "Implemented multiplayer functionality, AI logic and performance optimisations",
      "Managed Google Play Console deployment and Git version control",
    ],
  },
];

export const skills = [
  { group: "Game & XR", items: ["Unity", "OpenXR", "Oculus SDK", "Unity Editor"] },
  { group: "Languages", items: ["C#", "C", "C++", "Java", "JavaScript", "Dart"] },
  { group: "Web & mobile", items: ["MongoDB", "Express", "React", "Node.js", "Flutter", "Postman", "Git"] },
  {
    group: "Specialties",
    items: ["Multiplayer systems", "Game AI", "VR/XR interaction", "Performance optimisation", "UI/UX integration"],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Chaudhary Charan Singh University",
  period: "2022 – 2025",
};

export const certifications = [
  { name: "Unity Essentials", issuer: "Unity Technologies" },
  { name: "Programming Essentials", issuer: "Unity Technologies" },
  { name: "Unity Editor", issuer: "Unity Technologies" },
  { name: "Unity Developer", issuer: "TechWorld Solutions" },
];
