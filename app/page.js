import Hero from '@app/Hero/page'

import About from './about/page';
import Projects from './Projects/page';
import Contact from './Contact/page';

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}
