import Image from "next/image";
import { SocialIcon } from "@/app/components/social-icon";
import { IconLike } from "@/app/icons/icon-like";

export const Footer = () => (
  <footer className="flex flex-col items-center gap-8 py-8 lg:pt-24 lg:flex-row lg:items-start lg:pb-14 lg:pl-11 lg:pr-9">
    <Image
      src="/subbd-logo.svg"
      alt="Subbd Logo"
      width={134}
      height={27}
      className="lg:mt-2"
    />
    <div className="flex gap-4 lg:order-3">
      <SocialIcon src="/instagram.svg" alt="Subbd Instagram" />
      <SocialIcon src="/telegram.svg" alt="Subbd Telegram" />
      <SocialIcon src="/reddit.svg" alt="Subbd Reddit" />
      <SocialIcon src="/twitter.svg" alt="Subbd X" />
      <SocialIcon src="/discord.svg" alt="Subbd Discord" />
    </div>
    <div className="flex flex-col gap-8 items-center lg:mt-2 lg:flex-1">
      <span className="flex gap-3 items-center">
        <IconLike className="fill-current text-[#FE3642]" />
        By Creators For creators
      </span>
      <span className="text-[rgba(255,255,255,0.3)] font-medium text-[13px] leading-normal">
        Copyright © 2024 SUBBD. All rights reserved.
      </span>
    </div>
  </footer>
);
