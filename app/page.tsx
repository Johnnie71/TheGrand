import AboutSection from "./components/aboutSection/AboutSection";
import FeaturedProperties from "./components/featured/FeaturedProperties"
import Hero from "./components/hero/Hero"
import WhyUsSection from "./components/whyUsSection/WhyUsSection";
import { getFeaturedProperties } from "./data/properties";
import { getInfo } from "./data/siteInfo"

const Home = () => {
  const info = getInfo();
  const featured = getFeaturedProperties();

  return (
    <div className="animate-fade-in">
      <div className="max-w-screen-2xl mx-auto">
        <Hero info={info} />
        <FeaturedProperties featured={featured}/>
        <AboutSection />
        <WhyUsSection />
      </div>
    </div>
  )
}

export default Home
