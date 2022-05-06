import React from "react";
import logo from "../../images/logo.svg";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

import { TwitterIcon, DiscordIcon, MagicEdenIcon } from "./Icons";

const externalLinks = [
  {
    href: "https://twitter.com/MousInDaHous",
    icon: TwitterIcon,
  },
  {
    href: "https://discord.com/",
    icon: DiscordIcon,
  },
  {
    href: "https://magiceden.io/drops/midh",
    icon: MagicEdenIcon,
  },
];

const anchors = [
  { name: "Roadmap", section: "roadmap" },
  { name: "Merch", section: "merch" },
  { name: "Mutation", section: "mutation" },
  { name: "Team", section: "team" },
];
{
  /* <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
          <rect width="32" height="3" y="9" />
          <rect width="32" height="3" y="20" />
        </svg> */
}
const Navbar = () => {
  return (
    <div className="absolute m-auto top-0 left-0 right-0 container mx-auto flex justify-between">
      <div className="h-16 p-2 bg-stone-900 flex items-center">
        <img src={logo} alt="logo" />
      </div>
      <nav className="flex flex-col sm:flex-row items-end sm:items-stretch space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col sm:flex-row">
          {externalLinks.map((link, i) => (
            <a
              className="p-4 flex items-center bg-stone-900 hover:bg-stone-800"
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon />
            </a>
          ))}
        </div>
        <Menu as="div" className="relative text-lg">
          {({ open }) => (
            <>
              <Menu.Button
                className={`${
                  open ? "bg-stone-800" : "bg-stone-900"
                } hover:bg-stone-800 h-full p-4 flex justify-center items-center font-semibold`}
              >
                Explore
                <ChevronDownIcon className="ml-1 h-6 w-6" aria-hidden="true" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 w-full focus:outline-none">
                {anchors.map((anchor, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <a
                        className={`${
                          active ? "bg-stone-800" : "bg-stone-900"
                        } hover:bg-stone-800 font-semibold block w-full px-4 py-2 text-left`}
                        href={`#${anchor.section}`}
                      >
                        {anchor.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </>
          )}
        </Menu>
      </nav>
    </div>
  );
};

export default Navbar;
