import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact MEET KI DUKAAN - Book Your Free Consultation",
  description:
    "Get in touch with MEET KI DUKAAN franchise experts. Book a free consultation to learn how you can start your e-commerce business today.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
}
