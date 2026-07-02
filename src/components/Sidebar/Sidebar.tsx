import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import SocialIcons from "./SocialIcons";
import ResumeButton from "./ResumeButton";
// import AvailabilityCard from "./AvailabilityCard";

export default function Sidebar() {
  const year = new Date().getFullYear();

  return (
    <div className="hidden lg:block w-[360px] shrink-0 pt-8">
      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-[100px] flex flex-col justify-between max-h-[calc(100vh-124px)] rounded-2xl border border-border bg-surface px-8 py-10 shadow-xl shadow-black/30"
      >
        <div className="flex flex-col items-center w-full overflow-y-auto overflow-x-hidden no-scrollbar px-1">
          <ProfileCard />
          <ResumeButton />
          <SocialIcons />
          {/* <AvailabilityCard /> */}
        </div>

        <p className="text-center text-xs text-secondary mt-10 shrink-0">
          © {year} Taniya Kumari. All rights reserved.
        </p>
      </motion.aside>
    </div>
  );
}
