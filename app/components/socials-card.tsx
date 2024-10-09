export const SocialsCard = ({
  img,
  icon,
  name,
  url,
  square = false,
}: PropsType) => (
  <div
    className={`relative flex flex-col items-center justify-center gap-4 leading-[1.4] h-[385px] ${square ? "aspect-square" : ""}`}
  >
    <div
      className="absolute inset-0 opacity-50 bg-top bg-cover -z-10"
      style={{ backgroundImage: `url(${img})` }}
    />
    <div
      className="rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-[15.262px] size-14 bg-[length:24px_24px] bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${icon})` }}
    />
    <div className="font-medium text-[32px]">{name}</div>
    <a
      href={url}
      className="mt-4 font-semibold text-[13px] px-5 py-[11px] border border-[rgba(255, 255, 255, 0.5)] rounded-[100px]"
    >
      Check profile
    </a>
  </div>
);

type PropsType = {
  img: string;
  icon: string;
  name: string;
  url: string;
  square?: boolean;
};
