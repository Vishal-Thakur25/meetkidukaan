import ApplyHero from "@/components/apply/ApplyHero";
import ApplicationForm from "@/components/apply/ApplicationForm";
import ProcessSteps from "@/components/apply/ProcessSteps";

export const metadata = {
  title: "Apply for MEET KI DUKAAN Franchise - Start Your Application Today",
  description:
    "Apply for MEET KI DUKAAN franchise opportunity. Fill out our application form and take the first step towards building your e-commerce empire.",
};

export default function ApplyPage() {
  return (
    <>
      <ApplyHero />
      <ProcessSteps />
      <ApplicationForm />
    </>
  );
}
