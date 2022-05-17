import React from "react";
import Section from "../Section";
import Header from "./Header";

import roadmap from "../../images/roadmap.jpg";
import scribbles from "../../images/roadmap_scribbles.png";

const RoadmapSection = () => {
  return (
    <Section id="roadmap">
      <div className="container mx-auto">
        <Header className="w-full h-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-0.5 text-black font-bold font-gaegu tracking-tighter">
          <div className="bg-slate-300">
            <h2 className="h-20 p-2 flex flex-col justify-center text-2xl text-yellow-50 font-bold text-center bg-stone-900">
              ROADMAP 1.0 | 44TH
            </h2>
            <p className="text-xl leading-none p-2">
              The treasure of 44th St. - This will be our community wallet which
              is tied to our DAO. Multisig wallet where members can vote on how
              funds should and will be spent. We will buy bluechips, coins and
              more over time to higher the value of our DAO. 55% of the mint
              funds will be stored in the community wallet. We will not lose
              money but always bring more liquidity into the treasure of 44th
              St.
            </p>
          </div>
          <div className="bg-slate-300">
            <h2 className="h-20 p-2 flex flex-col justify-center text-2xl text-yellow-50 font-bold text-center bg-stone-900">
              2500 PHYSICAL MYSTERY BOXES
            </h2>
            <p className="text-xl leading-none p-2">
              Yes, you read that right. There will be 2500 mystery boxes
              available for purchase.
              <br />
              Ingredients could be: Hoodie, T-shirt, joggers, ashtray, rolling
              tray, papers, rugs, ...
            </p>
          </div>
          <div className="bg-slate-300">
            <h2 className="h-20 p-2 flex flex-col justify-center text-4xl text-yellow-50 font-bold text-center bg-stone-900">
              TOKENOMICS
            </h2>
            <p className="text-xl leading-none p-2">
              Of course, a must have!
              <br />
              $44th will lead you the way into the Subway! With a wide utility,
              MOUS can spend all their earnings at 1 place: The Underground
              dealer market.
              <br />8 $44th a day for staking one MOUS on our custom platform.
            </p>
          </div>
          <div className="bg-slate-300">
            <h2 className="h-20 p-2 flex flex-col justify-center text-2xl text-yellow-50 font-bold text-center bg-stone-900">
              UNDERGROUND DEALER MARKET
            </h2>
            <p className="text-xl leading-none p-2">
              What can I find there and what currencies are allowed?
              <br />
              Hard to find in New York City but literally a treasure fund there.
              <br />
              $44th only - Lottery, auction, casino, trading your coins for
              selectable NFTs & more.
            </p>
          </div>
          <div className="bg-slate-300">
            <h2 className="h-20 p-2 flex flex-col justify-center text-3xl text-yellow-50 font-bold text-center bg-stone-900">
              POTIONS AT UDM
            </h2>
            <p className="text-xl leading-none p-2">
              2 months have passed by since 4444 MOUS got released. There's a
              rumor that potions are available for purchase at the UDM. They
              turn the MOUS into something different, they look sooo cracked and
              dead. WTF is happening?
              <br />
              More information soon... ?!?!?
            </p>
          </div>
          <div className="bg-slate-300">
            <h2 className="h-20 p-2 flex flex-col justify-center text-2xl text-yellow-50 font-bold text-center bg-stone-900">
              REAL LIFE EVENTS
            </h2>
            <p className="text-xl leading-none p-2">
              Meet-ups, merchandise pop ups for holders and frens in big cities.
              <br />
              NYC 44th pull up?
              <br />
              Amsterdam smoking pop up?
              <br />
              We're down for whatever. Let's build!
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="w-full border-t-2 border-black" src={roadmap} />
          <img
            className="absolute top-1/2 -translate-y-1/2 -left-4 -translate-x-full"
            src={scribbles}
          />
        </div>
      </div>
    </Section>
  );
};

export default RoadmapSection;
