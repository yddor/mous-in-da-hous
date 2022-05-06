import React from "react";
import hero from "../../images/hero.png";

const Hero = () => {
  return (
    <section className="h-screen">
      <div
        className="h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${hero}')` }}
      ></div>
    </section>
  );
};

export default Hero;
