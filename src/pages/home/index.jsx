import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Works from "../../components/Works";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
};

export default Home;
