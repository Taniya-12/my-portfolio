import type { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "QR Flow Genie",
    description:
      "A multi-tenant SaaS retail management platform enabling super admins, store owners, and managers to manage products, vendors, inventory, and store operations.",
    image: "/projects/qr-flow-genie.jpg",
    features: [
      "Built high-performance TanStack Table supporting 50,000+ products with filtering, sorting, and pagination.",
      "Implemented Server-Sent Events (SSE) for real-time updates.",
      "Developed QR code generation and bulk printing workflows.",
      "Built bulk product onboarding using CSV/PDF parsing integrations.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Next.js",
      "TanStack Table",
      "Tailwind CSS",
      "SSE",
      "REST APIs",
    ],
    githubUrl: "https://github.com/your-username/qr-flow-genie",
    liveUrl: "https://your-demo-link.com",
  },
  {
    id: "proj-2",
    title: "KonnectX",
    description:
      "A serverless live-streaming platform enabling creators to stream simultaneously to YouTube and Facebook with integrated monetization.",
    image: "/projects/konnectx.jpg",
    features: [
      "Built serverless architecture using Supabase Edge Functions.",
      "Integrated Stripe Connect for payments and revenue sharing.",
      "Implemented real-time comments and authentication using Supabase.",
      "Integrated YouTube & Facebook APIs with OAuth.",
    ],
    techStack: [
      "React (Vite)",
      "Supabase",
      "Stripe Connect",
      "Edge Functions",
      "OAuth",
      "YouTube API",
      "Facebook API",
      "TypeScript",
    ],
    githubUrl: "https://github.com/your-username/konnectx",
    liveUrl: "https://your-demo-link.com",
  },
  {
    id: "proj-3",
    title: "Indimuse (OTT Platform)",
    description:
      "A production-grade OTT streaming platform featuring subscription management, child lock, content administration, and server-side rendering for an optimized streaming experience.",
    image: "/projects/indimuse.jpg",
    features: [
      "Developed subscription management, child lock, and user access control features.",
      "Built admin modules for adding, editing, and publishing OTT content.",
      "Implemented Server-Side Rendering (SSR) and backend APIs using Next.js.",
      "Integrated MongoDB and optimized application performance and SEO.",
    ],
    techStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "MongoDB",
      "Next.js API Routes",
      "SCSS",
      "HTML5",
    ],
    githubUrl: "https://github.com/your-username/indimuse",
    liveUrl: "https://your-demo-link.com",
  },
  {
    id: "proj-4",
    title: "Flexi-move (Rental Management System)",
    description:
      "A full-stack vehicle rental management platform connecting car owners, renters, and administrators with secure verification, booking, payment processing, and location-based services.",
    image: "/projects/fleximove.jpg",
    features: [
      "Developed role-based portals for car owners, renters, and administrators with secure authentication and authorization.",
      "Built backend REST APIs using Node.js and PostgreSQL for booking, user management, and rental workflows.",
      "Integrated Stripe for secure payments, including professional driver booking and additional service charges.",
      "Implemented Google Places Address Autocomplete for accurate pickup and drop-off locations.",
      "Developed admin verification workflows for validating car owner and driver documents such as driving licenses.",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Stripe",
      "Swagger",
      "Material UI",
      "Google Places API",
    ],
    githubUrl: "https://github.com/your-username/fleximove",
    liveUrl: "https://your-demo-link.com",
  },
  {
    id: "proj-5",
    title: "Wizrspace (Cloud Storage Platform)",
    description:
      "A cloud storage application similar to Google Drive, enabling secure file management, sharing, and collaboration with an intuitive user experience.",
    image: "/projects/wizrspace.jpg",
    features: [
      "Developed file and folder upload, duplication, rename, delete, and search functionality.",
      "Implemented secure file sharing and 5GB free cloud storage.",
      "Integrated MongoDB and backend APIs for file management operations.",
      "Built a responsive interface using React.js, Next.js, SCSS, and HTML5.",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "MongoDB",
      "TypeScript",
      "SCSS",
      "HTML5",
      "REST APIs",
    ],
    githubUrl: "https://github.com/your-username/wizrspace",
    liveUrl: "https://your-demo-link.com",
  },

  // Personal Project Example (Uncomment or replace later)
  /*
  {
    id: "proj-4",
    title: "AI Portfolio",
    description:
      "A modern developer portfolio showcasing projects, experience, blogs, and AI-powered features.",
    image: "/projects/portfolio.jpg",
    features: [
      "Responsive design with dark mode.",
      "Animated UI using Framer Motion.",
      "SEO optimized with Next.js App Router.",
      "Fully customizable through JSON data.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/Taniya-12/portfolio",
    liveUrl: "https://your-portfolio.vercel.app",
  },
  */
];