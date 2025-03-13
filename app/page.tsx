import Hero from "./components/hero/Hero"
import WelcomeSection from "./components/welcomeSection/WelcomeSection"
import { getHomeScreenData } from "./lib/helpers"

const Home = () => {
  const data = getHomeScreenData()

  return (
    <section>
      <div className="max-w-screen-2xl mx-auto">
        <Hero image={data} />
        <WelcomeSection />
      </div>
    </section>
  
  )
}

export default Home
