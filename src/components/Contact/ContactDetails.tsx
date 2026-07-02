import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/navigation";
import type { ContactDetail } from "@/types";

const linkedin = socialLinks.find((s) => s.id === "linkedin")?.href ?? "#";
const github = socialLinks.find((s) => s.id === "github")?.href ?? "#";

const details: ContactDetail[] = [
  {
    id: "email",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "mail",
  },
  {
    id: "phone",
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: "phone",
  },
  {
    id: "location",
    label: "Location",
    value: personalInfo.location,
    icon: "map",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect with me",
    href: linkedin,
    icon: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    value: "View my code",
    href: github,
    icon: "github",
  },
];

const ICONS: Record<string, React.ReactNode> = {
  mail: <Mail size={18} />,
  phone: <Phone size={18} />,
  map: <MapPin size={18} />,
  linkedin: <Linkedin size={18} />,
  github: <Github size={18} />,
};

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-3">
      {details.map((detail, i) => {
        const content = (
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-4 rounded-lg border border-border bg-white/5 px-4 py-3.5 hover:border-accent/40 transition-colors"
          >
            <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
              {ICONS[detail.icon]}
            </span>
            <div>
              <p className="text-xs text-secondary">{detail.label}</p>
              <p className="text-sm text-white font-medium">{detail.value}</p>
            </div>
          </motion.div>
        );

        return detail.href ? (
          <a
            key={detail.id}
            href={detail.href}
            target={detail.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={detail.label}
          >
            {content}
          </a>
        ) : (
          <div key={detail.id}>{content}</div>
        );
      })}
    </div>
  );
}
