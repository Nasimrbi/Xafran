import Slider from "./components/templates/index/slider/slider";
import HomeBox from "./components/templates/index/homeBox/homeBox";
import AboutCompany from "./components/modules/aboutCompany/aboutCompany";
import OurServices from "./components/modules/ourServices/ourServices";
import OurProject from "./components/templates/index/ourProject/OurProject";
import OurTeam from "./components/templates/index/ourTeam/ourTeam";
import FaqSection from "./components/templates/index/faqSection/faqSection";
import FeaturesTwo from "./components/templates/index/featuresTwo/featuresTwo";
import OurVideo from './components/templates/index/ourVideo/ourVideo';
import LogoSlider from "./components/modules/logoSlider/logoSlider";
import OurFeature from "./components/modules/ourFeature/ourFeature";
import Testimonial from "./components/modules/testimonial/testimonial";
import MainPageLayout from "@/layouts/MainPageLayout";



export default function Home() {
  return (
    <>
      <MainPageLayout>
        <Slider />
        <HomeBox />
        <AboutCompany />
        <OurServices />
        <OurProject />
        <OurTeam />
        <FaqSection />
        <FeaturesTwo />
        <OurVideo />
        <LogoSlider />
        <OurFeature />
        <Testimonial />
      </MainPageLayout>
    </>
  );
}
