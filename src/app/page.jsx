import Clients from "@/components/home/Clients";
import GuitarSection from "@/components/home/GuitarSection";
import Hero from "@/components/home/Hero";
import KeyProjects from "@/components/home/KeyProjects";
import Testimonials from "@/components/home/Testimonials";
import { createPageMetadata } from "@/lib/seo";
import { client } from "@/sanity/lib/client";
import { HOME_PROJECTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

const HomePage = async () => {

    const projects = await client.fetch(HOME_PROJECTS_QUERY);

  return (
    <>
    <Hero />
    <Clients/>
    <KeyProjects projects={projects}/>
    <GuitarSection/>
    <Testimonials/>
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
