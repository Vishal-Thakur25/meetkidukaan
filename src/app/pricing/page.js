import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import ROICalculator from "@/components/pricing/ROICalculator";
import PricingFAQ from "@/components/pricing/PricingFAQ";

export const metadata = {
  title: "MEET KI DUKAAN Franchise Pricing - Investment Plans & ROI",
  description:
    "Explore MEET KI DUKAAN franchise investment plans starting from ₹2,99,000. Compare features, calculate ROI, and choose the perfect plan for your business goals.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <ComparisonTable />
      <ROICalculator />
      <PricingFAQ />
    </>
  );
}
