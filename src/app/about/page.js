import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import TeamSection from "@/components/about/TeamSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";

export const metadata = {
  title: "About MEET KI DUKAAN - Leading E-commerce Franchise in India",
  description:
    "Learn about MEET KI DUKAAN's journey, mission, and how we've helped 500+ entrepreneurs build successful e-commerce businesses across India.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <AchievementsSection />
      <TeamSection />
      <WhyChooseSection />
    </>
  );
}
