import Image from "next/image";

export const Button = () => (
  <button
    type="button"
    className="bg-gradient-to-r from-[#E11F28] to-[#FE3642] flex px-6 py-4 items-center gap-3 rounded-[100px]"
  >
    <Image src="/like.svg" alt="Subbd Discord" width={20} height={20} />
    See more content
  </button>
);
