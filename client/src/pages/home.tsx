import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import FeaturesGrid from "@/components/sections/features-grid";
import AboutContent from "@/components/sections/about-content";
import ContactForm from "@/components/sections/contact-form";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <FeaturesGrid />
      <AboutContent />
      <ContactForm />
    </motion.div>
  );
}
