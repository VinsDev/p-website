import About from '../src/components/partial/home/Abt'
import Education from '../src/components/partial/home/Education'
import Experience from '../src/components/partial/home/Experience'
import Hero from '../src/components/partial/home/Hero'
import Hire from '../src/components/partial/home/Hire'
import Portfolio from '../src/components/partial/home/Portfolio'
import Work from '../src/components/partial/home/Work'

export default function Home() {
  return (
    <>
      <main>
       <Hero />
       <Work />
       <About />
       <Experience />
       <Portfolio />
       <Education />
       <Hire />
      </main>
    </>
  )
}
