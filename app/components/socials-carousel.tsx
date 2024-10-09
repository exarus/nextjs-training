"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SocialsCard } from "@/app/components/socials-card";

export const SocialsCarousel = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <SocialsCard
        img="/subbd-instagram-bg.avif"
        icon="/instagram.svg"
        name="Instagram"
        url="https://instagram.com"
      />
      <SocialsCard
        img="/subbd-twitter-bg.avif"
        icon="/twitter.svg"
        name="Twitter"
        url="https://x.com"
      />
      <SocialsCard
        img="/subbd-telegram-bg.avif"
        icon="/telegram.svg"
        name="Telegram"
        url="https://web.telegram.org"
      />
    </Carousel>
  );
};
