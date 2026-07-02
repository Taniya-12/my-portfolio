import { motion } from "framer-motion";
import SectionTitle from "@/components/Common/SectionTitle";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-16 pb-24 scroll-mt-32">
      <SectionTitle
        eyebrow="Get In Touch"
        title="Contact"
        description="Have a project in mind or just want to say hi? My inbox is open."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6 sm:p-8 grid md:grid-cols-2 gap-8"
      >
        <ContactDetails />
        <ContactForm />
      </motion.div>
    </section>
  );
}
