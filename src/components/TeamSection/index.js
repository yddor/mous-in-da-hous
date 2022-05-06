import React from "react";
import Section from "../Section";
import Header from "./Header";

import teamMember1 from "../../images/team_member_1.png";
import teamMember2 from "../../images/team_member_2.png";
import teamMember3 from "../../images/team_member_3.png";
import teamMember4 from "../../images/team_member_4.png";
import teamMember5 from "../../images/team_member_5.png";
import teamMember6 from "../../images/team_member_6.png";
import teamMember7 from "../../images/team_member_7.png";
import teamMember8 from "../../images/team_member_8.png";

import kingCrown from "../../images/king_crown.png";
import handgun from "../../images/handgun.png";
import modsMention from "../../images/mods_mention.png";

const teamMembers = [
  { name: "CRIZZY", role: "head", img: teamMember1 },
  { name: "PayD", role: "main artist", img: teamMember2 },
  { name: "SB", role: "collab manager", img: teamMember3 },
  { name: "BADAR", role: "draws mousss", img: teamMember4 },
  { name: "LIPTON", role: "silent dev", img: teamMember5 },
  { name: "???", role: "?", img: teamMember6 },
  { name: "???", role: "?", img: teamMember7 },
  { name: "???", role: "?", img: teamMember8 },
];

const TeamSection = () => {
  return (
    <Section id="team">
      <div className="container mx-auto">
        <Header className="w-full h-auto mb-8" />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative">
          {teamMembers.map((member, i) => (
            <div className="p-4 bg-pink-100" key={i}>
              <div className="pb-full relative">
                <img className="absolute inset-0" src={member.img} alt="" />
                {member.name === "CRIZZY" && (
                  <img
                    className="absolute w-3/4 -left-1/2 -top-1/4"
                    src={kingCrown}
                  />
                )}
                {member.name === "BADAR" && (
                  <img className="absolute w-1/2 -right-1/4" src={handgun} />
                )}
              </div>
              <p className="text-black text-2xl font-bold mt-4 leading-none">
                <span className="underline decoration-wavy decoration-amber-900 underline-offset-4">
                  {member.name}
                </span>{" "}
                - {member.role}
              </p>
            </div>
          ))}
          <img className="absolute right-0 top-full" src={modsMention} />
        </div>
      </div>
    </Section>
  );
};

export default TeamSection;
