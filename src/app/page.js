import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FranchiseOverview from "@/components/home/FranchiseOverview";
import BenefitsSection from "@/components/home/BenefitsSection";
import EarningsSection from "@/components/home/EarningsSection";
import PricingPreview from "@/components/home/PricingPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQPreview from "@/components/home/FAQPreview";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "MEET KI DUKAAN Franchise - Start Your E-commerce Business Today",
  description:
    "Join MEET KI DUKAAN franchise and build a profitable e-commerce business. Get complete training, support, and proven systems to succeed in online retail.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FranchiseOverview />
      <BenefitsSection />
      <EarningsSection />
      <PricingPreview />
      <TestimonialsSection />
      <FAQPreview />
      <CTASection />
    </div>
  );
}
