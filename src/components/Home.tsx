import IntroText from "./heading/Heading";
import Hero from "./hero/Hero";
import InfiniteScroll from "./infiniteScroll/InfiniteScroll";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Footer from './footer/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <InfiniteScroll />
      <IntroText />
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
};

export default Home;
