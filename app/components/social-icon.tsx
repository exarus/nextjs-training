import Image, { type ImageProps } from "next/image";

export const SocialIcon = (props: ImageProps) => (
  <a
    className="size-10 bg-[rgba(255,255,255,0.1)] flex justify-center items-center rounded-full"
    href="https://google.com"
  >
    <Image {...props} alt={props.alt} width={20} height={20} />
  </a>
);
