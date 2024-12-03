import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Collaborations from "./components/Collaborations";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <main className=" h-screen w-fullv overflow-x-hidden scroll-smooth snap-y snap-mandatory overflow-y-scroll pt-24 ">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Collaborations />
        <Footer />
      </main>
    </>
  );
}
