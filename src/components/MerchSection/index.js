import React from "react";
import Section from "../Section";
import Header from "./Header";
import merchandise from "../../images/merchandise.jpg";
import paperBox from "../../images/paper_box.png";

const MerchSection = () => {
  return (
    <Section id="merch">
      <div className="container mx-auto grid grid-cols-12 grid-flow-row-dense gap-4">
        <p className="col-start-1 col-end-13 sm:col-start-6 md:col-start-7 lg:col-start-9 xl:col-start-10 2xl:col-start-11 font-caveat text-4xl text-rose-200 text-right">
          Mysteryboxxeesss being built! 2500 random boxes. Ashtrays, hoodies,
          tees, caps, joggers and more?
        </p>
        <div className="col-span-full xl:col-span-8 2xl:col-span-9 flex items-end">
          <Header className="w-full h-auto translate-y-1/4 -z-10" />
        </div>
      </div>
      <div className="container mx-auto md:grid md:grid-cols-10">
        <div className="md:row-span-full md:col-start-1 md:col-end-10">
          <img className="w-full" src={merchandise} />
        </div>
        <p className="md:block md:row-span-full md:col-span-2 md:col-end-11 md:self-center font-caveat text-4xl text-amber-300 text-right">
          Shopping!!!
        </p>
        <div className="hidden md:block md:row-span-full md:col-span-2 md:col-end-11 md:self-end">
          <img className="w-full" src={paperBox} alt="" />
        </div>
      </div>
    </Section>
  );
};

export default MerchSection;
