
import About from "./sections/About";
import Project from "./sections/Project";
import Education from "./sections/Education";
import CTA from "./sections/CTA";
import Nav from "./sections/Nav";
import Logo from "./Logo";


export default function Home() {
  return (
    <>
      <Nav />
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-6 mb-2">
        Alex Taylor
      </h1>
      <Logo size={50} classAdd="sm:hidden my-4" />
      <About />
      <Project />
      <Education />
      <CTA />
    </>
  );
}
