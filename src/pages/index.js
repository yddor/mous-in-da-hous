import * as React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import grayScribblesLeft from "../images/gray_scribbles_left.png";
import grayScribblesRight from "../images/gray_scribbles_right.png";

import grayScribbles from "../images/gray_scribbles.png";

import merchandise from "../images/merchandise.jpg";
import paperBox from "../images/paper_box.png";
import mutation from "../images/mutation.jpg";

import Section from "../components/Section";

import RoadmapSection from "../components/RoadmapSection";
import MerchSection from "../components/MerchSection";
import TeamSection from "../components/TeamSection";

import merchandiseSectionTitle from "../images/merchandise_section_title.svg";

import stakingSectionTitle from "../images/staking_section_title.png";

import mutationSectionScribbles from "../images/mutation_section_scribbles.png";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="-mt-16">
        <div className="max-w-xl mx-auto bg-black border-2 border-rose-200 relative">
          <h1 className="text-5xl font-bold text-center p-4">
            - Da 44 Street -
          </h1>
          <p className="text-xl font-semibold p-4">
            We are a big society living in the underground of Solana. Meanwhile
            we have overtaken a subway station la 44 Street. It's our place to
            vibe, chill, rave, smoke & relax. A lot of Solana homies are
            visiting us daily! It is very hidden and invitation only. Not
            allowed to enter!
            <br />
            Arcade, ballrooms, merchandise and more on our very own.
            <br />
            MOUS CHILL IN DA HOUS!
          </p>
          <img
            className="absolute bottom-0 right-full -translate-x-3"
            src={grayScribblesLeft}
            alt=""
          />
          <img
            className="absolute bottom-0 left-full translate-x-3"
            src={grayScribblesRight}
            alt=""
          />
        </div>
      </section>
      <hr className="mt-16 border-t-4 border-rose-200 container mx-auto" />
      <RoadmapSection id="roadmap" />
      <MerchSection id="merch" />
      <Section id="mutation">
        <div className="container mx-auto">
          <img
            className="w-full lg:w-3/4 xl:w-1/2 h-auto mb-8"
            src={stakingSectionTitle}
          />
          <div className="relative">
            <img className="w-full" src={mutation} />
            <img
              className="-z-10 absolute bottom-0 max-w-none w-[140%] -left-[20%] -top-[30%]"
              src={mutationSectionScribbles}
              alt=""
            />
          </div>
          <p className="mt-4 text-center text-2xl font-semibold text-lime-400">
            Grab a potion and stake 2x $$
          </p>
        </div>
      </Section>
      <TeamSection id="team" />
    </>
  );
};

export default IndexPage;
