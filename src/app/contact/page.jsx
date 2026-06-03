import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import Testimonials from "@/components/home/Testimonials";
import { createPageMetadata } from "@/lib/seo";

const ContactPage = () => {
  return (
    <>
      <ContactHero/>
      <ContactForm/>
      <Testimonials/>
    </>
  );
};

export default ContactPage;

export async function generateMetadata() {
  return createPageMetadata("/contact");
}
