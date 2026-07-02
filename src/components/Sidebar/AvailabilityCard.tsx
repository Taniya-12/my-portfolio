import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

export default function AvailabilityCard() {
  return (
    <div className="mt-6 w-full rounded-xl border border-border bg-surface px-4 py-3.5">
      <p className="text-xs text-secondary font-medium tracking-wide uppercase">
        Available for Opportunities
      </p>
      <div className="flex items-center gap-2 mt-2">
        <span className="relative flex h-2.5 w-2.5">
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-green-400"
            animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
        </span>
        <span className="text-sm text-white font-medium">
          {personalInfo.availability}
        </span>
      </div>
    </div>
  );
}
