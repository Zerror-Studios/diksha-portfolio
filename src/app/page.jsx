import Clients from "@/components/home/Clients";
import GuitarSection from "@/components/home/GuitarSection";
import Hero from "@/components/home/Hero";
import KeyProjects from "@/components/home/KeyProjects";
import Testimonials from "@/components/home/Testimonials";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <Hero />
    <Clients/>
    <KeyProjects/>
    <GuitarSection/>
    <Testimonials/>
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
