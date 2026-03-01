
import About from "./sections/About";
import Project from "./sections/Project";
import Education from "./sections/Education";
import Faq from "./sections/Faq";
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
      <Logo addClass="relative mx-auto aspect-square w-1/2 sm:hidden my-2 " />
      <About />
      <Project />
      <Education />
      <Faq />
      <CTA />
    </>
  );
}
