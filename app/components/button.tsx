import Image from "next/image";
import React from "react";

export const Button = ({ children, size = "md" }: PropTypes) => {
  const buttonSize =
    size === "sm" ? "px-5 py-3 gap-2 text-[13px]" : "px-6 py-4 gap-3 text-base";
  const iconSize = size === "sm" ? 16 : 20;
  return (
    <button
      type="button"
      className={`bg-gradient-to-r from-[#E11F28] to-[#FE3642] flex items-center gap-3 rounded-[100px] leading-[1.4] font-semibold ${buttonSize} $`}
    >
      <Image
        src="/like.svg"
        alt="Subbd Discord"
        width={iconSize}
        height={iconSize}
      />
      {children}
    </button>
  );
};

type PropTypes = {
  children: React.ReactNode;
  size?: "sm" | "md";
};
