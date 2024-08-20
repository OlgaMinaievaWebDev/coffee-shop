function About() {
  return (
    <div className="p-2 md:p-8 bg-darkerBrown text-white w-full">
      <h2 className="text-xl font-bold text-orange-dark text-center mb-4 uppercase">
        About Us
      </h2>
      <div className="flex flex-col gap-3 md:flex-row md:gap-12 h-full p-4">
        <p className="text-center md:text-left text-sm md:text-base">
          Founded in Toronto in 2016,{" "}
          <span className="text-orange">Roasters</span> began with a passion for
          making exceptional specialty coffee accessible to our community. As a
          locally owned coffee roastery, we focus on quality, sustainability,
          and transparency in every cup. Starting from a small space in the
          heart of Toronto, we've grown to become a trusted name in specialty
          coffee, now operating multiple locations across the city. We are proud
          to be a full-service roastery, café, and wholesale partner, committed
          to bringing the best coffee experiences to our community and beyond.
        </p>
        <div className="flex items-center justify-center md:w-1/2">
          <img
            src="../../public/about-roastery.jpeg"
            className="h-56 w-auto md:h-auto md:w-full"
          />
        </div>
      </div>

      <h2 className="text-xl font-bold text-orange-dark text-center mb-4 uppercase">
        Our Coffee
      </h2>
      <div className="flex flex-col gap-3 md:flex-row md:gap-12 h-full p-4">
        <p className="text-center text-sm  md:text-left md:text-base">
          At <span className="text-orange">Roasters</span>, our commitment to
          quality begins with the relationships we've built with coffee farmers
          and producers around the world. These partnerships are the foundation
          of our business, and we work closely with our producers to ensure
          sustainable, long-term collaborations. We source in-season coffee
          beans from exceptional growers to bring out the best in every cup.
          Before a coffee makes it to our menu, it undergoes rigorous cupping
          and tasting sessions to meet our high standards. Our careful roasting
          process focuses on enhancing the bean's natural flavors, reflecting
          its origin, varietal, and processing style, so you can experience the
          true essence of each coffee.
        </p>
        <div className="flex items-center justify-center md:w-1/2">
          <img
            src="../../public/about-roastery2.jpeg"
            className="h-56 w-auto md:h-auto md:w-full"
          />
        </div>
      </div>

      <h2 className="text-xl font-bold text-orange-dark text-center mb-4 uppercase">
        Our Team
      </h2>
      <div className="flex flex-col gap-3 md:flex-row md:gap-12 h-full p-4">
        <p className="text-center md:text-left text-sm md:text-base">
          At <span className="text-orange">Roasters</span>, we believe that
          everyone has a place here, regardless of your background or goals.
          We're committed to creating an environment where our team can grow, be
          supported, and explore their talents to the fullest. We might be a
          small team, but we're driven by collaboration, passion, and a
          relentless pursuit of excellence in everything we do. Want to be part
          of our crew? Drop us a line at info@roasters.com—we'd love to connect!
        </p>
        <div className="flex items-center justify-center md:w-1/2">
          <img
            src="../../public/about-roastery3.jpeg"
            className="h-56 w-auto md:h-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
