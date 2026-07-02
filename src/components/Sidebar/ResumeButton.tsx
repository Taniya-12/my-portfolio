import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function ResumeButton() {
  return (
    <motion.a
      href={personalInfo.resumeUrl}
      download
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="relative mt-6 w-full overflow-hidden rounded-xl px-5 py-3 flex items-center justify-center gap-2 font-body font-semibold text-sm text-white
        bg-[linear-gradient(120deg,#ff6b00,#ff8a3d,#ff6b00)] bg-[length:200%_100%]
        animate-[shimmer_3s_linear_infinite]"
    >
      <Download size={16} />
      Download Resume
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[sweep_2.5s_ease-in-out_infinite]" />
    </motion.a>
  );
}
