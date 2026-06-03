import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DevOps from "./components/Devops";
import Experience from "./components/Experience";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevOps />
        <Experience />
        <GithubStats />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;