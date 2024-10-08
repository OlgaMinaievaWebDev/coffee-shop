import Menu from "../components/Menu";
import About from "../components/About";
import Button from "./Button";
import Contact from "../components/Contact";

function HeroSection() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center  bg-darkerBrown text-white text-center px-4 py-12 h-[80vh] lg:max-w-auto mx-auto">
        <h1 className="text-4xl font-heading mb-4 md:text-7xl md:mb-8">
          Discover the <span className="text-orange">Art</span> of Coffee
        </h1>
        <p className="text-base font-body max-w-2xl md:text-lg">
          Welcome to our roastery, where every cup is a masterpiece. Savor the
          rich aroma and nuanced flavors of our freshly roasted beans. Here,
          every sip is more than just coffee—it's a moment of delight and
          inspiration.
        </p>
        <div className="flex gap-8 py-4 mt-4 ">
          <Button type="primary">Shop Now</Button>
          <Button type="secondary">Learn More</Button>
        </div>
      </section>
      <section>
        <Menu />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default HeroSection;
