import Hero from "./components/hero/Hero"
import { getHomeScreenData } from "./lib/helpers"

const Home = () => {
  const data = getHomeScreenData()

  return (
    <section>
      <div className="max-w-screen-2xl mx-auto">
        <Hero image={data} />
      </div>
    </section>
  
  )
}

export default Home
