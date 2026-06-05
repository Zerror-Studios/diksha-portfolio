import AboutHero from "@/components/about/AboutHero";
import CreativeExploration from "@/components/about/CreativeExploration";
import DesignPath from "@/components/about/DesignPath";
import Experiences from "@/components/about/Experiences";
import GuideProject from "@/components/about/GuideProject";
import PersonalGallery from "@/components/about/PersonalGallery";
import { createPageMetadata } from "@/lib/seo";

const AboutPage = () => {
  return (
    <>
      <AboutHero/>
      <CreativeExploration/>
      <DesignPath/>
      <Experiences/>
      <GuideProject/>
      <PersonalGallery/>
    </>
  );
};

export default AboutPage;

export async function generateMetadata() {
  return createPageMetadata("/about");
}
