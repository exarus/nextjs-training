"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { SocialIcon } from "@/app/components/social-icon";
import { Button } from "@/app/components/button";

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();
  const isDesktop = width !== null && width >= 1280;
  if (isDesktop) {
    return (
      <nav className="absolute top-2.5 left-[50px] right-[50px] h-[65px] pl-6 pr-5 bg-[rgba(255,255,255,0.1)] backdrop-blur-[15px] rounded-[100px] flex items-center">
        <a href="#" className="flex items-center mr-[41px]">
          <Image
            src="/subbd-logo.svg"
            alt="Subbd Logo"
            width={113}
            height={25}
          />
        </a>
        <nav className="flex gap-6 items-center">
          <a href="#">SUBBD</a>
          <a href="#">Keys</a>
          <a href="#">Ai Features</a>
          <a href="#">Benefits</a>
          <a href="#">Team</a>
          <a href="#">Roadmap</a>
          <a href="#">Merch</a>
        </nav>
        <div className="flex-1" />
        <div className="flex items-center gap-2 mr-6">
          <SocialIcon src="/telegram.svg" alt="Subbd Telegram" />
          <SocialIcon src="/twitter.svg" alt="Subbd X" />
          <SocialIcon src="/instagram.svg" alt="Subbd Instagram" />
        </div>
        <Button size="sm">Join SUBBD</Button>
      </nav>
    );
  }
  const JustHamburger = (
    <nav className="absolute m-8 z-20">
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color="#fff"
        label="Show menu"
        rounded
      />
    </nav>
  );
  if (!isOpen) return JustHamburger;
  return (
    <>
      {JustHamburger}
      <nav className="absolute flex flex-col items-center justify-center gap-8 h-screen w-full backdrop-blur-[100px] z-10 text-5xl font-medium">
        {navItems.map((item, index) => (
          <a href="#" key={index} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
    </>
  );
};

const navItems = [
  "SUBBD",
  "Keys",
  "Ai Features",
  "Benefits",
  "Team",
  "Roadmap",
  "Merch",
];
