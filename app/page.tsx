
import About from "./sections/About";
import Features from "./sections/Features";
import CTA from "./sections/CTA";
import Nav from "./sections/Nav";
import Logo from "./Logo";


export default function Home() {
  return (
    <>
      <Nav />
      <Logo size={50} classAdd="sm:hidden my-4"/>
      <About/>
      <Features />
      <CTA />
    </>
  );
}
