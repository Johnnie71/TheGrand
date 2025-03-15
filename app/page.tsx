import FeaturedProperties from "./components/featured/FeaturedProperties"
import Hero from "./components/hero/Hero"
import { getFeaturedProperties } from "./data/properties";
import { getInfo } from "./data/siteInfo"

const Home = () => {
  const info = getInfo();
  const featured = getFeaturedProperties();

  return (
    <section>
      <div className="max-w-screen-2xl mx-auto">
        <Hero info={info} />
        <FeaturedProperties featured={featured}/>
      </div>
    </section>
  
  )
}

export default Home
