import { motion } from "framer-motion";
import ProfileCard from "@/components/Sidebar/ProfileCard";
import SocialIcons from "@/components/Sidebar/SocialIcons";
import ResumeButton from "@/components/Sidebar/ResumeButton";
import AvailabilityCard from "@/components/Sidebar/AvailabilityCard";

export default function MobileProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:hidden flex flex-col items-center mx-1 mb-6 px-6 py-8 rounded-2xl border border-border bg-surface shadow-lg shadow-black/30"
    >
      <ProfileCard />
      <ResumeButton />
      <SocialIcons />
      <AvailabilityCard />
    </motion.div>
  );
}
