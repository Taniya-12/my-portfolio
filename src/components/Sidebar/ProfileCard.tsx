import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-border"
        animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none" />
      </motion.div>

      <h1 className="font-heading text-2xl font-bold mt-5 text-white">
        {personalInfo.name}
      </h1>
      <p className="text-accent font-medium text-sm mt-1">
        {personalInfo.role}
      </p>
      <p className="text-secondary text-sm mt-3 leading-relaxed max-w-[280px]">
        {personalInfo.intro}
      </p>
    </div>
  );
}
