"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SocialsCard } from "@/app/components/socials-card";
import { useWindowSize } from "@uidotdev/usehooks";

export const SocialsCarousel = () => {
  const { width } = useWindowSize();
  const isDesktop = width !== null && width >= 1280;
  const responsive = {
    sm: { breakpoint: { max: 640 - 1, min: 0 }, items: 1 },
    lg: { breakpoint: { max: 1024 - 1, min: 640 }, items: 2 },
    xl: { breakpoint: { max: 1280 - 1, min: 1024 }, items: 3 },
  };
  const Cards = cardsProps.map((card, index) => (
    <SocialsCard
      key={index}
      img={card.img}
      icon={card.icon}
      name={card.name}
      url={card.url}
      square={isDesktop}
    />
  ));
  return isDesktop ? (
    <div className="flex gap-[23px] justify-center">{Cards}</div>
  ) : (
    <Carousel responsive={responsive}>{Cards}</Carousel>
  );
};

const cardsProps = [
  {
    img: "/subbd-instagram-bg.avif",
    icon: "/instagram.svg",
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    img: "/subbd-twitter-bg.avif",
    icon: "/twitter.svg",
    name: "Twitter",
    url: "https://x.com",
  },
  {
    img: "/subbd-telegram-bg.avif",
    icon: "/telegram.svg",
    name: "Telegram",
    url: "https://web.telegram.org",
  },
];
