import Hero from '../components/Hero';
import About from '../components/About';
import Cta from '../components/Cta';


import Services from '../components/Services';
import ProjectsCarousel from '../components/ProjectsCarosel';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      
      <Services />
      <ProjectsCarousel />
      <Cta />
    </div>
  )
}
