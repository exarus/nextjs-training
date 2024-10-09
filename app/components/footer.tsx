import Image from "next/image";
import { FooterSocialIcon } from "@/app/components/footer-social-icon";
import { IconLike } from "@/app/icons/icon-like";

export const Footer = () => (
  <footer className="flex flex-col items-center gap-8 py-8 lg:pt-24 lg:pb-14 lg:pl-11 lg:pr-9">
    <Image src="/subbd-logo.svg" alt="Subbd Logo" width={134} height={27} />
    <div className="flex gap-4">
      <FooterSocialIcon src="/instagram.svg" alt="Subbd Instagram" />
      <FooterSocialIcon src="/telegram.svg" alt="Subbd Telegram" />
      <FooterSocialIcon src="/reddit.svg" alt="Subbd Reddit" />
      <FooterSocialIcon src="/twitter.svg" alt="Subbd X" />
      <FooterSocialIcon src="/discord.svg" alt="Subbd Discord" />
    </div>
    <div className="flex flex-col pt-2 gap-8 items-center">
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
